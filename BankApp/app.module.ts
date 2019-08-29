import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http' ; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SwitchComponent } from './switch/switch.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { ReversePipe } from './reverse.pipe';
import { ValidatorPipe } from './validator.pipe';
import { TransactionComponent } from './transaction/transaction.component';
import { SpeakComponent } from './speak/speak.component';
import { ListenComponent } from './listen/listen.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponenetBComponent } from './componenet-b/componenet-b.component';
import { CummunicatorComponent } from './cummunicator/cummunicator.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LoginComponent,
    RegistrationComponent,
    SwitchComponent,
    BuiltInPipesComponent,
    ReversePipe,
    ValidatorPipe,
    TransactionComponent,
    SpeakComponent,
    ListenComponent,
    ComponentAComponent,
    ComponenetBComponent,
    CummunicatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
