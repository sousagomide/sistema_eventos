import { Id } from "@/core/shared";
import Convidado from "../model/Convidado";

export default function criarConvidadoVazio(): Partial<Convidado> {
    return {
        id: Id.novo(),
        nome: '',
        email: '',
        confirmado: true,
        possuiAcompanhante: false,
        qtdeAcompanhantes: 0
    };
}