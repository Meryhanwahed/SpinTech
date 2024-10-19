import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule for NgFor

interface Partner {
  name: string;
  logo: string; // Path to the partner's logo image
  website: string; // Partner's website URL
}

@Component({
  selector: 'app-our-partners',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './our-partners.component.html',
  styleUrl: './our-partners.component.css'
})
export class OurPartnersComponent {
  partners: Partner[] = [
    {
      name: 'Tech Corp',
      logo: 'assets/logos/tech-corp-logo.png', // Example logo path
      website: 'https://techcorp.com'
    },
    {
      name: 'Innovate Labs',
      logo: 'assets/logos/innovate-labs-logo.png',
      website: 'https://innovatelabs.com'
    },
    {
      name: 'Future Solutions',
      logo: 'assets/logos/future-solutions-logo.png',
      website: 'https://futuresolutions.com'
    },
    {
      name: 'AI Pioneers',
      logo: 'assets/logos/ai-pioneers-logo.png',
      website: 'https://aipioneers.com'
    }
  ];
}
