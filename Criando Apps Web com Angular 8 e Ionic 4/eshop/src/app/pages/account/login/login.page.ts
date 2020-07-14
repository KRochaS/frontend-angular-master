import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public hide = true;
    public form: FormGroup;
  constructor(
      private fb: FormBuilder,
      private loadingCtrl: LoadingController,
      private toastCtrl: ToastController,
      private navCtrl: NavController,
      private service: DataService
  ) { }

  ngOnInit() {
  }

}
