import { BaseResourceModel } from '../../../shared/models/base-resource.model';


export class User extends BaseResourceModel {

  public email: string;
  public senha: string;

      static fromJson(jsonData: any): User {
        return Object.assign(new User(), jsonData);
      }
}
