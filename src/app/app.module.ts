import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtletaListComponent } from './features/atleta/atleta-list/atleta-list.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AtletaCreateComponent } from './features/atleta/atleta-create/atleta-create.component';
import { AtletaDetailComponent } from './features/atleta/atleta-detail/atleta-detail.component';
import { AtletaRemoveComponent } from './features/atleta/atleta-remove/atleta-remove.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AtletaListComponent,
    FooterComponent,
    NavbarComponent,
    AtletaCreateComponent,
    AtletaDetailComponent,
    AtletaRemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
