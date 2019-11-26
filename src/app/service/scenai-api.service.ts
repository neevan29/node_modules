import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ScenaiApiService {
  apiURL= 'http://3.18.222.128:4000/';

  constructor(private httpClient: HttpClient) {

  }
  public getAppUrl(){
    return 'http://3.18.222.128:4000/';
  }

  public getExpectationList(){
       return this.httpClient.get(this.apiURL+'expExpDet/get');
  }

  public getBusinessValueList(){
    return this.httpClient.get(this.apiURL+'businessValueDet/get');
}

public SaveMasterDataValue(formData){
  return this.httpClient.post(this.apiURL+'valueEngineering/createmasterDataBase',formData);
}

public getHomeChartValueList(){
  return this.httpClient.get(this.apiURL+'homeChartDet/getHomeChart3Det');
}

public getHomeChartProcessList(){
  return this.httpClient.get(this.apiURL+'homeChartDet/getHomeChart2Det');
}

public getHomeDatacards(){
  return this.httpClient.get(this.apiURL+'homeCardSummary/gethomeCardSummary');
}
}
