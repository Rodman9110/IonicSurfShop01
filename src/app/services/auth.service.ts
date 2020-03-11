import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../model/user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }

  login(user: User){ 
   

  }
  register(user: User){
    console.log(user.email);
    return this.fireAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
  }

  getAuth(){

  }



}
