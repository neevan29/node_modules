import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
declare var $: any;


@Component({
  selector: 'app-sheader',
  templateUrl: './sheader.component.html',
  styleUrls: ['./sheader.component.css']
})
export class SheaderComponent implements OnInit {

  route: string;

  constructor(location: Location, router: Router) {
   
  }

  ngOnInit() {
    $(".dropdown-toggle").dropdown();

  }

}
