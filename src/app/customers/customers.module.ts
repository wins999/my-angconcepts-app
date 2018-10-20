import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';

@NgModule({
  declarations: [
    CustomersComponent, CustomersListComponent ,FilterTextboxComponent
  ],
  imports: [
    CommonModule,SharedModule
  ],
  providers: [],

  exports:[CustomersComponent]
})
export class CustomersModule { }
