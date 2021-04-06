import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ShortencountriesPipe } from './shortencountries.pipe';


const appRoutes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'country/:countryname',
    component: CountryDetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryDetailsComponent,
    ShortencountriesPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
