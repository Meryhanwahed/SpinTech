import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: string; // Path or URL to the icon image
}

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule 

  ],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css']
})
export class WhyChooseUsComponent {
  whyChooseUsItems: WhyChooseUsItem[] = [
    {
      title: 'Expert Coaches',
      description: 'Our coaches are industry experts with years of experience, ready to guide you.',
      icon: 'assets/icons/expert-coaches.svg' // Example icon path
    },
    {
      title: 'Customized Learning Plans',
      description: 'We tailor learning plans to meet your unique needs and goals.',
      icon: 'assets/icons/customized-learning.svg' // Example icon path
    },
    {
      title: 'Supportive Community',
      description: 'Join a community of like-minded individuals for networking and support.',
      icon: 'assets/icons/supportive-community.svg' // Example icon path
    },
    {
      title: 'Flexible Scheduling',
      description: 'Choose session times that fit your busy schedule.',
      icon: 'assets/icons/flexible-scheduling.svg' // Example icon path
    }
  ];
}
