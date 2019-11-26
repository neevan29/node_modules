
import { Component, OnInit, NgZone} from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.addLicense("CH180995353");
am4core.useTheme(am4themes_animated);
@Component({
  selector: 'app-dash-dwpt-graph',
  templateUrl: './dash-dwpt-graph.component.html',
  styleUrls: ['./dash-dwpt-graph.component.css']
})
export class DashDwptGraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let chart = am4core.create("chartdiv1", am4charts.XYChart);

    chart.colors.list = [
      am4core.color("#65E0E0")
    ];

    // Export
    //chart.exporting.menu = new am4core.ExportMenu();
    
    // Data for both series
    let data = [    {
      "year": "Jan",
      "total": 15000000,
      "Claims": 5100000,
      "Policy": 6000000,
      "Billing": 6500000
    }, {
      "year": "Feb",
      "total": 14000000,
      "Claims": 5500000,
      "Policy": 5450000,
      "Billing": 5000000
    }, {
      "year": "Mar",
      "total": 16000000,
      "Claims": 5800000,
      "Policy": 6400000,
      "Billing": 7000000
    }, {
      "year": "Apr",
      "total": 12000000,
      "Claims": 6600000,
      "Policy": 6200000,
      "Billing": 9000000
    }, {
      "year": "May",
      "total": 11000000,
      "Claims": 5200000,
      "Policy": 6500000,
      "Billing": 8900000,
      "lineDash": "5,5",
    }, {
      "year": "Jun",
      "total": 13000000,
      "Claims": 8000000,
      "Policy": 6400000,
      "Billing": 7900000,
      "lineDash": "5,5",
    }, {
      "year": "Jul",
      "total": 14500000,
      "Claims": 8800000,
      "Policy": 9700000,
      "Billing": 7400000,
      "lineDash": "5,5",
    }, {
      "year": "Aug",
      "total": 10500000,
      "Claims": 4050000,
      "Policy": 6150000,
      "Billing": 5600000,
      "lineDash": "5,5",
    }, {
      "year": "Sep",
      "total": 17000000,
      "Claims": 9050000,
      "Policy": 9000000,
      "Billing": 7600000,
      "lineDash": "5,5",
    }, {
      "year": "Oct",
      "total": 13000000,
      "Claims": 6050000,
      "Policy": 7050000,
      "Billing": 8600000,
      "lineDash": "5,5",
    }, {
      "year": "Nov",
      "total": 12000000,
      "Claims": 6050000,
      "Policy": 7050000,
      "Billing": 6600000,
      "lineDash": "5,5",
    }, {
      "year": "Dec",
      "total": 16000000,
      "Claims": 7050000,
      "Policy": 8050000,
      "Billing": 5600000,
      "lineDash": "5,5",
    } ];
    
    /* Create axes */
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.minGridDistance = 1;
    
    /* Create value axis */
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis()); 
    //valueAxis.renderer.minGridDistance = 30;
    valueAxis.renderer.grid.template.strokeWidth = 0.5;
    
    /* Create series */
    let columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.name = "Total";
    columnSeries.dataFields.valueY = "total";
    columnSeries.dataFields.categoryX = "year";
    categoryAxis.renderer.grid.template.strokeWidth = 0.5;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.renderer.grid.template.location = 0;
    
    columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]{name}: [/][#fff font-size: 15px]{valueY}[/] [#fff]{additional}[/]"
    columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
    columnSeries.columns.template.propertyFields.stroke = "stroke";
    columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
    columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
    
    
    let lineSeries = chart.series.push(new am4charts.LineSeries());

    lineSeries.name = "Claims";
    lineSeries.dataFields.valueY = "Claims";
    lineSeries.dataFields.categoryX = "year";
    
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

    lineSeries1.name = "Policy";
    lineSeries1.dataFields.valueY = "Policy";
    lineSeries1.dataFields.categoryX = "year";
    
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

    lineSeries2.name = "Billing";
    lineSeries2.dataFields.valueY = "Billing";
    lineSeries2.dataFields.categoryX = "year";
    
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
   
   
    chart.data = data;
      
  }

}
