import { Component,OnInit } from '@angular/core';
import {AppService,IUser} from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//implements OnInit {
  // private users:IUser[] = [];
  // constructor (private appService:AppService) {}
  // users: IUser[] = [
  //   {
  //     id:1,
  //     name: 'Tony',
  //     email: 'a@mail.com'
  //   },
  //   {
  //     id:2,
  //     name: 'champ',
  //     email: 'ac@mail.com'
  //   },
  // ]
  title = 'Tour of Heroes';

  // async ngOnInit() {
  //   // this.users = await this.appService.getUser();
  // }
}
