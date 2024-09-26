import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { HighlightPipe } from './highlight.pipe'; // Import the standalone pipe

@Component({
  selector: 'app-vacation-request',
  templateUrl: './vacation-request.component.html',
  styleUrls: ['./vacation-request.component.css'],
  standalone: true, // Mark this component as standalone
  imports: [CommonModule, FormsModule, HighlightPipe] // Add HighlightPipe to imports
})
export class VacationRequestComponent {
  searchTerm: string = '';
  selectAll: boolean = false;

  // Add any additional logic for the component


  vacationRequests = [
    {
      name: 'Ahmad Attar',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 AED',
      profileImage: 'https://w7.pngwing.com/pngs/130/766/png-transparent-techture-job-user-profile-linkedin-skill-akshay-kumar-miscellaneous-architect-linkedin.png'
    },
    {
      name: 'Eric Griffin',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 AED',
      profileImage: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png'
    },
    {
      name: 'Sean Hunt',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 AED',
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCWG18FMyS1pXtWKr4Eb7_XLr0lScrVylmpg&s'
    },
    {
      name: 'Joseph Taylor',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 AED',
      profileImage: 'https://w7.pngwing.com/pngs/130/766/png-transparent-techture-job-user-profile-linkedin-skill-akshay-kumar-miscellaneous-architect-linkedin.png'
    },
    {
      name: 'Robert Davis',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 AED',
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThglveVb0FzpzwUv_nCBMULJv9VU2lNAPHmdGhnSmYJ2vn46ofrJkIEuvpdchMXMX0Jns&usqp=CAU'
    },
    {
      name: 'Brian Allen',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 AED',
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwBG16g5gXPv-feovdsvCGdJYt8UxQmanAwWeeGIpy2Xd03gtq9rKfSZVMP98EtC10Jhs&usqp=CAU'
    },
    {
      name: 'William Johnson',
      submittedOn: '1/3/2024',
      duration: '2 Weeks (1/4/2023 - 14/4/2023)',
      salary: '1000 AED',
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndnWIx3w0gvAmvUhcAF8X5YFyg7VWOP1tEp_8FtCqDX_eGvr4uUUO25D_AvMNcseFhN0&usqp=CAU" alt="Profile Image" class="rounded-circle me-3'
    },
  ];

  // Filter function
  filterRequests() {
    return this.vacationRequests.filter(request =>
      request.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Handle "Select All" checkbox
  toggleSelectAll() {
    this.selectAll = !this.selectAll;
  }
}


