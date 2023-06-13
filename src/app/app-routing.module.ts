import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtletaListComponent } from './features/atleta/atleta-list/atleta-list.component';
import { AtletaCreateComponent } from './features/atleta/atleta-create/atleta-create.component';
import { AtletaDetailComponent } from './features/atleta/atleta-detail/atleta-detail.component';

const routes: Routes = [
  { path: 'atleta/list', component: AtletaListComponent },
  { path: 'atleta/create', component: AtletaCreateComponent },
  { path: 'atleta/:id', component: AtletaDetailComponent },
  // { path: 'atleta/edit/:id', component: LibroEditComponent },
  // { path: 'atleta/remove/:id', component: LibroEditComponent },
  { path: '', redirectTo: '/atleta/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
