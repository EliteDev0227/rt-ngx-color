import { NgModule } from '@angular/core';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RtNgxColorModule} from 'projects/rt-ngx-color/src/lib/rt-ngx-color.module';
// import {RtNgxColorModule} from 'rt-ngx-color';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RtNgxColorModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
