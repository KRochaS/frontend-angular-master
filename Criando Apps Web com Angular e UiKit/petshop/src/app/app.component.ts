import { Component, OnInit } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  public configToaster: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right',
    animation: 'fade',
    timeout: 3000,
    showCloseButton: true
  });
  constructor() {

  }

  title = 'petshop';

  ngOnInit() {



  }
}
