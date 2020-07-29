import { Component, Injector } from '@angular/core';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Validators, FormArray, FormGroup, FormControl } from '@angular/forms';
import { Vendedor } from '../shared/vendedor.model';
import { VendedorService } from '../shared/service/vendedor.service';
import { AlertModalService } from 'src/app/shared/services/alert-modal.service';

import Messages from 'src/app/shared/enums/messages.enum';
import { BaseEnderecoFormComponent } from 'src/app/shared/components/base-endereco-Form/base-endereco-form.component';
import { EnderecoService } from 'src/app/shared/components/base-endereco-Form/shared/service/endereco.service';
import { Endereco } from 'src/app/shared/components/base-endereco-Form/shared/model/endereco.model';

@Component({
  selector: 'app-vendedor-form',
  templateUrl: './vendedor-form.component.html',
  styleUrls: ['./vendedor-form.component.css']
})
export class VendedorFormComponent extends BaseResourceFormComponent<Vendedor> {




  public vendedor: Vendedor = new Vendedor();
  private cep: string;
  private profileImage;

  constructor(protected vendedorService: VendedorService,
    protected injector: Injector,
    private enderecoService: EnderecoService,
    private endereco: BaseEnderecoFormComponent,
    protected alertService: AlertModalService) {
    super(injector, new Vendedor(), vendedorService, Vendedor.fromJson, alertService);
    this.profileImage = 'assets/img/avatar.png';
  }




  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      file: new FormControl(''),
      fileSource: new FormControl(''),
      nome: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      tipoFisicoJuridico: [, Validators.required],
      senha: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      telefones: this.formBuilder.array([]),
      cpfOuCnpj: [null, Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(14)])],
      dataNascimento: [this.resource.dataNascimento],
      enderecos: this.formBuilder.array([]),
    });

  }


  protected creationPageTitle(): string {
    return 'Cadastro de Novo Vendedor';
  }


  protected editionPageTitle(): string {
    const vendedorNome = this.resource.nome || '';
    return `Editando Vendedor: ${vendedorNome}`;
  }


  protected pesquisarCep() {
    this.enderecoService.findByCep(this.cep)
      .subscribe(response => {
        this.includeEnderecoForm(response);
      },
        error => {
          this.alertService.showAlertWarning(Messages.FALHA_SERVIDOR)
        });

  }

  get enderecos(): FormArray {
    return this.resourceForm.get('enderecos') as FormArray;
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

  protected removeEnderecos(i: number) {
    this.enderecos.removeAt(i);
  }

  protected loadResource() {
    if (this.currentAction === 'edit') {
      const routeResource = this.route.snapshot.data['resource'];
      if (routeResource) {
        this.resource = routeResource;
        this.resourceForm.patchValue(this.resource);
        this.includeTelefoneForm();
        this.listEnderecosform();

      } else {
        setTimeout(() => {
          this.alertService.showAlertDanger(Messages.FALHA_SERVIDOR);
          this.resourceForm.disable();
        }, 100);
      }
    }
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

  private includeEnderecoForm(endereco: Endereco) {
    this.enderecos.push(this.endereco.buildResourceForm(endereco));
  }


  private listEnderecosform() {
    if (this.resource !== undefined) {
      Object.keys(this.resource.enderecos).forEach((i) => {
        this.includeEnderecoForm(this.resource.enderecos[i]);
      });
    }
  }
}
