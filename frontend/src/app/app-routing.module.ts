import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBuscaComponent } from './components/list-busca/list-busca.component';
import { AddBuscaComponent } from './components/add-busca/add-busca.component';
import { DetailsBuscaComponent } from './components/details-busca/details-busca.component'; 
import { ListEstabelecimentoComponent } from './components/list-estabelecimento/list-estabelecimento.component';
import { AddEstabelecimentoComponent } from './components/add-estabelecimento/add-estabelecimento.component';
import { DetailsEstabelecimentoComponent } from './components/details-estabelecimento/details-estabelecimento.component'; 
import { ListCategoriaComponent } from './components/list-categoria/list-categoria.component';
import { AddCategoriaComponent } from './components/add-categoria/add-categoria.component';
import { DetailsCategoriaComponent } from './components/details-categoria/details-categoria.component'; 


const routes: Routes = [
  { path: '', redirectTo: 'eventos', pathMatch: 'full' }, 

  { path: 'buscas', component: ListBuscaComponent },
  { path: 'buscas/:id', component: DetailsBuscaComponent }, 
  { path: 'add/busca', component: AddBuscaComponent }, 
  { path: 'estabelecimentos', component: ListEstabelecimentoComponent },
  { path: 'estabelecimentos/:id', component: DetailsEstabelecimentoComponent }, 
  { path: 'add/estabelecimento', component: AddEstabelecimentoComponent }, 
  { path: 'categorias', component: ListCategoriaComponent },
  { path: 'categorias/:id', component: DetailsCategoriaComponent }, 
  { path: 'add/categoria', component: AddCategoriaComponent }, 


];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
