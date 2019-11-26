import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-scenaidashboard',
  templateUrl: './scenaidashboard.component.html',
  
  styleUrls: ['./scenaidashboard.component.css']
})
export class ScenaidashboardComponent implements OnInit {
  
  period_value:string;
  receivedChildMessage: string;
  period_date=false;
  @Input() 
  
  @Output()
  filterFlagChangeEmit = new EventEmitter<string>();
 
  
  pvalue:string="";
 
  constructor() { }

  ngOnInit() {
    
  }
  
  periodSelctionFilter(e)
  {
    this.filterFlagChangeEmit.emit(this.pvalue);
    //  console.log("filtervalueparent-->"+e);
     
     this.pvalue=e;
    // console.log("string value=>"+this.pvalue);
  
   }

}
