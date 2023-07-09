import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GetKeyFromNetlifyService {

  apiKey = null;

  async getKeyFromNetlify(){
    if (this.apiKey === null) {
      const data = await fetch(`${environment.netlifyRootURL}/.netlify/functions/accessAPIKey`);
      const key = await data.json();
      this.apiKey = key;
      console.log('geting api key');
      
    }
    return this.apiKey;
  }

  constructor() { }
}
