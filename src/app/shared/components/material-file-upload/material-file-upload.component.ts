import { Component, Input, } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-material-file-upload',
  templateUrl: './material-file-upload.component.html',
  styleUrls: ['./material-file-upload.component.css'],

})



export class MaterialFileUploadComponent {
  @Input() imageSrc: string;
  @Input()  file: any;

 constructor() { }




 onFileChange(event) {
   const reader = new FileReader();

   if (event.target.files && event.target.files.length) {
     const [file] = event.target.files;
     reader.readAsDataURL(file);

     reader.onload = () => {

       this.imageSrc = reader.result as string;

     };

   }
 }
}


