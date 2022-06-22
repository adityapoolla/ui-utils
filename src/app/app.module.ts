import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentCompareComponent } from './components/document-compare/document-compare.component';
import { ResponsivePageComponent } from './components/responsive-page/responsive-page.component';
import { ResultBoxComponent } from './components/document-compare/result-box/result-box.component';
import { CssComponentsComponent } from './components/css-components/css-components.component';
import { LoadersComponent } from './components/css-components/loaders/loaders.component';
import { SpinnerComponent } from './components/css-components/loaders/spinner/spinner.component';
import { BlogsComponent } from './blogs/blogs/blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentCompareComponent,
    ResponsivePageComponent,
    ResultBoxComponent,
    CssComponentsComponent,
    LoadersComponent,
    SpinnerComponent,
    BlogsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
