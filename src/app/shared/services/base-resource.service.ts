import { HttpClient, HttpHeaders, HttpRequest, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { BaseResourceModel } from '../models/base-resource.model';
import { StorageService } from 'src/app/core/config/storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/pages/login/shared/user.model';
import { LocalUser } from 'src/app/core/config/local_user';
import { ImageUtilService } from '../components/material-file-upload/image-util.service';
import { API_CONFIG } from 'src/app/core/config/api.config';
import { AuthService } from 'src/app/core/config/services/auth.service';

export class BaseResourceService<T extends BaseResourceModel> {

  protected http: HttpClient;
  totalElements: 0;
  loading: boolean;
  public jwtHelper: JwtHelperService = new JwtHelperService();
  protected storage = new StorageService();
  protected imageUtilService: ImageUtilService;


  constructor(protected apiPath: string,
    protected injector: Injector,
    protected jsonDataToResourceFn: (jsonData: any) => T) {

    this.http = injector.get(HttpClient);
  }



  getAllPaginator() {
    return this.http.get(`${this.apiPath}/page`).pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }


  getAll(): Observable<T[]> {
    return this.http.get(`${this.apiPath}`).pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handleError)
    );
  }

  getById(id: number): Observable<T> {
    const url = `${this.apiPath}/${id}`;
    return this.http.get(url).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)
    );

  }

  insert(obj: T) {
    return this.http.post(
      this.apiPath,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

  toFormData<T>(formValue: T) {
    const formData = new FormData();

    for (const key of Object.keys(formValue)) {
      const value = formValue[key];
      formData.append(key, value);
    }

    return formData;
  }

  create(resource: T): Observable<T> {
    return this.http.post(this.apiPath, resource).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)
    );
  }

  update(resource: T): Observable<T> {
    const url = `${this.apiPath}/${resource.id}`;
    return this.http.put(url, resource).pipe(
      map(() => resource),
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}/${id}`;

    return this.http.delete(url).pipe(
      map(() => null),
      catchError(this.handleError)
    );
  }


  protected jsonDataToResource(jsonData: any): T {
    return this.jsonDataToResourceFn(jsonData);
  }

  protected jsonDataToResources(jsonData: any[]): T[] {

    const resources: T[] = [];
    jsonData.forEach(element => resources.push(this.jsonDataToResourceFn(element)));
    return resources;
  }

  protected handleError(error: any): Observable<any> {
    return throwError(error);
  }


  listTodos() {
    const endpoint = `${this.apiPath}/page`;
    return this.http.get(endpoint);
  }


  uploadPicture(file: File) {

    const formData = new FormData();
    formData.append('file', file);
    this.http.post(`${this.apiPath}/picture`, formData)
      .subscribe(res => console.log(res));
  }



  findByEmail(email: string) {
    return this.http.get(`${this.apiPath}/email?value=${email}`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getImageFromBucket(id: number): Observable<any> {
    const url = `${API_CONFIG.bucketBaseUrl}/vend${id}.jpg`;
    return this.http.get(url, { responseType: 'blob' });
  }
}

