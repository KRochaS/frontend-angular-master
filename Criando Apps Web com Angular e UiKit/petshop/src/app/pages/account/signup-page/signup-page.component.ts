import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ToasterService } from 'angular2-toaster';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
    public form: FormGroup;
    public busy = false;


    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private service: DataService,
        private toasterService: ToasterService,) { 

        this.form = this.formBuilder.group({
            nome: ['', Validators.compose([
                Validators.minLength(3),
                Validators.maxLength(80),
                Validators.required
            ])],
            document: ['', Validators.compose([
                Validators.minLength(14),
                Validators.maxLength(14),
                Validators.required,
                CustomValidator.isCpf()
            ])],
            email: ['', Validators.compose([
                Validators.minLength(5),
                Validators.maxLength(120),
                Validators.required,
                CustomValidator.EmailValidator
            ])],
            password: ['', Validators.compose([
                Validators.minLength(6),
                Validators.maxLength(20),
                Validators.required
            ])],
          })
      }

  ngOnInit(): void {
    this.toasterService.pop('success', 'oi');
    this.toasterService.pop('success', 'oi');
    this.toasterService.pop('success', 'oi');
  }

  submit() {
      this.busy = true;
      this.service.create(this.form.value).subscribe((data: any) => {
          this.busy = false;
          this.toasterService.pop('success', data.message);
          this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
        this.busy = false;
      }
      )
  }
}
