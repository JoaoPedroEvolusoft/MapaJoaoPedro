import { Municipio } from "./municipio.model";
import { Coordenada } from "./coordenada.model";

export class Endereço {
    id?: any;
    cepPadrao?: number;
    bairro?: string;
    complemento?: string;
    logradouro?: string;
    municipio?: Municipio;
    coordenada?: Coordenada;
    globalCode?: string;
}

