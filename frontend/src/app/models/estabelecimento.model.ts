import { Endereço } from "./endereço.model";
import { Categoria } from "./categoria.model";

export class Estabelecimento {
    id?: any;
    nome?: string;
    endereco?: Endereço;
    categoria?: Categoria[];
    placeId?: string;
}

