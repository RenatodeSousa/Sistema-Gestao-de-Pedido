import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public message: string;

  @Input()
  public cancelTxt = 'Não';

  @Input()
  public confirmTxt = 'Sim';

  public confirmResult: Subject<boolean> = new Subject<boolean>();

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  public onConfirm() {
    this.confirmAndClose(true);
  }

  public onClose(): void {
    this.confirmAndClose(false);
  }

  private confirmAndClose(value: boolean): void {
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }

}
