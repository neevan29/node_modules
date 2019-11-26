import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ScenaiApiService } from './../../service/scenai-api.service';
declare var $: any;
declare var df6,df4,df5: any;

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.css']
})
export class DashboardCardsComponent implements OnInit {

  @Input() pvalue: string="";
  
  @Input()
 
  @Output() messageToEmit = new EventEmitter<string>();


  pdvalue:any;
  modals_deployed:any;
  pivotal_interventions:any;
  value_derived:any;
  workflows_impacted:any;
  homecarddata:any;
  constructor(private apiService: ScenaiApiService) { }

  ngOnInit() {
   
    let datan=[];
    this.apiService.getHomeDatacards().subscribe(data=>{
      this.homecarddata=data;
      datan=this.homecarddata;
      
       let filterResult:any = datan.filter(u => 
         u.periods == '1year');
          this.modals_deployed = filterResult[0].modals_deployed;
          this.pivotal_interventions = filterResult[0].pivotal_interventions;
          this.value_derived = filterResult[0].value_derived;
          this.workflows_impacted = filterResult[0].workflows_impacted;
            
    });

    let sel;
      $('select').on('change', function() {
        sel= this.value ;
       this.pdvalue=sel;
       let base = {period:this.pdvalue}
       let obj=Object.create(base);
       let filterResult1: any = datan.filter(u => 
        u.periods == obj['period']);
        $('#modals_deployed').text(filterResult1[0].modals_deployed);
        $('#pivotal_interventions').text(filterResult1[0].pivotal_interventions);
          $('#value_derived').text(filterResult1[0].value_derived);
            $('#workflows_impacted').text(filterResult1[0].workflows_impacted);
      
      });
  

    $.plot('#flotChart5', [{
      data: df6,
      color: '#9db2c6'
    }], {
    series: {
      shadowSize: 0,
      lines: {
        show: true,
        lineWidth: 2,
        fill: true,
        fillColor: { colors: [ { opacity: 0 }, { opacity: .5 } ] }
      }
    },
    grid: {
      borderWidth: 0,
      labelMargin: 0
    },
    yaxis: {
      show: false,
      min: 0,
      max: 80
    },
    xaxis: { show: false }
  });



  $.plot('#flotChart6', [{
    data: df4,
    color: '#9db2c6'
  }], {
  series: {
    shadowSize: 0,
    lines: {
      show: true,
      lineWidth: 2,
      fill: true,
      fillColor: { colors: [ { opacity: 0 }, { opacity: .5 } ] }
    }
  },
  grid: {
    borderWidth: 0,
    labelMargin: 0
  },
  yaxis: {
    show: false,
    min: 0,
    max: 60
  },
  xaxis: { show: false }
});

    $.plot('#flotChart3', [{
        data: df4,
        color: '#9db2c6'
      }], {
      series: {
        shadowSize: 0,
        lines: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: { colors: [ { opacity: 0 }, { opacity: .5 } ] }
        }
      },
      grid: {
        borderWidth: 0,
        labelMargin: 0
      },
      yaxis: {
        show: false,
        min: 0,
        max: 60
      },
      xaxis: { show: false }
    });

    $.plot('#flotChart4', [{
        data: df5,
        color: '#9db2c6'
      }], {
      series: {
        shadowSize: 0,
        lines: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: { colors: [ { opacity: 0 }, { opacity: .5 } ] }
        }
      },
      grid: {
        borderWidth: 0,
        labelMargin: 0
      },
      yaxis: {
        show: false,
        min: 0,
        max: 80
      },
      xaxis: { show: false }
    });

  }

}
