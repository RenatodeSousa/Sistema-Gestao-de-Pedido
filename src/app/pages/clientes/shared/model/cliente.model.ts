import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';
import {Endereco} from "../../../../shared/components/base-endereco-Form/shared/model/endereco.model";
export class Cliente extends BaseResourceModel {
  constructor(
    public id?: number,
    public nome?: string,
    public telefones?: string[],
    public endereco?: Endereco,
    public email?: string,
    public cpfOuCnpj?: string,
    public statusCliente?: string,
    public dataNascimento?: Date,
    public tipoFisicoJuridico?: string,
  ) {
    super();
  }

  static fromJson(jsonData: any): Cliente {
    return Object.assign(new Cliente(), jsonData);
  }
}
