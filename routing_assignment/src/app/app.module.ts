import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResearchDepartmentComponent } from './research-department/research-department.component';
import { BusinessComponent } from './business/business.component';
import { TechnologyComponent } from './technology/technology.component';
import { CatalystComponent } from './research-department/catalyst/catalyst.component';
import { OneResearchComponent } from './research-department/one-research/one-research.component';
import { MarketingComponent } from './business/marketing/marketing.component';
import { SalesComponent } from './business/sales/sales.component';
import { AccountsComponent } from './business/accounts/accounts.component';
import { SoftEngineeringComponent } from './technology/soft-engineering/soft-engineering.component';
import { PublicationComponent } from './technology/publication/publication.component';
import { CloudEngineeringComponent } from './technology/cloud-engineering/cloud-engineering.component';
import { DataTransformationComponent } from './technology/soft-engineering/data-transformation/data-transformation.component';
import { PassportComponent } from './technology/soft-engineering/passport/passport.component';
import { ISSACComponent } from './technology/soft-engineering/issac/issac.component';
import { EcomComponent } from './technology/soft-engineering/ecom/ecom.component';

@NgModule({
  declarations: [
    AppComponent,
    ResearchDepartmentComponent,
    BusinessComponent,
    TechnologyComponent,
    CatalystComponent,
    OneResearchComponent,
    MarketingComponent,
    SalesComponent,
    AccountsComponent,
    SoftEngineeringComponent,
    PublicationComponent,
    CloudEngineeringComponent,
    DataTransformationComponent,
    PassportComponent,
    ISSACComponent,
    EcomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
