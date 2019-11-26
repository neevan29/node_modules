import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ScenaidashboardComponent } from './scenaidashboard/scenaidashboard.component';
import { ScenaiExprementationComponent } from './scenai-exprementation/scenai-exprementation.component';
import { ScenaiValueEngineeringComponent } from './scenai-value-engineering/scenai-value-engineering.component';
import { CreatePropositionComponent } from './scenai-value-engineering/create-proposition/create-proposition.component';
import { ScenaiDataScienceComponent } from './scenai-data-science/scenai-data-science.component';
import { ScenaiDataEngineeringComponent } from './scenai-data-science/scenai-data-engineering/scenai-data-engineering.component';
import { ScenaiDataSetComponent } from './scenai-data-science/scenai-data-set/scenai-data-set.component';
import { ScenaiFeatureEngineeringComponent } from './scenai-data-science/scenai-feature-engineering/scenai-feature-engineering.component';
import { ScenaiBusinessCertificationComponent } from './scenai-business-certification/scenai-business-certification.component';
import { ScenaiTrialConsoleComponent } from './scenai-trial-console/scenai-trial-console.component';
import { UseCaseModelComponent } from './scenai-trial-console/use-case-model/use-case-model.component';
import { ScenaiOperationCockpitComponent } from './scenai-operation-cockpit/scenai-operation-cockpit.component';
import {  OpSystemWorkflowMonitorComponent } from './scenai-operation-cockpit/op-system-workflow-monitor/op-system-workflow-monitor.component';
import { OpSystemMonitorComponent } from './scenai-operation-cockpit/op-system-monitor/op-system-monitor.component';

import { AuthGuard } from './guards/auth-guard.service';




const routes: Routes = [
  {
    path: '',
    redirectTo:'/login',pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: ScenaidashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'exprementation',
    component: ScenaiExprementationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'value-engineering',
    component: ScenaiValueEngineeringComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'value-engineering/create-proposition',
    component: CreatePropositionComponent,
    canActivate: [AuthGuard]
  } ,
  {
    path: 'data-science-center',
    component: ScenaiDataScienceComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'data-science-center/data-engineering',
    component: ScenaiDataEngineeringComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'data-science-center/data-set',
    component: ScenaiDataSetComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'data-science-center/feature-engineering',
    component: ScenaiFeatureEngineeringComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'business-certification',
    component: ScenaiBusinessCertificationComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'trial-console',
    component: ScenaiTrialConsoleComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'trial-console/use-case-model',
    component: UseCaseModelComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'operation-cockpit',
    component: ScenaiOperationCockpitComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'operation-cockpit/system-workflow-monitor',
    component: OpSystemWorkflowMonitorComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'operation-cockpit/system-monitor',
    component: OpSystemMonitorComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
