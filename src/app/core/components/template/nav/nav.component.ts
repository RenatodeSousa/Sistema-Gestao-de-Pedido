import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { StorageService } from 'src/app/core/config/storage.service';
import { API_CONFIG } from 'src/app/core/config/api.config';
import { VendedorService } from 'src/app/pages/vendedor/shared/service/vendedor.service';
import { Vendedor } from 'src/app/pages/vendedor/shared/vendedor.model';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/config/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  @ViewChild('drawer', { static: false })
  drawer: MatSidenav;

  private url;
  private profileImage;
  private vendedor: Vendedor;
  private localUser;
  constructor(private storage: StorageService, private service: VendedorService,
    private auth: AuthService,
     private sanitizer: DomSanitizer,  private router: Router) {
      this.profileImage = 'assets/img/avatar.png';
       this.localUser = this.storage.getLocalUser();
      }

  ngOnInit(): void {
    this.verificarImage();
    }


    private verificarImage() {
      console.log('passo..................................' + this.localUser);

      if (this.localUser && this.localUser.email) {
        this.service.findByEmail(this.localUser.email)
          .subscribe(response => {
            this.vendedor = response as Vendedor;
           this.getImageIfExists();
          },
            error => {
              if (error.status === 403) {
               // this.router.navigateByUrl('home');
              }
            });
      }
     // else {
      //  this.router.navigateByUrl('profile');
    //  }
    }


    getImageIfExists() {

      this.service.getImageFromBucket(this.vendedor.id)
        .subscribe(response => {
          this.vendedor.imageUrl = `${API_CONFIG.bucketBaseUrl}/vend${this.vendedor.id}.jpg`;
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

   private logOut() {
    this.auth.logout();
    this.profileImage = 'assets/img/avatar.png';
    this.router.navigateByUrl('home');
    }

}
