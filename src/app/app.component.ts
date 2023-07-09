import { Component,Inject, inject } from '@angular/core';
import { GetKeyFromNetlifyService } from './get-key-from-netlify/get-key-from-netlify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  netlifyKeyService = inject(GetKeyFromNetlifyService)
  title = 'in-the-pantry';

  async getAPIKey(){
    const key = await this.netlifyKeyService.getKeyFromNetlify()
    console.log(key);
  }
}
