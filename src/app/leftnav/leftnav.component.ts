import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.css']
})
export class LeftnavComponent implements OnInit {

  route: string;
  
  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      if (location.path()) {
        this.route = location.path();
      }
      
    });
  }

  ngOnInit() {
  }
  transformArrow(){
    let ele = $('#commonbody').css('margin-left');
    $('body').find('#commonbody').css('margin-left','30px');
    $('body').find('.aside.aside-fixed').addClass('minimize');
    if(ele=='240px')
    {
      $('body').find('.aside.aside-fixed').removeClass('minimize');
     
      $('body').find('#commonbody').css('margin-left','60px');
    } 
   
  }

  horizondal(horval)
  {
    $('#commonbody').css('margin-left','240px');
    $('.aside.aside-fixed').removeClass('d-none');
    $('.content-header').removeClass('d-none');
    $('.navbar-header-fixed').addClass('d-none');
    $('.content-body').css('margin-top','0px');
    $('.content-body').css('overflow','unset');
    if(horval==true)
    { 
      $('#commonbody').css('margin-left','20px');
      $('.content-body').css('overflow','hidden');

      $('.aside.aside-fixed').addClass('d-none');
      $('.content-header').addClass('d-none');
      $('.navbar-header-fixed').removeClass('d-none');
      $('.content-body').css('margin-top','45px');

    }
  }
}
