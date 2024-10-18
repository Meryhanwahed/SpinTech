import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

declare var $: any; // To allow the use of jQuery

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'] // Fixed typo from styleUrl to styleUrls
})
export class HeroComponent implements AfterViewInit {
  title: string = 'Ignite Your Potential in Technology';
  subtitle: string = 'Where Ambition Meets Innovation';
  buttonText: string = 'Join Our Community';
  imageUrl: string = 'assets/images/homePage/hero-img.png'; // Update path as needed

  // Optional: If you want to perform any jQuery actions after the view initializes
  ngAfterViewInit() {
    // Example of using jQuery to animate the hero content
    $('.hero-content').hide().fadeIn(1000);
  }
}
