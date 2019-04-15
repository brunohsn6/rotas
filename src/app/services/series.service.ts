import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base/base.service';
import { Observable } from 'rxjs';

@Injectable()
export class SeriesService extends BaseService{
  private series : any[] = [];
  constructor(httpClient : HttpClient) { 
    super(httpClient);
  }

  getDiscover() {
    //return this._httpClient.get(`${this.URL}discover/tv?api_key=${this.API_KEY}&language=pt-BR`)
  }

  getById(id: string) {
    //return this._httpClient.get(`${this.URL}tv/${id}?api_key=${this.API_KEY}&language=pt-BR`)
  }
  search(texto : string){
    //return this._httpClient.get(`${this.URL}search/tv?api_key=${this.API_KEY}&language=pt-BR&query=${texto}`);
    
  }

}
