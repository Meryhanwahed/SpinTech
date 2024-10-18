import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  feedback: string;
  image: string; // URL or path to the user's image
  position: string; // Position or title of the person giving the testimonial
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'John Doe',
      feedback: 'The coaching experience was incredible! I gained the skills and confidence I needed to succeed.',
      image: 'assets/images/john-doe.jpg', // Example image path
      position: 'Software Engineer'
    },
    {
      name: 'Jane Smith',
      feedback: 'I learned so much in such a short time. The guidance provided was invaluable!',
      image: 'assets/images/jane-smith.jpg', // Example image path
      position: 'Project Manager'
    },
    {
      name: 'Jane Smith',
      feedback: 'I learned so much in such a short time. The guidance provided was invaluable!',
      image: 'assets/images/jane-smith.jpg', // Example image path
      position: 'Project Manager'
    },
    {
      name: 'Robert Brown',
      feedback: 'This platform changed my career! The experts are so knowledgeable and supportive.',
      image: 'assets/images/robert-brown.jpg', // Example image path
      position: 'Data Analyst'
    },
    {
      name: 'Emily Davis',
      feedback: 'I had a fantastic experience. I highly recommend this to anyone looking to advance their career.',
      image: 'assets/images/emily-davis.jpg', // Example image path
      position: 'UX Designer'
    }
    // Add more testimonials if needed
  ];
}
