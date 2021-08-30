import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiginComponent } from './components/sigin/sigin.component';
import { SigupComponent } from './components/sigup/sigup.component';
import { GoodsListComponent } from './components/goods-list/goods-list.component';
import { OnegoodComponent } from './components/onegood/onegood.component';
import { UpdategoodComponent } from './components/updategood/updategood.component';
import { AddgoodComponent } from './components/addgood/addgood.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SiginComponent,
    SigupComponent,
    GoodsListComponent,
    OnegoodComponent,
    UpdategoodComponent,
    AddgoodComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule , 
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
