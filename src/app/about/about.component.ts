import { Component } from '@angular/core';
import { OurMissionComponent } from "./our-mission/our-mission.component";
import { ExpertCoachesComponent } from "./expert-coaches/expert-coaches.component";
import { OurPartnersComponent } from "./our-partners/our-partners.component";
import { AboutUsComponent } from "./about-us/about-us.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [OurMissionComponent, ExpertCoachesComponent, OurPartnersComponent, AboutUsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
