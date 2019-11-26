import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';


import { AppComponent } from './app.component';
import { SheaderComponent } from './sheader/sheader.component';
import { LoginComponent } from './login/login.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { ScenaidashboardComponent } from './scenaidashboard/scenaidashboard.component';
import { ScenaiExprementationComponent } from './scenai-exprementation/scenai-exprementation.component';
import { DashBvpGraphComponent } from './scenaidashboard/dash-bvp-graph/dash-bvp-graph.component';
import { DashBvdGraphComponent } from './scenaidashboard/dash-bvd-graph/dash-bvd-graph.component';
import { DashDwptGraphComponent } from './scenaidashboard/dash-dwpt-graph/dash-dwpt-graph.component';
import { BusinessValueListComponent } from './scenaidashboard/business-value-list/business-value-list.component';
import { DashboardCardsComponent } from './scenaidashboard/dashboard-cards/dashboard-cards.component';
import { ScenaiValueEngineeringComponent } from './scenai-value-engineering/scenai-value-engineering.component';
import { CreatePropositionComponent } from './scenai-value-engineering/create-proposition/create-proposition.component';
import { ScenaiDataScienceComponent } from './scenai-data-science/scenai-data-science.component';
import { AuthGuard } from './guards/auth-guard.service';
import { ScenaiDataEngineeringComponent } from './scenai-data-science/scenai-data-engineering/scenai-data-engineering.component';
import { ScenaiDataSetComponent } from './scenai-data-science/scenai-data-set/scenai-data-set.component';
import { ScenaiFeatureEngineeringComponent } from './scenai-data-science/scenai-feature-engineering/scenai-feature-engineering.component';
import { ScenaiBusinessCertificationComponent } from './scenai-business-certification/scenai-business-certification.component';
import { ScenaiTrialConsoleComponent } from './scenai-trial-console/scenai-trial-console.component';
import { UseCaseModelComponent } from './scenai-trial-console/use-case-model/use-case-model.component';
import { ScenaiOperationCockpitComponent } from './scenai-operation-cockpit/scenai-operation-cockpit.component';
import { OpSystemWorkflowMonitorComponent } from './scenai-operation-cockpit/op-system-workflow-monitor/op-system-workflow-monitor.component';
import { OpSystemMonitorComponent } from './scenai-operation-cockpit/op-system-monitor/op-system-monitor.component';


@NgModule({
  declarations: [
    AppComponent,
    SheaderComponent,
    LoginComponent,
    LeftnavComponent,
    ScenaidashboardComponent,
    ScenaiExprementationComponent,
    DashBvpGraphComponent,
    DashBvdGraphComponent,
    DashDwptGraphComponent,
    BusinessValueListComponent,
    DashboardCardsComponent,
    ScenaiValueEngineeringComponent,
    CreatePropositionComponent,
    ScenaiDataScienceComponent,
    ScenaiDataEngineeringComponent,
    ScenaiDataSetComponent,
    ScenaiFeatureEngineeringComponent,
    ScenaiBusinessCertificationComponent,
    ScenaiTrialConsoleComponent,
    UseCaseModelComponent,
    ScenaiOperationCockpitComponent,
    OpSystemWorkflowMonitorComponent,
    OpSystemMonitorComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
