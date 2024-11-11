import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from '../../../../mw-shared/src/lib/Components/pagination/pagination.component';


@NgModule({
  declarations: [ProductListComponent,ProductDashboardComponent,PaginationComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    FormsModule,
  ]
})
export class ProductListModule { }
