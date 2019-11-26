import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ScenaiApiService } from './../../service/scenai-api.service';
declare var $: any;
declare var bootbox: any;



@Component({
  selector: 'app-create-proposition',
  templateUrl: './create-proposition.component.html',
  styleUrls: ['./create-proposition.component.css']
})
export class CreatePropositionComponent implements OnInit {

  closeResult: string;


  deleteModal():void{
    bootbox.dialog({
      message: '<div class="text-center"> Deleted Successfully!</div>',
      closeButton: true,
    });
  }

  showModal():void {
    $("#myModal").modal('show');
  }
  sendModal(): void {
    

    bootbox.dialog({
      message: '<div class="text-center"> Data added Successfully!</div>',
      closeButton: true,
    });
    this.hideModal();
  }
  hideModal():void {
    document.getElementById('close-modal').click();
  }


  propositionForm: FormGroup;
  submitted = false;
  keyEnabler=false;
  AuthorArray = ['DS Joe', 'Bradley West', 'Elva Ingram'];

  constructor(private router:Router,private formBuilder: FormBuilder,private apiService: ScenaiApiService,private http: HttpClient,private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.propositionForm = this.formBuilder.group({
      epic: ['', ''],
      checkKeyEnabler: ['', ''],
      feature: ['', ''],
      capability: ['', ''],
      capabilityDescription: ['', ''],
      useCases: ['', ''],
      useCasesDescription: ['', ''],
      dependancies: ['', ''],
      additionalNotes: ['', ''],
      priority: ['', ''],
      priorityCost: ['', ''],
      efficiency: ['', ''],
      efficiencyCost: ['', ''],
      accuracy: ['', ''],
      accuracyCost: ['', ''],
      valueOfData: ['', ''],
      valueOfDataCost: ['', ''],
      timeliness: ['', ''],
      timelinessCost: ['', ''],
      fteSpend: ['', ''],
      fteSpendCost: ['', ''],
      indemitySpend: ['', ''],
      indemitySpendCost: ['', ''],
      medicalSpend: ['', ''],
      medicalSpendCost: ['', ''],
      automationFitment: ['', ''],
      automationComplexity: ['', ''],
      ruleComplexity: ['', ''],
      ruleComplexityComments: ['', ''],
      currentFTE: ['', ''],
      futureFTE: ['', ''],
      timeSpent: ['', ''],
      dependanciesNew: ['', ''],
      currentDataState: ['', ''],
      currentDV: ['', ''],
      futureDV: ['', ''],
      StandardizedInputs: ['', ''],
      dataAssumptions: ['', ''],
      dataDependencies: ['', ''],
  });

  }
  checkValue(event: any){
    console.log(event);
 }
  onSubmit(e)
  {
    
    e.preventDefault();
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
  };
      
