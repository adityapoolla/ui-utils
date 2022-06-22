import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentCompareComponent } from './components/document-compare/document-compare.component';
import { ResponsivePageComponent } from './components/responsive-page/responsive-page.component';
import { CssComponentsComponent } from './components/css-components/css-components.component';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './blogs/blogs/blogs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'document-compare',
    component: DocumentCompareComponent
  },
  {
    path: 'responsive-page',
    component: ResponsivePageComponent
  },
  {
    path: 'ui-components',
    component: CssComponentsComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
