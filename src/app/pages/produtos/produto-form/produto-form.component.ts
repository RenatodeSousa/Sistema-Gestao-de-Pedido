import {Component, Injector, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {BaseResourceFormComponent} from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import {AlertModalService} from 'src/app/shared/services/alert-modal.service';
import {ProdutoService} from '../shared/service/produto.service';
import {Produto} from "../shared/model/produto.model";
import {Categoria} from "../../categorias/shared/model/categoria.model";
import {CategoriaService} from "../../categorias/shared/service/categoria.service";

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent extends BaseResourceFormComponent<Produto>  {


  public produto: Produto = new Produto();
  public categoriaSelecionado: Categoria;
  public listaCategoria: Categoria[] = [];


  constructor(protected produtoService: ProdutoService,
              protected categoriaService: CategoriaService,
              protected injector: Injector,
              protected alertService: AlertModalService) {
    super(injector, new Produto(), produtoService, Produto.fromJson, alertService);
  }


  ngOnInit() {
    this.setCurrentAction();
    this.buildResourceForm();
    this.loadResource();
    this.categoriaService.getAll().subscribe(response =>{
     this.listaCategoria = response;
    });
  }

  public buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      descricao: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      quantidade: [null, Validators.compose([Validators.required])],
      preco: [null, Validators.compose([Validators.required])],
      file: new FormControl(''),
      fileSource: new FormControl(''),
      categoria: [this.categoriaSelecionado, Validators.compose([Validators.required])],
    });
  }


  public creationPageTitle(): string {
    return 'Cadastro de Novo Produto';
  }

  public editionPageTitle(): string {
    const produtoNome = this.resource.nome || '';
    return `Editando Produto: ${produtoNome}`;
  }

}

