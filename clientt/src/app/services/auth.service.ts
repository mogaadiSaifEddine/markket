import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth$ = new BehaviorSubject<boolean>(false);
  token: string='';
  userId: string='';
  
  constructor(private http : HttpClient ,
              private routr : Router) { }

 
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post(
        'http://localhost:5000/api/auth/login',
        { email: email, password: password })
        .subscribe(
          (authData :any) => {
            this.token = authData.token;
            this.userId = authData.userId;
            this.isAuth$.next(true);
            resolve(true);

          },
          (error) => {
            reject(error);
          }
        );
    });
  }
  signup=(email : string ,password : string)=>{
    
      return new Promise((resolve, reject) => {
        this.http.post(
          'http://localhost:5000/api/auth/signup',
          { email: email, password: password })
          .subscribe(
            () => {
              resolve(true);
            },
            (error) => {
              reject(error);
            }
          );
      });
    }
  }

