import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserHttpComponent } from './user-http/user-http.component';
import { UserServiceComponent } from './user-service/user-service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RepoSearchComponent,
    UserFormComponent,
    UserHttpComponent,
    UserServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
