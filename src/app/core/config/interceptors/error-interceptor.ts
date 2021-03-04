import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StorageService } from '../storage.service';
import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { FieldMessage } from '../fieldmessage';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';




@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService, public alertService: AlertModalService) {
    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
        .pipe(
            catchError((error, caught) => {
                let errorObj = error;
                if (errorObj.error) {
                    errorObj = errorObj.error;
                }
                if (!errorObj.status) {
                    errorObj = JSON.parse(errorObj);
                }

                console.log('Erro detectado pelo interceptor:');
                console.log(errorObj);

                switch (errorObj.status) {
                    case 401:
                        this.handle401();
                        break;

                    case 403:
                        this.handle403();
                        break;

                    case 422:
                        this.handle422(errorObj);
                        break;

                    default:
                        this.handleDefaultEror(errorObj);
                }

                return Observable.throw(errorObj);
        })) as any;
    }

    async handle403() {
        this.storage.setLocalUser(null);
        const mensagemError = 'Acesso Negado';
        const alert = await this.alertService.showAlertWarning(mensagemError);

    }

    async handle401() {
        const  message = 'Email ou senha incorretos';
        await this.alertService.showAlertWarning(message);
    }

    async handle422(errorObj) {
       // header: 'Erro 422: Validação',
      const  message  = this.listErrors(errorObj.errors);
        await this.alertService.showAlertWarning(message);
        }

    async handleDefaultEror(errorObj) {
        const mensagem =  'Erro ' + errorObj.status + ': ' + errorObj.error +  errorObj.message;
        await this.alertService.showAlertWarning(mensagem);

    }

    private listErrors(messages: FieldMessage[]): string {
        let s = '';
        for (let i = 0; i < messages.length; i ++) {
            s = s + '<p><strong>' + messages[i].fieldName + '</strong>:' + messages[i].message + '</p>';
        }
        return s;
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};
