import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  // ✅ ya no uses "declarations"
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,     // 👈 standalone component → se importa aquí
    MenuComponent     // 👈 también standalone → se importa aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
