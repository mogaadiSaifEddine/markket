import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({

  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss']
})
export class SiginComponent implements OnInit {
  userForm = new FormGroup({})

  constructor(private formBuilder : FormBuilder , 
              private route : Router , 
              private authService : AuthService) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm=()=>{
    this.userForm = this.formBuilder.group({
      email : ['' ,  [Validators.required]] , 
      password  : ['',[Validators.email , Validators.required]]


    })
  }
  onSubmit(){
   const email = this.userForm.value['email']
   const password = this.userForm.value['password']
    this.authService.login(email , password).then(
      ()=>{
        this.route.navigate(['goods'])
      }).catch((err)=>{
        alert('email or password inccorect');
      })

  }
}
