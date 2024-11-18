import { sep } from "path";

export default class Data {

    static dateToString(data: Date = new Date()): string {
        const pad = (n: number) => n.toString().padStart(2, '0');
        const d = data ?? new Date();
        const ano = d.getFullYear();
        const mes = pad(d.getMonth() + 1);
        const dia = pad(d.getDate());
        const hora = pad(d.getHours());
        const minutos = pad(d.getMinutes());
        return `${ano}-${mes}-${dia}T${hora}:${minutos}`;
    }

    static stringToDate(data: string): Date {
        const separate = data.split('T');
        const [ano, mes, dia] = separate[0].split('-');
        const [hora, minuto] = separate[1].split(':');
        return new Date(parseInt(ano), parseInt(mes)-1, parseInt(dia), parseInt(hora), parseInt(minuto));
    }    

}