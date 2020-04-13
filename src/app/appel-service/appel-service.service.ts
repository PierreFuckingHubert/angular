import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable()
export class AppelService {


  customersObservable :any;
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "//localhost:9090";
  }



  createTable(name): Observable<any>{
    return this.httpClient.post(this.baseUrl+'/createTable',name, {responseType:'text'});
  }

  deleteTable(name): Observable<any>{
    return this.httpClient.post(this.baseUrl+'/deleteTable',name, {responseType:'text'});
  }

  addRecord(data): Observable<any>{
    console.log("data : ",data);
    return this.httpClient.post(this.baseUrl+'/addRecord',data, {responseType:'text'});
  }

  getRecordsFromBdd(tablename): Observable<any>{
    return this.httpClient.get(this.baseUrl+'/records?tablename='+tablename);
  }
  
  getAllDatabasesNames(): Observable<any> {
    return this.httpClient.get(this.baseUrl+'/tablesNames');
  }

  getCategories(): Observable<any> {
    return this.httpClient.get(this.baseUrl+'/categories');
  }

  searchOnEbay(category): Observable<any>{
    return this.httpClient.post(this.baseUrl+'/searchOnEbay',category, {responseType:'text'});
  }

  getNumberOfReleases(request): Observable<any> {
    return this.httpClient.get(request);
  }

  addReleasesToBdd(request): Observable<any>{
    console.log("addReleasesToBdd : ", request);
    return this.httpClient.post(this.baseUrl+'/addReleasesToBdd',request, {responseType:'text'});
  }

  addRatedReleasesToBdd(request): Observable<any>{
    console.log("addRatedReleasesToBdd : ", request);
    return this.httpClient.post('//localhost:9090/addRatedReleasesToBdd',request, {responseType:'text'});
  }

}
