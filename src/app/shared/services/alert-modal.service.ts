import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TitlesAlert } from '../enums/titles-alert.enum';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ConfirmModalComponent } from '../components/confirm-modal/confirm-modal.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private toastrService: ToastrService, private modalService: BsModalService) { }

  public showAlertSuccess(message: string): void {
    this.toastrService.success(message, TitlesAlert.CONCLUIDO);
  }

  public showAlertDanger(message: string): void {
    this.toastrService.error(message, TitlesAlert.ERRO);
  }

  public showAlertWarning(message: string): void {
    this.toastrService.warning(message, TitlesAlert.ALERTA);
  }

  public showConfirm(title: string, message: string, confirmTxt?: string, cancelTxt?: string): Subject<boolean> {
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.message = message;

    if (confirmTxt) {
      bsModalRef.content.confirmTxt = confirmTxt;
    }

    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }

}
