import { Component, OnInit } from '@angular/core';
import { ScenaiApiService } from './../service/scenai-api.service';
declare var $: any;


@Component({
  selector: 'app-scenai-exprementation',
  templateUrl: './scenai-exprementation.component.html',
  styleUrls: ['./scenai-exprementation.component.css']
})
export class ScenaiExprementationComponent implements OnInit {
  expExpDeplist:any;
  constructor(private apiService: ScenaiApiService) { }

  ngOnInit(){


   
    }

    hideSidebar(){
      setTimeout(function(){  
    
      var ifToGo=$('#loadExp');

        ifToGo.find("#accordionSidebar").remove();
  
    
    }, 3000);

      
    }
}
