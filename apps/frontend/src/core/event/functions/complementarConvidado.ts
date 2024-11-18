import Convidado from "../model/Convidado";
import validarConvidado from "./validarConvidado";

export default function complementarConvidado(convidado: Partial<Convidado>): Convidado {
    const erros = validarConvidado(convidado);
    if(erros.length > 0)
        throw new Error(erros.join('\n'));
    const qtdeAcompanhantes = convidado.qtdeAcompanhantes ?? 0;
    const possuiAcompanhantes = convidado.possuiAcompanhante && convidado.confirmado && qtdeAcompanhantes > 0;
    const convidadoAtualizado = {
        ...convidado,
        qtdeAcompanhantes: possuiAcompanhantes ? qtdeAcompanhantes : 0,
        possuiAcompanhante: possuiAcompanhantes
    };
    return convidadoAtualizado as Convidado;
}