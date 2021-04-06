import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.scss']
})
export class HomeComponent implements OnInit {



  countries:any = [];
  fileteredCountries:any = [];

  searchValue: string = '';

  selectOptions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http
    .get('https://restcountries.eu/rest/v2/all')
    .subscribe((posts:any)=>{
      const myArr = [];
      for(let key in posts){
        myArr.push(posts[key]);
      }
      this.countries = myArr;
      this.fileteredCountries = myArr;
    });
  }

  onSelectRegion(event:any){
    const selectedRegion = event.target.value;

    if(selectedRegion == 'All'){
      this.fileteredCountries = this.countries;
    }else{
      this.fileteredCountries = this.countries;
      this.fileteredCountries = this.fileteredCountries.filter((x:any)=>{
        return x.region == selectedRegion;
      });

    }
  }

  onKeypress(event:any){
    if(event.keyCode == 13){

      this.fileteredCountries = this.countries;
      this.fileteredCountries = this.fileteredCountries.filter((x:any)=>{
        return x.name.toLowerCase().includes(this.searchValue.toLowerCase());
      })
    }
  }

  reset(){
    this.searchValue = '';
    this.fileteredCountries = this.countries;
  }

  goToCountry(countryName: string){
    this.router.navigate(['/country', countryName]);
  }
}


