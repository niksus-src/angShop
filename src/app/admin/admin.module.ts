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
import { AuthGuard } from '../shared/auth.guard';
import { QuillModule } from 'ngx-quill';
import { ProductService } from '../shared/product.service';
import { AppModule } from "../app.module";
import { SearchPipe } from "../shared/search.pipe";

@NgModule({
  declarations: [
    AdminLayotComponent,
    LoginPageComponent,
    AddPageComponent,
    DashboardComponent,
    EditPageComponent,
    OrdersPageComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: AdminLayotComponent,
        children: [
          { path: "", redirectTo: "/admin/login", pathMatch: "full" },
          { path: "login", component: LoginPageComponent },
          {
            path: "dashboard",
            component: DashboardComponent,
            canActivate: [AuthGuard]
          },
          {
            path: "add",
            component: AddPageComponent,
            canActivate: [AuthGuard]
          },
          {
            path: "orders",
            component: OrdersPageComponent,
            canActivate: [AuthGuard]
          },
          {
            path: "product/:id/edit",
            component: EditPageComponent,
            canActivate: [AuthGuard]
          }
        ]
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule.forRoot(),
  ],
  providers: [AuthService, AuthGuard, ProductService],
  exports: [RouterModule]
})
export class AdminModule {}
