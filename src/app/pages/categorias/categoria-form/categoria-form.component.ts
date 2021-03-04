import { Component, Injector } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { Categoria } from '../shared/model/categoria.model';
import { CategoriaService } from '../shared/service/categoria.service';
import { ImageUtilService } from 'src/app/shared/components/material-file-upload/image-util.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent extends BaseResourceFormComponent<Categoria> {



  public categoria: Categoria = new Categoria();


  constructor(protected categoriaService: CategoriaService,
    protected injector: Injector,
    protected alertService: AlertModalService) {
    super(injector, new Categoria(), categoriaService, Categoria.fromJson, alertService);
  }

  public buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      descricao: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      file: new FormControl(''),
      fileSource: new FormControl(''),
    });
  }



  public creationPageTitle(): string {
    return 'Cadastro de Nova Categoria';
  }

  public editionPageTitle(): string {
    const categoriaNome = this.resource.nome || '';
    return `Editando Categoria: ${categoriaNome}`;
  }

}

