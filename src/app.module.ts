import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '@sublimd/app/smd-app.component';

import { AppRouterModule } from './app-router.module';

@NgModule({
  imports: [BrowserModule, AppRouterModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule {}
