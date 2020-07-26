import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FramePage } from './pages/shared/frame/frame.page';
import { AutorizedGuard } from './guards/autorized-guard';
import { ManagerGuard } from './guards/manager.guard';
import { ComponentsModule } from './components/components.module';

@NgModule({
	declarations: [AppComponent, FramePage],
	entryComponents: [],
    imports: [
        BrowserModule, 
        IonicModule.forRoot(), 
        AppRoutingModule, 
        HttpClientModule,  
        FormsModule, 
        ReactiveFormsModule, 
        ComponentsModule],
	providers: [
		StatusBar,
        SplashScreen,
        AutorizedGuard,
        ManagerGuard,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
	],
	exports: [FormsModule,
		ReactiveFormsModule],
	bootstrap: [AppComponent]
})
export class AppModule { }
