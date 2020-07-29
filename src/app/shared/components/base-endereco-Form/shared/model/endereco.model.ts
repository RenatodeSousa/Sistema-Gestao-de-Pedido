import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Endereco extends BaseResourceModel {
    constructor(
      public cep?: string,
      public logradouro?: string,
      public complemento?: string,
      public bairro?: string,
      public localidade?: string,
      public uf?: string,
      public unidade?: string,
      public ibge?: string,
      public gia?: string,
    ) {
      super();
    }

    static fromJson(jsonData: any): Endereco {
      return Object.assign(new Endereco(), jsonData);
    }
  }
