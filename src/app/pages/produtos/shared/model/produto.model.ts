import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';
export class Categoria extends BaseResourceModel {
  constructor(
    public id?: number,
    public nome?: string,
    public descricao?: string,
  ) {
    super();
  }

  static fromJson(jsonData: any): Categoria {
    return Object.assign(new Categoria(), jsonData);
  }
}
