import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ChamadosPage } from '../pages/chamados/chamados';
import { WikiPage } from '../pages/wiki/wiki';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NovoChamadoPage } from '../pages/novo-chamado/novo-chamado';
import { Camera } from '@ionic-native/camera'

@NgModule({
  declarations: [
    MyApp,
    ChamadosPage,
    WikiPage,
    TabsPage,
    NovoChamadoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChamadosPage,
    WikiPage,
    TabsPage,
    NovoChamadoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
