import { Coordenada } from "./coordenada.model";
import { UnidadeFederativa } from "./unidade-federativa.model";

export class Municipio {
    id?: any;
    nome?: string;
    coordenada?: Coordenada;
    CodigoIBDE?: string;
    uf?: UnidadeFederativa;
}

