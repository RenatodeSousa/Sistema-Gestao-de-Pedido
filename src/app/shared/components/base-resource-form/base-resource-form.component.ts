import {Injector, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import Messages from '../../enums/messages.enum';
import {BaseResourceModel} from '../../models/base-resource.model';
import {AlertModalService} from '../../services/alert-modal.service';
import {BaseResourceService} from '../../services/base-resource.service';
import {FieldMessage} from 'src/app/core/config/fieldmessage';
import {Credencial} from 'src/app/pages/login/shared/credencial';
import {API_CONFIG} from 'src/app/core/config/api.config';
import {AuthService} from 'src/app/core/config/services/auth.service';


export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit {

  public imageSrc: string;
  public file: File;
  public currentAction: string;
  public resourceForm: FormGroup;
  public pageTitle: string;
  public serverErrorMessages: string[] = [];
  public submittingForm = false;
  public errorMessage: string;
  public bucketUrl: string = API_CONFIG.bucketBaseUrl;
  public picture: File;
  private fileName: string;
  @Output() mostrarMenuEmitter = true;

  protected route: ActivatedRoute;
  protected router: Router;
  public formBuilder: FormBuilder;
  public auth: AuthService;


  constructor(
    protected injector: Injector,
    public resource: T,
    protected baseResourceService: BaseResourceService<T>,
    protected jsonDataToResourceFn: (jsonData) => T,
    protected alertService: AlertModalService,
  ) {
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.formBuilder = this.injector.get(FormBuilder);
    this.auth = this.injector.get(AuthService);
  }

  public ngOnInit(): void {
    this.setCurrentAction();
    this.buildResourceForm();
    // this.setImageSrc();
    this.loadResource();

  }


  setImageSrc() {
    const id = this.resourceForm.get('id').value;
    if (id !== null) {
      this.imageSrc == API_CONFIG.bucketBaseUrl
      + '/cat' + id + '.jpg';
    }

  }


  public ngAfterContentChecked(): void {
    this.setPageTitle();
  }

  public submitForm() {
    this.submittingForm = true;
    if (this.currentAction === 'Authenticate') {
      const creds: Credencial = this.resourceForm.value;
      this.authentcation(creds);
    } else {
      if (this.currentAction === 'new') {
        this.createResource();
      } else {
        this.updateResource();
      }
    }

  }

  protected authentcation(creds) {

    this.auth.authenticate(creds).subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.mostrarMenuEmitter = true;
        this.router.navigateByUrl('categorias');
      },
      error => {
        console.log('erro do login' + error.Authorization);
      });
  }


  protected createResource() {

    if (this.file != null) {
      this.sendPicture();
    }
    const resource: T = this.jsonDataToResourceFn(this.resourceForm.value);
    this.baseResourceService.create(resource).subscribe(
      (resultResource) => this.actionsForSuccess(resultResource),
      (error) => this.actionsForError(error)
    );
  }

  public sendPicture() {
    this.baseResourceService.uploadPicture(this.file);
  }

  protected updateResource() {
    const resource: T = this.jsonDataToResourceFn(this.resourceForm.value);
    this.baseResourceService.update(resource).subscribe(
      (resultResource) => this.actionsForSuccess(resultResource),
      (error) => this.actionsForError(error)
    );
  }

  protected setCurrentAction(): void {
    if (this.route.snapshot.url[0].path === 'new') {
      this.currentAction = 'new';
    } else {
      this.currentAction = 'edit';
    }
  }

  protected loadResource() {
    if (this.currentAction === 'edit') {
      const routeResource = this.route.snapshot.data['resource'];
      if (routeResource) {
        this.resource = routeResource;
        this.resourceForm.patchValue(this.resource);
      } else {
        setTimeout(() => {
          this.alertService.showAlertDanger(Messages.FALHA_SERVIDOR);
          this.resourceForm.disable();
        }, 100);
      }
    }
  }


  protected setPageTitle(): void {
    if (this.currentAction === 'new') {
      this.pageTitle = this.creationPageTitle();
    } else {
      this.pageTitle = this.editionPageTitle();
    }
  }

  protected creationPageTitle(): string {
    return 'Novo';
  }

  protected editionPageTitle(): string {
    return 'Edição';
  }

  protected actionsForSuccess(resource: T) {
    let baseComponentPath: string;
    if (this.route.snapshot.parent !== null) {
      baseComponentPath = this.route.snapshot.parent.url[0].path;
      this.router.navigateByUrl(baseComponentPath);
      this.alertService.showAlertSuccess(Messages.OPERACAO_SUCESSO);
    }
  }

  protected actionsForError(error) {
    this.alertService.showAlertDanger(Messages.OPERACAO_ERRO);
    this.submittingForm = false;


    let objetoError = error;
    if (objetoError.error) {
      objetoError = objetoError.error;
    }
    if (!objetoError.status) {
      objetoError = JSON.parse(objetoError);
    }

    if (objetoError.status === 500) {
      this.serverErrorMessages = [Messages.ERRO_AO_INSERIR];
      this.serverErrorMessages = [objetoError.status + ': ' + Messages.CPF_INVALIDO];
    } else {
      if (objetoError.status === 400) {
        this.serverErrorMessages = [Messages.ACESSO_NEGADO_EDITAR];
        this.serverErrorMessages = [objetoError.status + ': ' + Messages.ACESSO_NEGADO_EDITAR];
      }
      if (objetoError.status === 403) {
        this.serverErrorMessages = [Messages.ACESSO_NEGADO_EDITAR];
        this.serverErrorMessages = [objetoError.status + ': ' + Messages.ACESSO_NEGADO_EDITAR];
      } else {
        if (objetoError.status === 404) {
          this.serverErrorMessages = [Messages.FALHA_SERVIDOR];
        } else {
          this.listErrors(objetoError.errors);
          this.serverErrorMessages = [objetoError.status + ': ' + objetoError.error, this.listErrors(objetoError.errors)];
        }
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

  onFileChange(event) {
    console.log('chegouu');
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      console.log('evento' + event.target.files[0].name);

      const [file] = event.target.files;
      reader.readAsDataURL(file);
      this.fileName = event.target.files[0].name;
      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.resourceForm.patchValue({
          fileSource: reader.result,

        });

      };

    }
  }

  protected abstract buildResourceForm(): void;

}
