import { Component, OnInit } from '@angular/core';
import { ItemListServiceService } from 'src/app/service/item-list-service.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  constructor(public itemList: ItemListServiceService) { }

  public items = []

  ngOnInit() {
    this.itemList.getItemlist().subscribe(sam => this.items = sam);
  }

}
