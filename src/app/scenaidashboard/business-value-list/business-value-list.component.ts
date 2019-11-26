import { Component, OnInit } from '@angular/core';
import { ScenaiApiService } from './../../service/scenai-api.service';
declare var $: any;
declare var moment: any;
declare var bootbox: any;



@Component({
  selector: 'app-business-value-list',
  templateUrl: './business-value-list.component.html',
  styleUrls: ['./business-value-list.component.css']
})
export class BusinessValueListComponent implements OnInit {

  busValueExplist:any;
  dashboard_dataTable:any;


  constructor(private apiService: ScenaiApiService) { }

  ngOnInit() {
    var api=this.apiService.getAppUrl();
    var dT=this.dashboard_dataTable = $('#dashboard_dataTable').DataTable({
      "dom": '<"float-left"f><"float-right"l>tip',
      ajax: {
        url: api+'businessValueDet/get',
        dataSrc: ""
     }
    ,
     "language": {
      "info": "Displaying _START_ to _END_ of _TOTAL_ items",
    },
    "oLanguage": {
      "sLengthMenu": "Display Items   _MENU_",
    },
     initComplete: function () {
      $('select[name="dashboard_dataTable_length"]').addClass('custom-select').css('width','60px');
      $('#dashboard_dataTable tbody tr').attr('data-toggle','tooltip');

     },
     "columnDefs": [
      {
        className: "dt-body-right", "targets": [4],
   },
      {
          "targets": [ 7 ],
          "visible": false,
          "searchable": false
      },
      {
          "targets": [ 8 ],
          "visible": false,
          "searchable": false
      },
      {
        "targets": [ 9 ],
        "visible": false,
        "searchable": false
    },
   
    { targets: 5,
      render: function (data) {
        var datearray = data.split("-");
        
      return datearray[1] + '-' + datearray[0] + '-' + datearray[2];
    } },
    { targets: 6,
      createdCell: function (td, cellData, rowData, row, col) {
        //alert(cellData);
        if ( cellData == 'Live' ) {
          $(td).css('border', '1px solid green');
         
        }
        else
        if ( cellData == 'Draft' ) {
          $(td).css('border', '1px solid blue');
         
        }
        else
        if ( cellData == 'QA' ) {
          $(td).css('border', '1px solid orange');
         
        }
      }
     },

  ], 
      columns: [
        { title: "Use Case",data:"UseCase" },
        { title: "Process",data: "Process" },
        { title: "Workflow System" ,data: "WorkflowSystem" },
        { title: "Decision", data: "Decision"},
        { title: "Business Value in USD", data: "BusinessValue" ,render: function (data, type, full, meta) {

         // alert(data);


          /*var output;
          //alert(meta.row);
         for (var i = 0; i < meta.row; i++)
          {
            alert(data);
              output = output + data.ToString();
              output += (i < meta.row) ? "," :"";
          }
          //alert(output);*/
         /* var result = Number(parseFloat(data).toFixed(2)).toLocaleString('en', {
            minimumFractionDigits: 2
        });


        
        var finaldata = result.split(".");
           return finaldata[0];*/
           return data;


        }

      
      },
        { title: "Production Date", data: "ProductionDate" },
        { title: "Status", data: "Status" , render: function (data, type,row, full, meta) {

          if (data && data.includes('Live')) {
            
            return '<span class="low-red">' + data + '</span>';
          };
          if (data && data.includes('QA')) {
            return '<span class="medium-amber">' + data + '</span>';
          };
          if (data && data.includes('Draft')) {
            return '<span class="low-blue">' + data + '</span>';
          };
          if (data=='') {
            return  data ;
          };

        }
    },
        { title: "Approver", data: "Approver" },
        { title: "Author", data: "Author" },
        { title: "DateofApproval", data: "DateofApproval" },
    ]
    }
    );

   
    $('#dashboard_dataTable tbody').on('mouseover mouseout', 'tr', function () {
      
      $('[data-toggle="tooltip"]').tooltip({title: "Click for Details", placement: "top"});
 
      if ($(this).hasClass('selected')) {
          $(this).removeClass('selected');
      }
      else {
        dT.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
      }
        

  });
  
 
  $('#Select_WorkFlowSystem').on('change', function () {
  
    //console.log(dT.column(3).search($('#Select_WorkFlowSystem').val()).draw());
    this.dashboard_dataTable = dT.column(2).search($('#Select_WorkFlowSystem').val()).draw();
    
  });

  $('#Select_DecisionType').on('change', function () {
    this.dashboard_dataTable = dT.column(3).search($('#Select_DecisionType').val()).draw();
});

$('#Select_Process').on('change', function () {
  this.dashboard_dataTable = dT.column(1).search($('#Select_Process').val()).draw();
});
  $('#dashboard_dataTable tbody').on('click', 'tr', function () {
    var datearray = dT.row(this).data().ProductionDate.split("-");
      var productiondate= datearray[1] + '-' + datearray[0] + '-' + datearray[2];
      var datearray1 = dT.row(this).data().DateofApproval.split("-");
      var DateofApproval= datearray1[1] + '-' + datearray1[0] + '-' + datearray1[2];
      //alert(JSON.stringify(DateofApproval));
 
      var html = '<table><tbody><tr><td colspan="2">'
        + ' <label><strong> UseCase : </strong></label><label> '
        + dT.row(this).data().UseCase + '</label></td></tr><tr><td>'
        + '<label><strong> Process : </strong></label> <label> '
        + dT.row(this).data().Process + '</label></td><td style="padding-left: 30px;">'
        + '<label><strong> Workflow System : </strong></label> <label> '
        + dT.row(this).data().WorkflowSystem + '</label></td></tr><tr><td>'
        + '<label><strong> Decision : </strong></label> <label> '
        + dT.row(this).data().Decision + '</label></td><td style="padding-left: 30px;">'
        + '<label><strong> Business Value : </strong></label> <label> '
        + dT.row(this).data().BusinessValue + '</label></td></tr><tr><td>'
        + '<label><strong> Production Date : </strong></label> <label> '
        + productiondate + '</label></td><td style="padding-left: 30px;">'
        + '<label><strong> Status : </strong></label> <label> '
        + dT.row(this).data().Status + '</label></td></tr><tr><td>'
        + '<label><strong> Approver : </strong></label> <label> '
        + dT.row(this).data().Approver + '</label></td><td style="padding-left: 30px;">'
        + '<label><strong> Author : </strong></label> <label> '
        + dT.row(this).data().Author + '</label></td></tr><tr><td>'
        + '<label><strong> Date of Approval : </strong></label> <label> '
        + DateofApproval + '</label></td><td style="padding-left: 30px;"></td></tr>'
        
        +'</tbody></table>';
    var dialog = bootbox.dialog({
        title: 'Details',
        message: html
    });
});


  }

 
  clearAll()
  {
    $.fn.dataTable.ext.search.pop();
    this.dashboard_dataTable.columns([2, 3, 4, 5]).search('').draw();
    //var d = new Date();
    $("#Select_Process").val("By Process");
    $("#Select_DecisionType").val("By Decision Type");
    $("#Select_Status").val("By Status");
    $("#Select_WorkFlowSystem").val("By Primary System");
    //$('input[name="daterange"]').val(d.format('MM/DD/YYYY') + '-' + d.format('MM/DD/YYYY'));
  }

}
