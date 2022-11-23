import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  Router } from '@angular/router';
import { DataService } from '../serves/data.service';
import { ShareDataService } from '../serves/share-data.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  howManyProduct:number=0
  allItemInCart:any
  itemAddToCart:[]
  @Input() item:any
  @Output() newDatas =new EventEmitter<any>(); 
  onyouNeedToSendingData(data:any){
    this.newDatas.emit(data)
  }
  constructor(private router:Router,private data:DataService ,private ahareData:ShareDataService) {
    this.itemAddToCart=[],
    this.allItemInCart=[]
   }

   addToCart ({howMany,product}:any) {
    this.ahareData.setData({howMany:Number(howMany),product})
    alert("Añadir al carrito")
  }
  handelChdange():void{

  }
  onSelected(e:any):void{
    this.howManyProduct=e
  }
  ngOnInit(): void {

    this.allItemInCart=this.ahareData.getData()
  }

}
