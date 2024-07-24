import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    // Ajoutez ici d'autres composants, directives, et pipes
  ],
  imports: [
    BrowserModule
    // Ajoutez ici d'autres modules importés
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
