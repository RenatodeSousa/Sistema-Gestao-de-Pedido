import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';
import {Endereco} from "../../../shared/components/base-endereco-Form/shared/model/endereco.model";
export class Vendedor extends BaseResourceModel {
  constructor(
    public id?: number,
    public nome?: string,
    public telefones?: string[],
    public endereco?: Endereco,
    public email?: string,
    public statusCliente?: string,
    public dataNascimento?: Date,
    public imageUrl?: string,
  ) {
    super();
  }

  static fromJson(jsonData: any): Vendedor {
    return Object.assign(new Vendedor(), jsonData);
  }



}
