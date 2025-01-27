import { Component } from '@angular/core';
import { NgIf } from "@angular/common";
import { RouterLink, Router  } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-view-page',
  standalone: true,
  imports: [ NgIf, RouterLink, HttpClientModule],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent {
  formData: any;

  constructor(private router: Router, private http: HttpClient) {}

  // Get data from browser storage
  ngOnInit() {
    const data = localStorage.getItem('formData');
    if (data) {
      this.formData = JSON.parse(data)
    }
  }
  // Confirm and send data to backend
  async confirmClientData() {
    try {
      const response = await this.http.post('http://localhost:4000/api/submit-form', this.formData).toPromise();
      console.log('Data sent successfully', response);
      // Navigate to confirmation page after successful submission
      this.router.navigate(['/submission-confirmation']);
    } catch (error) {
      console.error('Error sending data', error);
      // Handle error, e.g., show a notification to the user
    }
  }
}