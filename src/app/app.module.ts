// Settings
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { ListSitesComponent } from './views/sites/list/list-sites.component';
import { ViewSitesComponent } from './views/sites/view-sites/view-sites.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ListSitesComponent,
    ViewSitesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
