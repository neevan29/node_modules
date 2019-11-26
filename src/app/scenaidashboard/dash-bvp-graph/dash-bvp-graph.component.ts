import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { ScenaiApiService } from './../../service/scenai-api.service';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
 declare var $: any;

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-dash-bvp-graph',
  templateUrl: './dash-bvp-graph.component.html',
  styleUrls: ['./dash-bvp-graph.component.css']
})
export class DashBvpGraphComponent implements OnInit {

  pvdvalue:any;
  pvdvaluei:any;
  graph1chart:any;
  constructor(private apiService: ScenaiApiService) { }

  ngOnInit() {
    let datapvd=[];
    let chart = am4core.create("chartdivbvp", am4charts.XYChart);
    chart.colors.list = [
      am4core.color("#217BFB"),
      am4core.color("#D65DB1"),
     
    ];
    this.apiService.getHomeChartProcessList().subscribe(data=>{
      this.graph1chart=data;
      
      datapvd=this.graph1chart;
      setTimeout(function(){
     
        let filterResult: any = datapvd.filter(u => 
          u.period == '1year');
        //alert(JSON.stringify(filterResult));
        //console.log(filterResult);
          chart.data = filterResult;
        
      },500)
      
    });

    let selpvd;
      
    $('select').on('change', function() {
     
      selpvd= this.value ;
       this.pvdvalue=selpvd;
       let base = {period:this.pvdvalue}
       let obj=Object.create(base);
       let filterResultpvd: any = datapvd.filter(u => 
       u.period == obj['period']);
     
       chart.data = filterResultpvd;
    });

    chart.paddingRight = 20;
    chart.numberFormatter.numberFormat = "#a";

    
     /* Create series */
   
     let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
     categoryAxis.dataFields.category = "month";
     categoryAxis.renderer.minGridDistance = 1;
     
    categoryAxis.renderer.grid.template.strokeWidth = 0.5;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis()); 
    valueAxis.renderer.grid.template.strokeWidth = 0.5;

let lineSeries = chart.series.push(new am4charts.LineSeries());

    lineSeries.name = "ICD Approval";
    lineSeries.dataFields.valueY = "ICDApproval";
    lineSeries.dataFields.categoryX = "month";
    lineSeries.stroke = am4core.color("#FFD700");
    lineSeries.strokeWidth = 3;

    let bullet = lineSeries.bullets.push(new am4charts.Bullet());
    bullet.fill = am4core.color("#FFD700"); // tooltips grab fill from parent by default
    bullet.tooltipText = "[#fff font-size: 15px]{name}: [/][#fff font-size: 15px]{valueY}[/] [#fff]{additional}[/]"
    let circle = bullet.createChild(am4core.Circle);
    circle.radius = 4;
    circle.fill = am4core.color("#fff");
    circle.strokeWidth = 3;


    let lineSeries1 = chart.series.push(new am4charts.LineSeries());
    lineSeries1.name = "RTW";
    lineSeries1.dataFields.valueY = "RTW";
    lineSeries1.dataFields.categoryX = "month";    
    lineSeries1.stroke = am4core.color("#C693F9");
    lineSeries1.strokeWidth = 3;
   
    let bullet1 = lineSeries1.bullets.push(new am4charts.Bullet());
    bullet1.fill = am4core.color("#C693F9"); // tooltips grab fill from parent by default
    bullet1.tooltipText = "[#fff font-size: 15px]{name}: [/][#fff font-size: 15px]{valueY}[/] [#fff]{additional}[/]"
    let circle1 = bullet1.createChild(am4core.Circle);
    circle1.radius = 4;
    circle1.fill = am4core.color("#fff");
    circle1.strokeWidth = 3;


    let lineSeries2 = chart.series.push(new am4charts.LineSeries());
    lineSeries2.name = "FNOL";
    lineSeries2.dataFields.valueY = "FNOL";
    lineSeries2.dataFields.categoryX = "month";
    lineSeries2.stroke = am4core.color("#69B2F8");
    lineSeries2.strokeWidth = 3;
    
    let bullet2 = lineSeries2.bullets.push(new am4charts.Bullet());
    bullet2.fill = am4core.color("#69B2F8"); // tooltips grab fill from parent by default
    bullet2.tooltipText = "[#fff font-size: 15px]{name}: [/][#fff font-size: 15px]{valueY}[/] [#fff]{additional}[/]"
    let circle2 = bullet2.createChild(am4core.Circle);
    circle2.radius = 4;
    circle2.fill = am4core.color("#fff");
    circle2.strokeWidth = 3;


    chart.legend = new am4charts.Legend();
    chart.legend.contentAlign = "left";

    chart.numberFormatter.numberFormat = "#a";

      //chart.cursor = new am4charts.XYCursor();
      
    }

}