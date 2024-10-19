import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule for NgFor

interface Coach {
  name: string;
  expertise: string;
  image: string; // URL or path to the coach's image
}

@Component({
  selector: 'app-expert-coaches',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './expert-coaches.component.html',
  styleUrl: './expert-coaches.component.css'
})

export class ExpertCoachesComponent {
  coaches: Coach[] = [
    {
      name: 'John Doe',
      expertise: 'Advanced Technology',
      image: 'assets/images/john-doe.jpg' // Example image path
    },
    {
      name: 'Jane Smith',
      expertise: 'Cybersecurity',
      image: 'assets/images/jane-smith.jpg'
    },
    {
      name: 'Robert Brown',
      expertise: 'Machine Learning',
      image: 'assets/images/robert-brown.jpg'
    },
    {
      name: 'Emily Davis',
      expertise: 'Web Development',
      image: 'assets/images/emily-davis.jpg'
    }
  ];
}
