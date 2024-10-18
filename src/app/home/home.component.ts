import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { TrainingAreasComponent } from "./training-areas/training-areas.component";
import { SiteFeaturesComponent } from "./site-features/site-features.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { WhyChooseUsComponent } from "./why-choose-us/why-choose-us.component";
import { SignUpCTAComponent } from "./sign-up-cta/sign-up-cta.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    TrainingAreasComponent,
    SiteFeaturesComponent,
    TestimonialsComponent,
    WhyChooseUsComponent,
    SignUpCTAComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
