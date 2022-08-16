import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
 

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pageNo = 0;
  screenshotPage = 0;
  products:Product[] = [];
  constructor(private productService:ProductService,
    private router:Router,
    private Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    /*
    this.products=this.productService.getProducts();
    console.log(this.products);
    */

    this.screenshotPage =+ this.Activatedroute.snapshot.queryParams['pageNum'] || 0;

    this.Activatedroute.queryParams.subscribe(params => {
      this.pageNo =+ params['pageNum'] || 0;
    })
  }

  nextPage () {
    this.router.navigate(['product'], {queryParams: { pagenum : this.pageNo + 1}, relativeTo:this.Activatedroute});
  }

}
