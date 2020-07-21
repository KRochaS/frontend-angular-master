import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ToasterService } from 'angular2-toaster';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.css']
})
export class ResetPasswordPageComponent implements OnInit {
    form: FormGroup;
    busy = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private service: DataService,
    private toaster: ToasterService
    ) {

    this.form = this.formBuilder.group({
        document: ['', Validators.compose([
            Validators.minLength(14),
            Validators.maxLength(14),
            Validators.required,
            CustomValidator.isCpf
        ])],
       
    })
   }

  ngOnInit(): void {
  }

  submit() {
      this.busy = true;
      this.service.resetPassword(this.form.value)
      .subscribe((data: resetPassword) => {
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

export interface resetPassword {
    message: string;
}