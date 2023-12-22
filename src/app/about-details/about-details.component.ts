import { Component } from '@angular/core';

@Component({
  selector: 'app-about-details',
  templateUrl: './about-details.component.html',
  styleUrl: './about-details.component.css'
})
export class AboutDetailsComponent {
  aboutDetails: any = {
    mission: 'To provide quality education to learners worldwide.',
    vision: 'Empowering individuals through accessible and innovative learning solutions.',
    values: ['Excellence', 'Accessibility', 'Innovation', 'Community'],
  };
}