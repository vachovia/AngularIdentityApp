import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoginInterface, RegisterInterface } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  login(model: LoginInterface) {
    return this.http.post(`${environment.appUrl}/api/account/login`, model);
  }

  register(model: RegisterInterface) {
    return this.http.post(`${environment.appUrl}/api/account/register`, model);
  }
}