  let payload=this.constructPayload('Value Proposition Submitted');
   this.http.post(this.apiService.apiURL+'valueEngineering/createmasterDataBase',payload ,options).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )
  bootbox.dialog({
    message: '<div class="text-center"> Data Added Successfully!</div>',
    closeButton: true,
  });
  }
  DraftSave(e)
  {
    e.preventDefault();
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
  };  
  let payload=this.constructPayload('Draft');
   this.http.post(this.apiService.apiURL+'valueEngineering/createmasterDataBase',payload ,options).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )
  this.router.navigate(['/value-engineering']);

  }
  concatText(priority, Cost) {
    Cost = Cost ? Cost.trim().replace(/[^\w\s]/gi, '') : "0";
    switch (priority.toLowerCase()) {
      case 'high': {
        return 'H(' + Cost + ')';
      }
      case 'medium': {
        Cost
        return 'M(' + Cost + ')';
      }
      case 'low': {
        return 'L(' + Cost + ')';
      }
    }
  }
  toShortFormat() {
    let today = new Date();

    let month_names = ["Jan", "Feb", "Mar",
      "Apr", "May", "Jun",
      "Jul", "Aug", "Sep",
      "Oct", "Nov", "Dec"];

    let day = today.getDate();
    let month_index = today.getMonth();
    let year = today.getFullYear();

    return "" + day + "-" + month_names[month_index] + "-" + year;
  }
  randomString(length) {
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  constructPayload(type) {
    return {
      Status: type,
      Epic: $('select[name="epic"] option:selected').text() ? $('select[name="epic"] option:selected').text() : "",
      KeyEnabler: $('input[name=checkKeyEnabler]').is(":checked") ? true : false,
      Feature: $('select[name="feature"] option:selected').text() ? $('select[name="feature"] option:selected').text() : "",
      Capability: $("input[name=capability]").val() ? $("input[name=capability]").val() : "",
      CapabilityDescription: $("textarea[name=capabilityDescription]").val() ? $("textarea[name=capabilityDescription]").val() : "",
      UseCase: $("input[name=useCases]").val() ? $("input[name=useCases]").val() : "",
      UseCasesDescription: $("textarea[name=useCasesDescription]").val() ? $("textarea[name=useCasesDescription]").val() : "",
      Dependancies: $("textarea[name=dependancies]").val() ? $("textarea[name=dependancies]").val() : "",
      Notes: $("textarea[name=additionalNotes]").val() ? $("textarea[name=additionalNotes]").val() : "",
      Priority: $('select[name="priority"] option:selected').text() ? this.concatText($('select[name="priority"] option:selected').text(), $("input[name=priorityCost]").val() ? $("input[name=priorityCost]").val() : "0") : '',
      Efficiency: $('select[name="efficiency"] option:selected').text() ? this.concatText($('select[name="efficiency"] option:selected').text(), $("input[name=efficiencyCost]").val() ? $("input[name=efficiencyCost]").val() : "0") : '',
      Accuracy: $('select[name="accuracy"] option:selected').text() ? this.concatText($('select[name="accuracy"] option:selected').text(), $("input[name=accuracyCost]").val() ? $("input[name=accuracyCost]").val() : "0") : '',
      ValueOfData: $('select[name="valueOfData"] option:selected').text() ? this.concatText($('select[name="valueOfData"] option:selected').text(), $("input[name=valueOfDataCost]").val() ? $("input[name=valueOfDataCost]").val() : "0") : '',
      Timeliness: $('select[name="timeliness"] option:selected').text() ? this.concatText($('select[name="timeliness"] option:selected').text(), $("input[name=timelinessCost]").val() ? $("input[name=timelinessCost]").val() : "0") : '',
      FTESpend: $('select[name="fteSpend"] option:selected').text() ? this.concatText($('select[name="fteSpend"] option:selected').text(), $("input[name=fteSpendCost]").val() ? $("input[name=fteSpendCost]").val() : "0") : '',
      IndemitySpend: $('select[name="indemitySpend"] option:selected').text() ? this.concatText($('select[name="indemitySpend"] option:selected').text(), $("input[name=indemitySpendCost]").val() ? $("input[name=indemitySpendCost]").val() : "0") : '',
      MedicalSpend: $('select[name="medicalSpend"] option:selected').text() ? this.concatText($('select[name="medicalSpend"] option:selected').text(), $("input[name=medicalSpendCost]").val() ? $("input[name=medicalSpendCost]").val() : "0") : '',
      AutomationFitment: $('select[name="automationFitment"] option:selected').text() ? $('select[name="automationFitment"] option:selected').text() : "",
      AutomationComplexity: $('select[name="automationComplexity"] option:selected').text() ? $('select[name="automationComplexity"] option:selected').text() : "",
      RuleComplexity: $('select[name="ruleComplexity"] option:selected').text() ? $('select[name="ruleComplexity"] option:selected').text() : "",
      RuleComplexityComments: $("input[name=ruleComplexityComments]").val() ? $("input[name=ruleComplexityComments]").val() : "",
      CurrentFTE: $("input[name=currentFTE]").val() ? $("input[name=currentFTE]").val() : "",
      FutureFTE: $("input[name=futureFTE]").val() ? $("input[name=futureFTE]").val() : "",
      TimeSpent: $("input[name=timeSpent]").val() ? $("input[name=timeSpent]").val() : "",
      DependanciesNew: $("textarea[name=dependanciesNew]").val() ? $("textarea[name=dependanciesNew]").val() : "",
      CurrentDataState: $("input[name=currentDataState]").val() ? $("input[name=currentDataState]").val() : "",
      CurrentDV: $("input[name=currentDV]").val() ? $("input[name=currentDV]").val() : "",
      FutureDV: $("input[name=futureDV]").val() ? $("input[name=futureDV]").val() : "",
      StandardizedInputs: $('input[name=StandardizedInputs]').is(":checked") ? true : false,
      DataAssumptions: $("textarea[name=dataAssumptions]").val() ? $("textarea[name=dataAssumptions]").val() : "",
      dataDependencies: $("textarea[name=dataDependencies]").val() ? $("textarea[name=dataDependencies]").val() : "",
      Date: this.toShortFormat(),
      Author: this.AuthorArray[Math.floor(Math.random() * this.AuthorArray.length)],
      Code: this.randomString(3)
    };
  }

}
