import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Product, ProductData } from "./product";

@Injectable()

export class ProductService{
    constructor(private httpClient: HttpClient){

    }
    getProducts(): Observable<Product[]> {
        return this.httpClient
        .get<ProductData>('./../../../assets/products.json')
        .pipe(map((response) => response.data))
      }
}
