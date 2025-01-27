import { Routes } from '@angular/router';
import { ClientFormComponent } from './components/client-form/client-form.component';

// Lazy loading for optimized imports
export const routes: Routes = [
    { 
        path: 'client-form', 
        loadComponent: () => import('./components/client-form/client-form.component').then(m => m.ClientFormComponent)
    },
    { 
        path: 'validation', 
        loadComponent: () => import('./components/validation/validation.component').then(m => m.ValidationComponent)
    },
    { 
        path: 'submission-confirmation', 
        loadComponent: () => import('./components/submission-confirmation/submission-confirmation.component').then(m => m.SubmissionConfirmationComponent)
    },
    { path: '', redirectTo: '/client-form', pathMatch: 'full' }
];
