import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngFor
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-training-areas',
  standalone: true, // Make it standalone
  imports: [
    CommonModule,
    RouterModule
  ], // Add CommonModule to imports for ngFor and ngIf
  templateUrl: './training-areas.component.html',
  styleUrls: ['./training-areas.component.css']
})
export class TrainingAreasComponent {
  // Array of training areas
  trainingAreas = [
    {
      title: 'Advanced Technology',
      description: 'Stay ahead with cutting-edge technology courses designed for innovation.',
      icon: 'fa-solid fa-microchip'
    },
    {
      title: 'Cybersecurity',
      description: 'Learn to safeguard networks and secure systems with our comprehensive courses.',
      icon: 'fa-solid fa-shield-alt'
    },
    {
      title: 'Aerospace',
      description: 'Explore aerospace engineering and technology through expert-led sessions.',
      icon: 'fa-solid fa-plane'
    },
    {
      title: 'Machine Learning',
      description: 'Master machine learning techniques and AI with hands-on learning.',
      icon: 'fa-solid fa-robot'
    },
    {
      title: 'Web Development',
      description: 'Build modern web applications with expert guidance and real-world projects.',
      icon: 'fa-solid fa-code'
    }
  ];
}
