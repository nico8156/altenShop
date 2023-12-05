import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { PrimeNGConfig, SelectItem } from 'primeng/api';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products!: Product[]
  
  sortOptions: SelectItem[]

  sortOrder: number

  sortField: string

  constructor(
    private productService: ProductService,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void{
    this.productService.getProducts().subscribe(items => {
      this.products = items
    })
    this.primengConfig.ripple = true

    
  }

  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
  };
  onSortChange(event: Event) {
    let value = (event.target as HTMLInputElement).value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

}
