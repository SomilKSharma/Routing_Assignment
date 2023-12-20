import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './business/accounts/accounts.component';
import { BusinessComponent } from './business/business.component';
import { MarketingComponent } from './business/marketing/marketing.component';
import { SalesComponent } from './business/sales/sales.component';
import { CatalystComponent } from './research-department/catalyst/catalyst.component';
import { OneResearchComponent } from './research-department/one-research/one-research.component';
import { ResearchDepartmentComponent } from './research-department/research-department.component';
import { CloudEngineeringComponent } from './technology/cloud-engineering/cloud-engineering.component';
import { PublicationComponent } from './technology/publication/publication.component';
import { DataTransformationComponent } from './technology/soft-engineering/data-transformation/data-transformation.component';
import { EcomComponent } from './technology/soft-engineering/ecom/ecom.component';
import { ISSACComponent } from './technology/soft-engineering/issac/issac.component';
import { PassportComponent } from './technology/soft-engineering/passport/passport.component';
import { SoftEngineeringComponent } from './technology/soft-engineering/soft-engineering.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {
    path: "researchdepartment", component: ResearchDepartmentComponent, children: [
    {path:"catalyst", component:CatalystComponent},
    {path:"oneresearch", component:OneResearchComponent},
  ]},
  {
    path: "business", component: BusinessComponent, children: [
    {path:"marketing", component:MarketingComponent},
    {path:"sales", component:SalesComponent},
    {path:"accounts", component:AccountsComponent},
  ]},
  {
    path: "technology", component: TechnologyComponent, children: [
      {
        path: "softengineering", component: SoftEngineeringComponent, children: [
      {path:"datatransformation", component:DataTransformationComponent},
      {path:"datatransformation/:id", component:DataTransformationComponent},
      {path:"passport", component:PassportComponent},
      {path:"passport/:id", component:PassportComponent},
      {path:"issac", component:ISSACComponent},
      {path:"ecom", component:EcomComponent},
    ]},
    {path:"publication", component:PublicationComponent},
    {path:"cloudengineering", component:CloudEngineeringComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
