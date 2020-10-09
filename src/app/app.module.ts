import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { TopNavbarComponent } from './Layout/top-navbar/top-navbar.component';
import { MaterialModule } from './material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConsumptionListComponent } from './Shared/consumption-list/consumption-list.component';
import { ConsumptionCreatorComponent } from './Shared/consumption-creator/consumption-creator.component';
import { ConsumptionCreatorModalComponent } from './Dialog/consumption-creator-modal/consumption-creator-modal.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavbarComponent,

    ConsumptionListComponent,
    ConsumptionCreatorComponent,
    ConsumptionCreatorModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
