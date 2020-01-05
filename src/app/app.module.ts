import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppelService } from './appel-service/appel-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseComponent } from './database/database.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DatabaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppelService],
  bootstrap: [AppComponent]
})

export class AppModule { }
