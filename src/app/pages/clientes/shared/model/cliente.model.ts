import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';
export class Cliente extends BaseResourceModel {
  constructor(
    public id?: number,
    public nome?: string,
    public telefones?: string[],
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
