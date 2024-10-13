import { Component, OnInit } from '@angular/core';
import { Imobile } from '../../model/mobile';
import { mobileArray } from '../../const/mobile';


@Component({
  selector: 'app-mobilecard',
  templateUrl: './mobilecard.component.html',
  styleUrls: ['./mobilecard.component.scss']
})
export class MobilecardComponent implements OnInit {
mobileData : Array<Imobile> = [];
  constructor() { }

  ngOnInit(): void {

    this.mobileData = mobileArray;
  }

}
