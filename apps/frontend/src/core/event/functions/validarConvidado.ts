import Convidado from "../model/Convidado";
import Evento from "../model/Evento";

export default function validarConvidado(convidado: Partial<Convidado>): string[] {
    const erros: string[] = [];
    const fieldsNotNull = [
        {key: 'nome', value: convidado.nome},
        {key: 'email', value: convidado.email}
    ];
    fieldsNotNull.map(field => {
        if(!field.value) {
            erros.push(`${field.key} é obrigatório`);
        }
    });
    return erros;
}