import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ToasterService } from 'angular2-toaster';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
    public form: FormGroup;
    public busy = false;

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private service: DataService,
        private toaster: ToasterService
        ) {
    
        this.form = this.formBuilder.group({
            name: ['', Validators.compose([
                Validators.minLength(3),
                Validators.maxLength(80),
                Validators.required
            ])],
            document:  [{value: '', disabled: true}],
            email: ['', Validators.compose([
                Validators.minLength(5),
                Validators.maxLength(120),
                Validators.required,
                CustomValidator.EmailValidator
            ])],
           
        })
       }
    
  ngOnInit() {

    this.busy = true;
    this.service.getProfile().subscribe((data: Profile) => {
        this.busy = false;
        this.form.get('name').setValue(data.name);
        this.form.get('document').setValue(data.document),
        this.form.get('email').setValue(data.email);
    }, 
    (err) => {
        console.log(err);
        this.busy = false;
    })
  }

  submit() {
    this.busy = true;
    this.service.updateProfile(this.form.value)
    .subscribe((data: {message: string}) => {
        this.busy = false;
        this.toaster.pop('success', '', data.message);
        this.router.navigate(['/login']);
    },
    (err) => {
        console.log(err);
        this.busy = false;
    })

}

}


export interface Profile {
    name: string;
    document: string;
    email: string;
}
