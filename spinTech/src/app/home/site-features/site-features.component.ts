import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-site-features',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './site-features.component.html',
  styleUrls: ['./site-features.component.css']
})
export class SiteFeaturesComponent {
  features = [
    {
      title: 'Expert Coaches',
      description: 'Our industry-leading experts provide personal guidance to help you succeed.',
      icon: 'fa-solid fa-chalkboard-teacher',
      image: 'assets\images\homePage\Expert-Coaches.jpg' // example image URL
    },
    {
      title: 'Project-Based Learning',
      description: 'Experience real-world scenarios with hands-on projects tailored to your needs.',
      icon: 'fa-solid fa-project-diagram',
      image: 'assets/images/project-learning.jpg' // example image URL
    },
    {
      title: 'Flexible Schedule',
      description: 'Set your own schedule and learn at your own pace with our flexible sessions.',
      icon: 'fa-solid fa-clock',
      image: 'assets/images/flexible-schedule.jpg' // example image URL
    },
    {
      title: 'Career Services',
      description: 'Receive career advice, interview preparation, and job placement assistance.',
      icon: 'fa-solid fa-briefcase',
      image: 'assets/images/career-services.jpg' // example image URL
    },
    {
      title: 'Global Community',
      description: 'Join a global community of learners, networking with professionals worldwide.',
      icon: 'fa-solid fa-users',
      image: 'assets/images/global-community.jpg' // example image URL
    }
  ];
}
