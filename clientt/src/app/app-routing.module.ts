import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddgoodComponent } from './components/addgood/addgood.component';
import { GoodsListComponent } from './components/goods-list/goods-list.component';
import { OnegoodComponent } from './components/onegood/onegood.component';
import { SiginComponent } from './components/sigin/sigin.component';
import { SigupComponent } from './components/sigup/sigup.component';
import { UpdategoodComponent } from './components/updategood/updategood.component';

const routes: Routes = [
  {path : 'signin' , component : SiginComponent},
  {path : 'signup' , component : SigupComponent}, 
  {path : 'goods/add-one-good' , component : AddgoodComponent}, 
  {path : 'goods/:id' , component : OnegoodComponent} , 
  {path : 'updategood/:id' , component : UpdategoodComponent}, 
  {path : 'goods' , component : GoodsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
