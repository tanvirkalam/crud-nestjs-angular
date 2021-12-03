import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = 'Test';
  description: string = "Test Description";
  title = 'frontend';
  constructor(private appService: AppService) { }
  async onSubmit() {
    try {
      const response = await this.appService.saveItem({ name: this.name, description: this.description });
      console.log(response);
    } catch (error) {
      console.log(error);
    }

  }
}
