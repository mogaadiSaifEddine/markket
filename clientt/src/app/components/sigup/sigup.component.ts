import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.scss']
})
export class SigupComponent implements OnInit {



  userForm = new FormGroup({})

  constructor(private formBuilder : FormBuilder , 
               private authService : AuthService ,
               private route : Router
             ) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm=()=>{
      this.userForm = this.formBuilder.group({
        email : ['' ,  [Validators.required, Validators.email]] , 
        password  : ['',[Validators.required ]]


      })
  }
  onSubmit(){

  const email = this.userForm.value['email']
   const password = this.userForm.value['password']
    this.authService.signup(email , password).then(
      ()=>{
        this.route.navigate(['signin'])
      
    }
    ).catch((err)=>{
      console.log(err);
      alert(err.value)
    })

  }
  }