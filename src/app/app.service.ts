import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface IUser {
  id:number;
  name:string;
  email:string;

}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  async getUser() :Promise<IUser[]>{
    const response = this.http.get('https://jsonplaceholder.typicode.com/users');

    return await response.toPromise() as IUser[];
  }
}
