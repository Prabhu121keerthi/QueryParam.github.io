import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:any;
  id:any;

  constructor(private _ActivatedRoute:ActivatedRoute,
    private _router:Router,
    private _productService:ProductService) { }

    sub:any;

  ngOnInit() {

    
    //Using subscribe
    this.sub = this._ActivatedRoute.paramMap.subscribe(params => {
    console.log(params);
    this.id = params.get('id');
    let products = this._productService.getProducts();
    this.product = products.find(p => p.productId == this.id);
    })
    

    /*
    //Using snapshot
    this.id=this._ActivatedRoute.snapshot.paramMap.get("id");
  
     let products=this._productService.getProducts();
     this.product=products.find(p => p.productId==this.id);

     */

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  back() {
    this._router.navigate(['product']);
  }

}
