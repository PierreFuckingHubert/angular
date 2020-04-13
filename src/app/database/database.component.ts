import { Component, OnInit } from '@angular/core';
import { AppelService } from '../appel-service/appel-service.service';


@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  nameTable: any;
  databases: Array<any>;
  mydatabase: any;
  mycategory: any;
  mynewcategory: any;
  myexistingcategory: any;
  newRecord: any;
  categories: any;
  request: any;
  selectedStyle: string = "";
  selectedStyle2: string = "";
  selectedGenre: string = "";
  selectedGenre2: string = "";
  selectedCountry: string = "";
  selectedYear: any;
  releasesNumber: any;
  tableName: string;

  constructor(private appelService: AppelService) { }

  ngOnInit() {
    this.getCategories();
    this.getDatabases();
    this.getRecordsFromBdd();
  }


  genre(event) {
    if(event.target.value != "aucun"){
      this.selectedGenre = "&genre="+event.target.value;
    }else{
      this.selectedGenre = "";
    }
  }

  genre2(event) {
    if(event.target.value != "aucun"){
      this.selectedGenre2 = "+"+event.target.value;
    }else{
      this.selectedGenre2 = "";
    }
  }

  style(event) {
    if(event.target.value != "aucun"){
      this.selectedStyle = "&style="+event.target.value;
    }else{
      this.selectedStyle = "";
    }
  }

  style2(event) {
    if(event.target.value != "aucun"){
      this.selectedStyle2 = "+"+event.target.value;
    }else{
      this.selectedStyle2 = "";
    }
  }

  country(event) {
    if(event.target.value != "aucun"){
      this.selectedCountry = "&country="+event.target.value;
    }else{
      this.selectedCountry = "";
    }
  }

  getRecordsFromBdd(){
    this.tableName = "raterecords3";
    this.appelService.getRecordsFromBdd(this.tableName).subscribe(data => {
      console.log(data);
    });
  }

  searchOnDiscogs(){
    this.request = "https://api.discogs.com/database/search?&type=release&format=Vinyl&token=vQxxFzrnTDhksNimCTcZGftwHqejMcrUungWtECD&per_page=1000"+this.selectedStyle+this.selectedStyle2+this.selectedCountry+this.selectedGenre+this.selectedGenre2;
    console.log("this.request : ", this.request);
    this.appelService.getNumberOfReleases(this.request).subscribe(data => {
      this.releasesNumber = data.pagination.items;
    });
  }

  addToBdd(){
    console.log("this.request : ", this.request);
    this.appelService.addReleasesToBdd(this.request).subscribe(data => {
      console.log("addToBdd : ", data);
    });
  }

  addRatedReleasesToBdd(){
    this.appelService.addRatedReleasesToBdd({"date":true,"request":this.request}).subscribe(data => {
      console.log("addRatedReleasesToBdd : ", data);
    });
  }

  searchOnEbay(){
    this.appelService.searchOnEbay(this.myexistingcategory).subscribe(data => {
      console.log("categories : ", data);
    });
  }

  getCategories(){
    this.appelService.getCategories().subscribe(data => {
      this.categories = data;
      this.myexistingcategory = this.categories[0];
      console.log("categories : ", data);
    });
  }

  getDatabases(){
    this.appelService.getAllDatabasesNames().subscribe(data => {
      this.databases = data;
      console.log("databases : ", data);
    });
  }
  

  createTable(){
    this.appelService.createTable(this.nameTable).subscribe((data) => {
      console.log("Create table : ", data);
      this.databases.push(data);
    });    
  }


  deleteTable(){
    this.appelService.deleteTable(this.mydatabase).subscribe((data) => {
      console.log("Delete table : ", data);
      this.databases.splice(this.databases.indexOf(data),1);
    });    
  }

  addRecord(){
    if(this.mynewcategory && this.mynewcategory != null){
      this.mycategory = this.mynewcategory;
    }else{
      this.mycategory = this.myexistingcategory;
    }
    this.appelService.addRecord({"category":this.mycategory,"url":this.newRecord}).subscribe((data) => {
      console.log("addRecord table : ", data);
    });    
  }


  onKey(event: any) {
    this.nameTable = event.target.value;
    console.log("nameTable : ",this.nameTable);
  }

  onKeyRecord(event) {
    this.newRecord = event.target.value;
    console.log("newRecord : ",this.newRecord);
  }

  newCategory(event){
    this.mynewcategory = event.target.value;
    console.log("mynewcategory : ",this.mynewcategory);
  }

  onChange(event) {
    this.mydatabase = event.target.value;
    console.log("mydatabase : ", event.target.value);
  }

  onChangeCategory(event) {
    this.myexistingcategory = event.target.value;
    console.log("myexistingcategory : ", event.target.value);
  }

}