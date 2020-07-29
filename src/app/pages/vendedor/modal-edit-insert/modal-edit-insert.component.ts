import { Component, OnInit, Input, Injector } from '@angular/core';
import { Vendedor } from '../shared/vendedor.model';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { VendedorService } from '../shared/service/vendedor.service';
import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-modal-edit-insert',
  templateUrl: './modal-edit-insert.component.html',
  styleUrls: ['./modal-edit-insert.component.css']
})
export class ModalEditInsertComponent {




  @Input()
  public vendedor = new Vendedor();


}
