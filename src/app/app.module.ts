import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
// Remove this line, don't import HighlightPipe here
// import { HighlightPipe } from './highlight.pipe';

@NgModule({
  declarations: [
    // AppComponent, // (If using standalone, remove from here too)
    // VacationRequestComponent, // Don't declare standalone components here
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  // bootstrap: [AppComponent] // If using standalone, remove this as well
})
export class AppModule { }
