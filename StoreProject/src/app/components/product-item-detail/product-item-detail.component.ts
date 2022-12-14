import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productCart } from '../interface/product-cart';
import { DataService } from '../serves/data.service';
import { ShareDataService } from '../serves/share-data.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  item:Product={description:"",id:0,name:"",price:0,url:""}
  // products: any;
  allItemInCart:any

  constructor(private route: ActivatedRoute,private http:DataService ,private shareData:ShareDataService) { }

  addToCart ({howMany,product}:any):void {
    this.shareData.setData({howMany:parseInt(howMany),product})
     alert("Añadir al carrito")
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
      this.http.getData().subscribe(products=>{
      
      this.item = products.find((product:Product)=> product?.id === productIdFromRoute) || {description:"",id:0,name:"",price:0,url:""}
    })
    this.http.currentApprovalData.subscribe((data:any)=>{
      this.allItemInCart=data
    })
  }

}
