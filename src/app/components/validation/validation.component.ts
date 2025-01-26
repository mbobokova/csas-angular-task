import { Component } from '@angular/core';
import { NgIf } from "@angular/common";
import { RouterLink, Router  } from '@angular/router';



@Component({
  selector: 'app-view-page',
  standalone: true,
  imports: [ NgIf, RouterLink],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent {
  formData: any;

  constructor(private router: Router) {}

  // Get data from browser storage
  ngOnInit() {
    const data = localStorage.getItem('formData');
    if (data) {
      this.formData = JSON.parse(data)
    }
  }
  confirmClientData() {
    // send data to backend
    this.router.navigate(['/submission-confirmation']);
  }
}