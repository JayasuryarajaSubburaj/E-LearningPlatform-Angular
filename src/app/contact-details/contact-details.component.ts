import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent {
  contactDetails: any = {
    organizationName: 'E-Learning Platform',
    email: 'info@elearningplatform.com',
    phone: '+1 123-456-7890',
    address: '123 Main Street, Cityville, Country',
    socialMedia: {
      facebook: 'https://www.facebook.com/elearningplatform',
      twitter: 'https://twitter.com/elearningplatform',
      linkedin: 'https://www.linkedin.com/company/elearningplatform',
    }
  };
}
