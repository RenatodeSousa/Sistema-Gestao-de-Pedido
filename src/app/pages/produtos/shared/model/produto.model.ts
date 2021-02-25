import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';
import {Categoria} from "../../../categorias/shared/model/categoria.model";
export class Produto extends BaseResourceModel {
  constructor(
    public id?: number,
    public nome?: string,
    public descricao?: string,
    public preco?: number,
    public categoria?: Categoria,
    public quantidadeTotal?: number,
  ) {
    super();
  }

  static fromJson(jsonData: any): Produto {
    return Object.assign(new Produto(), jsonData);
  }
}
