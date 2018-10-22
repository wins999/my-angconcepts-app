import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomersModule} from './customers/customers.module';
import { SharedModule } from  './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,CustomersModule,SharedModule,CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent] //which component should load up first
})
export class AppModule { }
