import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { PaginatorModule } from 'primeng/paginator';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    ProductsAdminComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    DataViewModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    RatingModule,
    PaginatorModule
  ],
  providers:[ProductService]
})
export class ProductModule { }
