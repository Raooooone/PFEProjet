import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserManagermentComponent } from '../user-managerment/user-managerment.component';
import { ProductmanagementComponent } from '../productmanagement/productmanagement.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-accueil',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    UserManagermentComponent,
    ProductmanagementComponent
  ],
  templateUrl: './admin-accueil.component.html',
  styleUrls: ['./admin-accueil.component.css']
})
export class AdminAcceuilComponent {
  isUserManagement: boolean = true;
  isProductManagement: boolean = false;

  // Injection du router via le constructeur
  constructor(private router: Router) { }

  showUserManagement(): void {
    this.isUserManagement = true;
    this.isProductManagement = false;
  }

  showProductManagement(): void {
    this.isProductManagement = true;
    this.isUserManagement = false;
   
  }
}