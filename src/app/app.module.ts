import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {ResizeTableDirective} from './resize-table.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResizeTableDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
