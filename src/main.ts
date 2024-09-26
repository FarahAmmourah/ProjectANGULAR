import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Ensure correct path
import { VacationRequestComponent } from './app/vacation-request.component';

bootstrapApplication(AppComponent) .catch(err => console.error(err));


