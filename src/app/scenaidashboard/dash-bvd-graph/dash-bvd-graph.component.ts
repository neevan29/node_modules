import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ScenaiApiService } from './../../service/scenai-api.service';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
 declare var $: any;

 am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-dash-bvd-graph',
  templateUrl: './dash-bvd-graph.component.html',
  styleUrls: ['./dash-bvd-graph.component.css']
})
export class DashBvdGraphComponent implements OnInit {

  @Input() pvalue: string="";
  
  @Input()
 
  @Output() messageToEmit = new EventEmitter<string>();


  pdvalue:any;
  pvdvalueii:any;
  graphBarchart:any;
  
  
  constructor(private apiService: ScenaiApiService) {
  }

  ngOnInit() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.colors.list = [
      am4core.color("#69B2F8"),
      am4core.color("#65E0E0")
     
    ];
    let datan=[];

    this.apiService.getHomeChartValueList().subscribe(data=>{
      this.graphBarchart=data;
      datan=this.graphBarchart;
      
       setTimeout(function(){
       
       let filterResult: any = datan.filter(u => 
         u.period == '1year');
         //alert(JSON.stringify(filterResult));
         //console.log(filterResult)
         chart.data = filterResult;
       },500)
 
    });
   
    let sel;
      $('select').on('change', function() {
        sel= this.value ;
       this.pdvalue=sel;

       let base = {period:this.pdvalue}
       let obj=Object.create(base);
      
       let filterResult: any = datan.filter(u => 
        u.period == obj['period']);
      
        chart.data = filterResult;
      
      });
  
    
// Export
//chart.exporting.menu = new am4core.ExportMenu();

/* Create axes */
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "month";
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.renderer.grid.template.strokeWidth = 0.5;
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;
categoryAxis.renderer.grid.template.location = 0;


/* Create value axis */
let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.minGridDistance = 30;
valueAxis.renderer.grid.template.strokeWidth = 0.5;

// Create series
function createSeries(field, name) {
  
  // Set up series
  let series = chart.series.push(new am4charts.ColumnSeries());
  series.name = name;
  series.dataFields.valueY = field;
  series.dataFields.categoryX = "month";
  series.sequencedInterpolation = true;
  
  // Make it stacked
  series.stacked = true;
  
  // Configure columns
  series.columns.template.width = am4core.percent(60);
  series.columns.template.tooltipText = "{name}[/]: {valueY}";
  
  return series;
}

createSeries("Augmented", "Augmented");
createSeries("Automated", "Automated");

chart.legend = new am4charts.Legend();
chart.legend.contentAlign = "left";
chart.numberFormatter.numberFormat = "#a";

  }
  
 }

