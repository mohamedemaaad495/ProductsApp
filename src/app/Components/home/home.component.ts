import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  storeInfo: StoreData;
  isImageVisible: boolean = true;
  constructor() 
  {
      this.storeInfo = new StoreData('iti','https://picsum.photos/350/200',['Menofya','Smart','qena']);
  }

  ngOnInit(): void {
  }

  toggleImage(){
    this.isImageVisible = !this.isImageVisible;
  }

}
