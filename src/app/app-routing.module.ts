// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './theme/layouts/admin-layout/admin-layout.component';
import { GuestComponent } from './theme/layouts/guest/guest.component';
import { DefaultComponent } from './demo/default/dashboard/dashboard.component';
import LoginComponent from './demo/authentication/login/login.component';
import RegisterComponent from './demo/authentication/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [

  {
    path: '',
    component:LoginComponent
  },

  {
    path: 'login',
    component:LoginComponent
  },

  {
    path: 'register',
    component:RegisterComponent
  },

  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard/default',
        pathMatch: 'full'
      },
        
      { 
        path:'admin-dashboard', component:DefaultComponent
      },
      
       {
        path:'add-product', component:AddProductComponent
       },

       {
        path:'list-product', component:ProductListComponent
       },


      // {
      //   path: 'dashboard/default',
      //   loadComponent: () => import('./demo/default/dashboard/dashboard.component').then((c) => c.DefaultComponent)
      // },
      // {
      //   path: 'typography',
      //   loadComponent: () => import('./demo/ui-component/typography/typography.component')
      // },
      // {
      //   path: 'color',
      //   loadComponent: () => import('./demo/ui-component/ui-color/ui-color.component')
      // },
      // {
      //   path: 'sample-page',
      //   loadComponent: () => import('./demo/other/sample-page/sample-page.component')
      // }
    ]
  },
  // {
  //   path: '',
  //   component: GuestComponent,
  //   children: [
  //     {
  //       path: 'login',
  //       loadComponent: () => import('./demo/authentication/login/login.component')
  //     },
  //     {
  //       path: 'register',
  //       loadComponent: () => import('./demo/authentication/register/register.component')
  //     }
  //   ]
  // }

  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
