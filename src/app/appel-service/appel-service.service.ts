import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable()
export class AppelService {


  customersObservable :any;

  constructor(private httpClient: HttpClient) {
  }


  createTable(name): Observable<any>{
    return this.httpClient.post('//localhost:9090/createTable',name, {responseType:'text'});
  }

  deleteTable(name): Observable<any>{
    return this.httpClient.post('//localhost:9090/deleteTable',name, {responseType:'text'});
  }

  addRecord(data): Observable<any>{
    console.log("data : ",data);
    return this.httpClient.post('//localhost:9090/addRecord',data, {responseType:'text'});
  }
  
  getAllDatabasesNames(): Observable<any> {
    return this.httpClient.get('//localhost:9090/tablesNames');
  }

  getCategories(): Observable<any> {
    return this.httpClient.get('//localhost:9090/categories');
  }

  searchOnEbay(category): Observable<any>{
    return this.httpClient.post('//localhost:9090/searchOnEbay',category, {responseType:'text'});
  }

  getNumberOfReleases(request): Observable<any> {
    return this.httpClient.get(request);
  }

  addReleasesToBdd(request): Observable<any>{
    console.log("addReleasesToBdd : ", request);
    return this.httpClient.post('//localhost:9090/addReleasesToBdd',request, {responseType:'text'});
  }

  addRatedReleasesToBdd(request): Observable<any>{
    console.log("addRatedReleasesToBdd : ", request);
    return this.httpClient.post('//localhost:9090/addRatedReleasesToBdd',request, {responseType:'text'});
  }

}
