import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from 'src/assets/config';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private url ='./assets/config.json'
  constructor( private httpclient:HttpClient ) { }


}
