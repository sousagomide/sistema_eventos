import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common';
import { complementarConvidado, complementarEvento, Convidado, Data, Evento, eventos, Id, Senha } from 'core';
import { EventoPrisma } from './evento.prisma';

@Controller('eventos')
export class EventosController {

    constructor(
        private readonly eventoPrisma: EventoPrisma
    ) {}

    @Post()
    async salvarEvento(@Body() evento: Evento) {
        const eventoCadastrado = await this.eventoPrisma.buscarPorAlias(evento.alias);
        if(eventoCadastrado && eventoCadastrado.id !== evento.id)
            throw new Error('Já existe um evento com esse alias.');
        const eventoCompleto = complementarEvento(this.deserializar(evento));
        await this.eventoPrisma.salvar(eventoCompleto);
    }

    @Post(':alias/convidado')
    async salvarConvidado(@Param('alias') alias: string, @Body() convidado: Convidado) {
        const evento = await this.eventoPrisma.buscarPorAlias(alias);
        if(!evento)
            throw new Error('Evento não encontrado!');
        const convidadoCompleto = complementarConvidado(convidado);
        await this.eventoPrisma.salvarConvidado(evento, convidadoCompleto);
    }

    @Post('acessar')
    async acessarEvento(@Body() dados: { id: string, senha: string }) {
        const evento = await this.eventoPrisma.buscarPorId(dados.id);
        if(!evento)
            throw new HttpException('Evento não encontrado!', 404);
        if(evento.senha !== dados.senha)
            throw new HttpException('Senha não corresponde ao evento!', 400);
        return this.serializar(evento);
    }

    @Get()
    async buscarEventos() {
        const eventos = await this.eventoPrisma.buscarTodos();
        return eventos.map(this.serializar);
    }

    @Get(':idAlias')
    async buscarEvento(@Param('idAlias') idAlias: string) {
        let evento: Evento;
        if(Id.valido(idAlias))
            evento = await this.eventoPrisma.buscarPorId(idAlias);
        else
            evento = await this.eventoPrisma.buscarPorAlias(idAlias);
        return this.serializar(evento);
    }

    @Get('validar/:alias/:id')
    async validarAlias(@Param('alias') alias: string, @Param('id') id: string) {
        const evento = await this.eventoPrisma.buscarPorAlias(alias);
        return { valido: !evento || evento.id === id };
    }

    private serializar(evento: Evento) {
        if(!evento) return null;
        return {
            ...evento,
            data: Data.dateToString(evento.data)
        }
    }

    private deserializar(evento: any): Evento {
        return {
            ...evento,
            data: Data.stringToDate(evento.data)
        }
    }
}
