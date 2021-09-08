import { SongInterceptorService } from './song-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { PopularListComponent } from './main/popular-list/popular-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchComponent,
    HeaderComponent,
    PopularListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
     
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: SongInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
