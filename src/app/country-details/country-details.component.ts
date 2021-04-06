import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import countryData from '../realcountries.json';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['../app.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  chosenCountry: string = '';
  chosenCountryDetails:any = [];
  realCountries = countryData;

  constructor(private route:ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }


  ngOnInit(): void {
    this.chosenCountry = this.route.snapshot.params.countryname;
    this.route.params.subscribe((params: Params)=>{
      this.chosenCountry = params.countryname;
    })

    if(this.chosenCountry.length == 3){
      this.http.get('https://restcountries.eu/rest/v2/alpha?codes=' + this.chosenCountry.toLowerCase()).subscribe(responseData=>{
        this.chosenCountryDetails = responseData;
      })
    }else{
      this.http.get('https://restcountries.eu/rest/v2/name/' + this.chosenCountry + '?fullText=true').subscribe(responseData=>{
        this.chosenCountryDetails = responseData;
      })
    }


  }



  goBack(){
    this.router.navigate(['']);
  }

  borderNavigation(alphaCode:string){
    this.http.get('https://restcountries.eu/rest/v2/alpha?codes=' + alphaCode.toLowerCase()).subscribe(responseData=>{
        this.chosenCountryDetails = responseData;
    })
  }

}
