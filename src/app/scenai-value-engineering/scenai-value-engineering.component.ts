import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ScenaiApiService } from './../service/scenai-api.service';
declare var $: any;
declare var bootbox: any;


@Component({
  selector: 'app-scenai-value-engineering',
  templateUrl: './scenai-value-engineering.component.html',
  styleUrls: ['./scenai-value-engineering.component.css']
})
export class ScenaiValueEngineeringComponent implements OnInit {
  ValueEngineerList:any;
  
  
  constructor(private apiService: ScenaiApiService,private http: HttpClient) { }
  
  delectRow(event) { 
    
    if (confirm("Are you sure to delete?")) {
    var table = $('#ValueEngineering_dataTable').DataTable();

    table.row('.selected').remove().draw( false );
      
    /*var id;
    var rows = $('tr.selected');
    var rowData = table.rows(rows).data();
    alert(JSON.stringify(rowData));
    var attr="";
    $.each($(rowData),function(key,value){
      id=value["_id"];
    });

      let options = {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    this.http.post(this.apiService.apiURL+'valueEngineering/deletemasterDataBase/'+id,attr,options).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)

    )*/

  }
  return false;
   

  }

  ngOnInit() {

  
    var api=this.apiService.getAppUrl();
    var dT=this.ValueEngineerList = $('#ValueEngineering_dataTable').DataTable({
      "dom": '<"float-left"f><"float-right"l>tip',
      ajax: {
        url: api+'valueEngineering/getmasterDataBase',
        dataSrc: ""
     },
     initComplete: function () {
      $('select[name="ValueEngineering_dataTable_length"]').addClass('custom-select').css('width','60px');
      /*$('#ValueEngineering_dataTable tbody tr').attr('data-toggle','tooltip');*/
     },
     tooltip:true,
      columns: [
        { title: "Code",data:"Code" },
        { title: "Epic",data: "Epic" },
        { title: "Feature" ,data: "Feature",width: '20px',render: function (data, type, row) {
          return "<div style='width:150px; white-space: nowrap; overflow-x: hidden;'>"+data+"</div>";
        }},
        { title: "Capability", data: "Capability"},
        { title: "Use Case", data: "UseCase" ,render: function (data, type, row) {
          return "<div style='width:265px; white-space: nowrap; overflow-x: hidden;'>"+data+"</div>";
        }},
        { title: "Author", data: "Author" },
        { title: "Date", data: "Date" ,render: function (data, type, row) {
            var datearray = new Date(data);
            var day = datearray.getDate();
            var month = datearray.getMonth()+1;
            var year = datearray.getFullYear();
          return  (month.toString().length > 1 ? month : "0" + month) + '-'+(day.toString().length > 1 ? day : "0" + day) + '-' + year;
         }
        },
        {
          "title": "Priority", "data": "Priority", render: function (data, type, row) {
            if (data && data.includes('H')) {
              return "<div style='width:50px; white-space: nowrap; overflow-x: hidden;'>"+"<span class='high-green'>" + data + "</span></div>";
            };
            if (data && data.includes('M')) {
              return '<span class="medium-amber">' + data + '</span>';
            };
            if (data && data.includes('L')) {
              return '<span class="low-red">' + data + '</span>';
            };
            if (data=='') {
              return  data ;
            };
          }
        },
        {
          "title": "Efficiency", "data": "Efficiency", render: function (data, type, row) {
            if (data && data.includes('H')) {
              return '<span class="high-green">' + data + '</span>';
            };
            if (data && data.includes('M')) {
              return '<span class="medium-amber">' + data + '</span>';
            };
            if (data && data.includes('L')) {
              return '<span class="low-red">' + data + '</span>';
            };
            if (data=='') {
              return  data ;
            };
          }
        },
        {
          "title": "Accuracy", "data": "Accuracy", render: function (data, type, row) {
            if (data && data.includes('H')) {
              return '<span class="high-green">' + data + '</span>';
            };
            if (data && data.includes('M')) {
              return '<span class="medium-amber">' + data + '</span>';
            };
            if (data && data.includes('L')) {
              return '<span class="low-red">' + data + '</span>';
            };
            if (data=='') {
              return  data ;
            };
          }
        },
        {
          "title": "Value Of Data", "data": "ValueOfData", render: function (data, type, row) {
            if (data && data.includes('H')) {
              return '<span class="high-green">' + data + '</span>';
            };
            if (data && data.includes('M')) {
              return '<span class="medium-amber">' + data + '</span>';
            };
            if (data && data.includes('L')) {
              return '<span class="low-red">' + data + '</span>';
            };
            if (data=='') {
              return  data ;
            };
          }
        },
        {
          "title": "Timeliness", "data": "Timeliness", render: function (data, type, row) {
            if (data && data.includes('H')) {
              return '<span class="high-green">' + data + '</span>';
            };
            if (data && data.includes('M')) {
              return '<span class="medium-amber">' + data + '</span>';
            };
            if (data && data.includes('L')) {
              return '<span class="low-red">' + data + '</span>';
            };
            if (data=='') {
              return  data ;
            };
          }
        }
    ]
    }
    );
    
 
    $('#ValueEngineering_dataTable tbody').on('mouseover mouseout', 'tr', function () {
      
     /* $('[data-toggle="tooltip"]').tooltip({title: "Click for Details", placement: "top"});*/
 
      /*if ($(this).hasClass('selected')) {
          $(this).removeClass('selected');
      }
      else {
        dT.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
      }
        */

  });

 $('#ValueEngineering_dataTable tbody').on( 'click', 'tr', function () {
    if ( $(this).hasClass('selected') ) {
        $(this).removeClass('selected');
    }
    else {
      dT.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
} );

/*$('#ValueEngineering_dataTable').on('draw.dt', function () {
  $('[data-toggle="tooltip"]').tooltip();
});*/
  
  }

}
