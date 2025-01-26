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
  confirmClientData() {
    // send data to backend
    
    this.http.post('http://localhost:4000/api/submit-form', this.formData).subscribe(
      (response) => {
        console.log('Data sent successfully', response);
        this.router.navigate(['/submission-confirmation']);
      },
      (error) => {
        console.error('Error sending data', error);
      }
    );
    
    this.router.navigate(['/submission-confirmation']);
  }
}