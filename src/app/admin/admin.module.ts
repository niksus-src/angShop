import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayotComponent } from './shared/admin-layot/admin-layot.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../shared/auth.service';

@NgModule({
  declarations: [
    AdminLayotComponent,
    LoginPageComponent,
    AddPageComponent,
    DashboardComponent,
    EditPageComponent,
    OrdersPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminLayotComponent,
        children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: LoginPageComponent },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'add', component: AddPageComponent },
          { path: 'orders', component: OrdersPageComponent },
          { path: 'product/:id/edit', component: EditPageComponent },
        ],
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [],
  providers: [AuthService],
})
export class AdminModule {}
