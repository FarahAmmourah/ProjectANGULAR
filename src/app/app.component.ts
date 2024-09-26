import { Component } from '@angular/core';
import { VacationRequestComponent } from './vacation-request.component'; // Ensure correct path

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Make AppComponent standalone
  imports: [VacationRequestComponent] // Import the standalone VacationRequestComponent here
})
export class AppComponent {
  title = 'request';
}
