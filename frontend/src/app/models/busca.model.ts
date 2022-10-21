import { Municipio } from "./municipio.model";
import { Categoria } from "./categoria.model";

export class Busca {
    id?: any;
    nome?: string;
    municipios?: Municipio;
    categoria?: Categoria;
    progressoDaBuscaPorMunicipio?: string;
    progressoDaBuscaPorCategoria?: string;
    dataDeInicioDaBusca?: any;
    dataFimDaBusca?: any;
    ultimaAtualizacao?: any;
    Estado?: string;
}

