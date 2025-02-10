import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl : string = 'https://jsonplaceholder.typicode.com/users';

  getAllUsers(){
    return this._http.get(this.apiUrl);
  }

  constructor(private _http:HttpClient) { }
}
