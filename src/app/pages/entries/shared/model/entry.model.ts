import { Categoria } from '../../../categorias/shared/model/categoria.model';

export class Entry {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public type?: string,
    public amount?: string,
    public date?: string,
    public paid?: boolean,
    public categoriaId?: number,
    public categoria?: Categoria
  ) { }

  static types = {
    expense: 'Despesa',
    revenue: 'Receita'
  };

  static fromJson(jsonData: any): Entry {
    return Object.assign(new Entry(), jsonData);
  }

 // get paidText(): string {
 //   return this.paid ? 'Pago' : 'Pendente';
 // }

}
