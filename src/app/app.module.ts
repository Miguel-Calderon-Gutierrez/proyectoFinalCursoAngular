import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateLibroComponent } from './create-libro/create-libro.component';
import { ReadLibrosComponent } from './read-libros/read-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateLibroComponent,
    ReadLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
