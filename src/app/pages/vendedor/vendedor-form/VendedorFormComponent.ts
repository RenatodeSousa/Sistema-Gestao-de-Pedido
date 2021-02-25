import {Component, Injector} from '@angular/core';
import {BaseResourceFormComponent} from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Vendedor} from '../shared/vendedor.model';
import {VendedorService} from '../shared/service/vendedor.service';
import {AlertModalService} from 'src/app/shared/services/alert-modal.service';

import Messages from 'src/app/shared/enums/messages.enum';
import {BaseEnderecoFormComponent} from 'src/app/shared/components/base-endereco-Form/base-endereco-form.component';
import {EnderecoService} from 'src/app/shared/components/base-endereco-Form/shared/service/endereco.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {Endereco} from "../../../shared/components/base-endereco-Form/shared/model/endereco.model";
import {isNull} from "util";


@Component({
  selector: 'app-vendedor-form',
  templateUrl: './vendedor-form.component.html',
  styleUrls: ['./vendedor-form.component.css']
})
export class VendedorFormComponent extends BaseResourceFormComponent<Vendedor> {


  public vendedor: Vendedor = new Vendedor();
  private numeroCep: string;
  private profileImage;
  isEndereco: boolean = false;


  constructor(protected vendedorService: VendedorService,
              protected injector: Injector,
              public dialog: MatDialog,
              private enderecoService: EnderecoService,
              protected alertService: AlertModalService) {
    super(injector, new Vendedor(), vendedorService, Vendedor.fromJson, alertService);
    this.profileImage = 'assets/img/avatar.png';
  }


  public buildEnderecoResourceForm(endereco: Endereco) {
       return this.formBuilder.group({
      id: [endereco.id],
      cep: [endereco.cep],
      logradouro: [endereco.logradouro],
      complemento: [endereco.complemento],
      numero: [endereco.numero],
      bairro: [endereco.bairro],
      localidade: [endereco.localidade],
      uf: [endereco.uf],
      unidade: [endereco.unidade],
      ibge: [endereco.ibge],
      gia: [endereco.gia],
    });
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      tipoFisicoJuridico: [, Validators.required],
      telefones: this.formBuilder.array([]),
      cpfOuCnpj: [null, Validators.compose([Validators.required,Validators.minLength(11)|| Validators.maxLength(14)])],
      dataNascimento: [this.resource.dataNascimento],


    });

  }


  protected creationPageTitle(): string {
    return 'Cadastro de Novo Vendedor';
  }


  protected editionPageTitle(): string {
    const vendedorNome = this.resource.nome || '';
    return `Editando Vendedor: ${vendedorNome}`;
  }


  protected pesquisarCep(cep: string) {

    if (cep.length === 0) {
      this.openDialogEditCreate(null);
    } else {
      this.enderecoService.findByCep(cep)
        .subscribe(response => {
            this.openDialogEditCreate(response);

          },
          error => {
            this.alertService.showAlertWarning(Messages.FALHA_SERVIDOR)
          });
    }

  }


  get telefones(): FormArray {

    return this.resourceForm.get('telefones') as FormArray;
  }

  protected newTelefone(): FormGroup {
    return this.formBuilder.group({
      tel: [],
    });
  }


  protected addTelefones() {
    this.telefones.push(this.newTelefone());
  }


  protected removeTelefones(i: number) {
    this.telefones.removeAt(i);
  }


  protected loadResource() {
    if (this.currentAction === 'edit') {
      const routeResource = this.route.snapshot.data['resource'];
      if (routeResource) {
        this.resource = routeResource;
        this.resourceForm.patchValue(this.resource);
        this.registrarGroupEndereco(this.resource.endereco);
        this.includeTelefoneForm();

      } else {
        setTimeout(() => {
          this.alertService.showAlertDanger(Messages.FALHA_SERVIDOR);
          this.resourceForm.disable();
        }, 100);
      }
    }
  }

  private registrarGroupEndereco(endereco: Endereco) {

    let campoExiste = this.resourceForm.get('endereco');

    if (!isNull(campoExiste)) {
      this.removerEndereco();
    }
    if (endereco != null) {
      this.isEndereco = true;
      this.resourceForm.registerControl('endereco', this.buildEnderecoResourceForm(endereco));

    }
  }

  private removerEndereco() {
    this.resourceForm.removeControl('endereco');
    this.resourceForm.updateValueAndValidity();

  }

  private includeTelefoneForm() {
    if (this.resource !== undefined) {
      Object.keys(this.resource.telefones).forEach((i) => {
        this.telefones.push(
          this.formBuilder.group({
            tel: [this.resource.telefones[i]],
          })
        );
      });
    }

  }

  openDialogEditCreate(response) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      endereco: response

    }

    const dialogRef = this.dialog.open(BaseEnderecoFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.registrarGroupEndereco(result);
        this.alertService.showAlertSuccess('Endereço adicionado com Sucesso');
        this.isEndereco = true;
      }

    });
  }


}
