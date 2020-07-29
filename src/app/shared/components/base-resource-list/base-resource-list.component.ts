import { OnInit, ViewChild, AfterViewInit } from '@angular/core';
import Messages from '../../enums/messages.enum';
import { BaseResourceModel } from '../../models/base-resource.model';
import { AlertModalService } from './../../services/alert-modal.service';
import { BaseResourceService } from './../../services/base-resource.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FieldMessage } from 'src/app/core/config/fieldmessage';
import { API_CONFIG } from 'src/app/core/config/api.config';

export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements AfterViewInit, OnInit {

  public resources: T[] = [];
  public componentName = '';
  public dataSource = new MatTableDataSource<T>(this.resources);
  public serverErrorMessages: string[] = [];
  public displayedColumns: string[];
  public bucketUrl: string = API_CONFIG.bucketBaseUrl;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(protected baseResourceService: BaseResourceService<T>, protected alertService: AlertModalService) { }

  public ngOnInit() {
    this.getAllResources();
  }

  public getAllResources() {
    this.baseResourceService.getAll().subscribe(
      resources => this.resources = resources.sort((a, b) => b.id - a.id),
      () => this.alertService.showAlertDanger(Messages.ERRO_GENERICO_CARREGAMENTO(this.componentName))
    );
  }
  public deleteResource(resource: T) {
    this.baseResourceService.delete(resource.id).subscribe(
      () =>  this.load(),
      (error) => this.actionsForError(error)
    );
  }


  load() {
    this.baseResourceService.listTodos().pipe(
    ).subscribe((result: any) => {
      this.dataSource.data = result.content;
      this.paginator.length = result.totalElements;
      () => this.alertService.showAlertDanger(Messages.ERRO_GENERICO_CARREGAMENTO(this.componentName));

    }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  clearFilters() {
    this.dataSource.filter = '';
 }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  protected actionsForError(error) {
    this.alertService.showAlertDanger(Messages.OPERACAO_ERRO);

    let objetoError = error;
    if (objetoError.error) {
      objetoError = objetoError.error;
    }
    if (!objetoError.status) {
      objetoError = JSON.parse(objetoError);
    }

    if (objetoError.status === 403) {
      this.serverErrorMessages = [Messages.ACESSO_NEGADO_EXCLUIR];

      this.serverErrorMessages = [objetoError.status + ': ' + Messages.ACESSO_NEGADO_EXCLUIR];
    } else {
      if (objetoError.status === 404) {
        this.serverErrorMessages = [Messages.FALHA_SERVIDOR];
      } else {
        this.listErrors(objetoError.errors);
        this.serverErrorMessages = [objetoError.status + ': ' + objetoError.error, this.listErrors(objetoError.errors)];
      }
    }
  }
  private listErrors(messages: FieldMessage[]): string {
    let error = '';
    for (let increment = 0; increment < messages.length; increment++) {
      error = error + messages[increment].fieldName + messages[increment].message;
    }
    return error;
  }

}
