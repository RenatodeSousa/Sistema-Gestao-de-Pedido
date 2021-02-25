import {Component, Inject, Injector, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Endereco} from './shared/model/endereco.model';
import {EnderecoService} from './shared/service/endereco.service';
import {BaseResourceFormComponent} from "../base-resource-form/base-resource-form.component";
import {AlertModalService} from "../../services/alert-modal.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {isNull} from "util";
import Messages from "../../enums/messages.enum";

@Component({
  selector: 'app-base-endereco-form',
  templateUrl: './base-endereco-form.component.html',
  styleUrls: ['./base-endereco-form.component.css']
})
export class BaseEnderecoFormComponent extends BaseResourceFormComponent<Endereco> implements OnInit {


  private title: string;
  public endereco: Endereco;

  enderecoFormGroup: FormGroup;

  constructor(
    protected injector: Injector,
    public enderecoService: EnderecoService,
    public formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<BaseEnderecoFormComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data,
    protected alertService: AlertModalService) {
    super(injector, new Endereco(), enderecoService, Endereco.fromJson, alertService)
    this.endereco = data.endereco;
  }

  ngOnInit(): void {
       this.buildResourceForm();

  }


  public buildResourceForm(): void {
    this.enderecoFormGroup = this.formBuilder.group({
      id: [null],
      cep: [isNull(this.endereco) ? '' : this.endereco.cep, Validators.required],
      logradouro: [isNull(this.endereco) ? '' : this.endereco.logradouro, Validators.required],
      complemento: [isNull(this.endereco) ? '' : this.endereco.complemento],
      numero: [isNull(this.endereco) ? '' : this.endereco.numero, Validators.required],
      bairro: [isNull(this.endereco) ? '' : this.endereco.bairro, Validators.required],
      localidade: [isNull(this.endereco) ? '' : this.endereco.localidade, Validators.required],
      uf: [isNull(this.endereco) ? '' : this.endereco.uf, Validators.required],
      unidade: [isNull(this.endereco) ? '' : this.endereco.unidade],
      ibge: [isNull(this.endereco) ? '' : this.endereco.ibge],
      gia: [isNull(this.endereco) ? '' : this.endereco.gia],

    });
  }


  save() {
    if (this.enderecoFormGroup.valid) {
      this.dialogRef.close(this.enderecoFormGroup.value);
    }

  }

  close() {
    this.dialogRef.close();
  }


  protected pesquisarCep() {
    let cep: string = this.enderecoFormGroup.get('cep').value;

    if (cep != null) {
      this.enderecoService.findByCep(cep)
        .subscribe(response => {
            this.endereco = response;
            this.buildResourceForm();
          },
          error => {
            this.alertService.showAlertWarning(Messages.FALHA_SERVIDOR)
          });
    }
  }


}
