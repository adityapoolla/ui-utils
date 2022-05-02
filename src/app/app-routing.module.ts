import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentCompareComponent } from './components/document-compare/document-compare.component';
import { ResponsivePageComponent } from './components/responsive-page/responsive-page.component';
import { CssComponentsComponent } from './components/css-components/css-components.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
