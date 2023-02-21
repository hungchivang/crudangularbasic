import { Component } from '@angular/core';
import {Product} from "../model/Product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor() { }

  ngOnInit(): void {
  }
  product:Product = new Product(0,"",0,"");
  products: Product[]=[
    new Product(1,"Người yêu 1",200,"https://tinhayvip.com/wp-content/uploads/2022/06/vsbg-5.jpg"),
    new Product(2,"Người yêu 2",300,"https://tinhayvip.com/wp-content/uploads/2022/06/vsbg-09.jpg")]

  createProduct(){
    let newProduct = new Product(this.product.id,this.product.name,this.product.price,this.product.image);
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].id == newProduct.id){
        this.products.splice(i,1,newProduct);
        return;
      }
    }
    this.products.push(newProduct);
  }

  delete(index: number): void{
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].id == index ){
        this.products.splice(i,1);
      }
    }
  }

  showEdit(index: number): void{
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].id == index ){
        this.product= new Product(this.products[i].id,this.products[i].name,this.products[i].price,this.products[i].image)
      }
    }

  }

}




