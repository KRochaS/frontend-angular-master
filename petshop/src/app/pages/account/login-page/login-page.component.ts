import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { CustomValidator } from 'src/app/validators/custom.validator';
import { Security } from 'src/app/utils/security.utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    public form: FormGroup;
    public busy = false;

   

  constructor(private formBuilder: FormBuilder,
    private service: DataService,
    private router: Router) { 

    this.form = this.formBuilder.group({
        CPF: ['', Validators.compose([Validators.minLength(14), Validators.maxLength(14), Validators.required, CustomValidator.isCpf()])],
        senha: ['',Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required])],
      });
  }

  ngOnInit(): void {

 console.log('entrar');
   const token = Security.getToken();

     if(token) {
         this.busy = true;
         this.service.refreshToken().subscribe((data: any) => {
             this.busy = false;
             this.setUser(data.customer, data.token);
         },
         (err) => {
             localStorage.clear();
             this.busy = false;
         })
     }

  }

  entrar() {
      this.busy  = true;
    
      this.service.authenticate(this.form.value).subscribe((data: any) => {
        this.busy = false;
        this.setUser(data.customer, data.token);
      },
      (err) => {
          console.log(err);
          this.busy = false;
      }
      )


  }

  setUser(user, token) {
      Security.set(user, token);
      this.router.navigate(['/']);
  }

}
