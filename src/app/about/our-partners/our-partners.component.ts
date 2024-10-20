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
      logo: 'assets/images/about/partner/logo.svg', // Example logo path
      website: 'https://techcorp.com'
    },
    {
      name: 'Innovate Labs',
      logo: 'assets/images/about/partner/logo.svg',
      website: 'https://innovatelabs.com'
    },
    {
      name: 'Future Solutions',
      logo: 'assets/images/about/partner/logo.svg',
      website: 'https://futuresolutions.com'
    },
    {
      name: 'AI Pioneers',
      logo: 'assets/images/about/partner/logo.svg',
      website: 'https://aipioneers.com'
    }
  ];
}
