import { Component, OnInit, OnDestroy  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { CacheService } from './../../services/cache.service'

@Component({
  selector: 'app-client-form',
  standalone: true,  
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent {
  form: FormGroup;

  constructor(
    private fb:FormBuilder,
    private router: Router,
    // private cacheService: CacheService, // Inject CacheService
  ) {
    this.form = this.fb.group({
      companyName: ['', Validators.required],
      companyAdress: ['', Validators.required],
      companyEmail: ['', [Validators.required, Validators.email] ],
      companyTel: ['', [Validators.required, Validators.minLength(9)]],
      companyIco: ['', Validators.required],      
    })
  }

  ngOnInit() {
    // Load data from localStorage on init
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      this.form.patchValue(JSON.parse(savedData));
    }

    // Refresh localStorage if values change
    this.form.valueChanges.subscribe(value => {
      localStorage.setItem('formData', JSON.stringify(value));
    });
  }

  send() {
    if (this.form.valid) {
         this.router.navigate(['/validation']);      
    }
  }

  ngOnDestroy() {
    console.log('Component is being destroyed');
  }
}