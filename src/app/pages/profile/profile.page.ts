import { Component, OnInit, Injector } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseResourceFormComponent } from '../../shared/components/base-resource-form/base-resource-form.component';
import { ActivatedRoute } from '@angular/router';
import { Vendedor } from '../vendedor/shared/vendedor.model';
import { StorageService } from 'src/app/core/config/storage.service';
import { VendedorService } from '../vendedor/shared/service/vendedor.service';
import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { API_CONFIG } from 'src/app/core/config/api.config';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage extends BaseResourceFormComponent<Vendedor> {

  public profileImage;

  constructor(public storage: StorageService,
              public sanitizer: DomSanitizer,
              public route: ActivatedRoute,
              public vendedorService: VendedorService,
              protected alertService: AlertModalService,
              public injector: Injector,
             // public auth: AuthService,

  ) {
    super(injector, new Vendedor(), vendedorService, Vendedor.fromJson, alertService);
    this.profileImage = 'assets/img/avatar.png';
  }

  ngOnInit() {
    this.loadData();
  }


  loadData() {
    const localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.vendedorService.findByEmail(localUser.email)
        .subscribe(response => {
          this.resource = response as Vendedor;
          this.getImageIfExists();
        },
          error => {
            if (error.status === 403) {
              this.router.navigateByUrl('home');
            }
          });
    }
    else {
      this.router.navigateByUrl('profile');
    }
  }


  getImageIfExists() {
    this.vendedorService.getImageFromBucket(this.resource.id)
      .subscribe(response => {
        this.resource.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.resource.id}.jpg`;
        this.blobToDataURL(response).then(dataUrl => {
          const str: string = dataUrl as string;
          this.profileImage = this.sanitizer.bypassSecurityTrustUrl(str);
        });
      },
        error => {
          this.profileImage = 'assets/img/avatar.png';
        });
  }

  blobToDataURL(blob) {
    return new Promise((fulfill, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = (e) => fulfill(reader.result);
      reader.readAsDataURL(blob);
    });
  }



  public buildResourceForm() {

  }
}

