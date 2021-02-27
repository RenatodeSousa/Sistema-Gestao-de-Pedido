import {Component, Inject, Injector, OnInit,} from '@angular/core';
import {Cliente} from '../shared/model/cliente.model';
import {ClienteService} from '../shared/service/cliente.service';
import {FormArray, Validators,} from '@angular/forms';
import {BaseResourceFormComponent} from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import {AlertModalService} from 'src/app/shared/services/alert-modal.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Vendedor} from "../../vendedor/shared/vendedor.model";


@Component({
  selector: 'app-clientes-modal-edit-create',
  templateUrl: './clientes-modal-edit-create.component.html',
  styleUrls: ['./clientes-modal-edit-create.component.css']
})
export class ClientesModalEditCreateComponent extends BaseResourceFormComponent<Cliente> implements OnInit {

  private title: string;



  constructor(protected clienteService: ClienteService,
              protected injector: Injector,
              protected alertService: AlertModalService,
              public dialogRef: MatDialogRef<ClientesModalEditCreateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super(injector, new Cliente(), clienteService, Cliente.fromJson, alertService);
  }


  ngOnInit() {
    this.buildResourceForm();
    this.setCurrentAction();
  }


  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      tipoFisicoJuridico: [, Validators.required],
      telefones: this.formBuilder.array([]),
      cpfOuCnpj: [null, Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(14)])],
      dataNascimento: [this.resource.dataNascimento],
      status: [this.resource.status == 'ATIVO'? true : false ],
         });
    this.telephone();

  }


  protected setCurrentAction(): void {
    if (this.data === undefined) {
      this.title = 'Adicionar um novo cliente';
      this.currentAction = 'new';
    } else {
      this.title = 'Editar cliente';
      this.currentAction = 'edit';
     this.updateForm(this.data);

    }
  }


  private updateForm(cliente: Cliente) {
    this.resourceForm.patchValue(cliente);
     this.resourceForm.patchValue({
      status: cliente.status == 'ATIVO'
    });




  }

  private telephone() {
    if (this.data !== undefined) {
      const controlArray = this.resourceForm.get('telefones') as FormArray;

      if(this.data.telefone != undefined || this.data.telefone != null){

        Object.keys(this.data.telefone).forEach((i) => {
          controlArray.push(
            this.formBuilder.group({
              tel: [this.data.telefone[i]],
            })
          );
        });
      }
    }
  }


  protected addTelefones() {
    const controlArray = this.resourceForm.get('telefones') as FormArray;
    controlArray.push(
      this.formBuilder.group({
        tel: [''],
      })
    );

  }

  protected removeTelefones(i) {
    const controlArray = this.resourceForm.get('telefones') as FormArray;
    controlArray.removeAt(i);
  }

  close() {
    this.dialogRef.close();
  }
}
