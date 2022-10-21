import { TipoRaça } from "./tipo-raça.model";
import { RegistroProducao } from "./registro-producao.model";
import { Pessoa } from "./pessoa.model";

export class Coordenada {
    id?: any;
    latitude?: number;
    longitude?: number;
    sexo?: string;
    raca?: TipoRaça;
    estagio?: string;
    idade?: number;
    escore?: string;
    registroProducao?: RegistroProducao[];
    numeroRegistro?: number;
    tipoSanguineo?: string;
    criador?: Pessoa;
    variedade?: string;
    composicaoRacial?: string;
}

