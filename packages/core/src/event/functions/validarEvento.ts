import Evento from "../model/Evento";

export default function validarEvento(evento: Partial<Evento>): string[] {
    const erros: string[] = [];
    const fieldsNotNull = [
        {key: 'alias', value: evento.alias},
        {key: 'nome', value: evento.nome},
        {key: 'descricao', value: evento.descricao},
        {key: 'data', value: evento.data},
        {key: 'local', value: evento.local},
        {key: 'publicoEsperado', value: evento.publicoEsperado},
        {key: 'imagem', value: evento.imagem},
        {key: 'imagemBackground', value: evento.imagemBackground}
    ];
    fieldsNotNull.map(field => {
        if(!field.value) {
            erros.push(`${field.key} é obrigatório`);
        }
    });
    return erros;
}