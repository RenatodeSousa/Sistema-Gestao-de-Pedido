import { Component, OnInit, Injector } from '@angular/core';
import { LoginService } from './shared/service/login.service';
import { User } from './shared/user.model';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { AlertModalService } from 'src/app/shared/services/alert-modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseResourceFormComponent < User > {

  public user: User = new User();

  constructor(protected loginService: LoginService,
    protected injector: Injector,
    protected alertService: AlertModalService) {
    super(injector, new User(), loginService, User.fromJson, alertService);
  }



  public buildResourceForm(): void {

    this.resourceForm = this.formBuilder.group({
      email: [null ],
      senha: [null],
    });
  }
  public setCurrentAction(): void {
    this.currentAction = 'Authenticate';
  }



}
