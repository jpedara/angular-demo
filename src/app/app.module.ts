import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { QuestionComponent } from './question/question.component';
import { AuthGuardService } from './auth-guard.service';


const routes=[
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:'search',component:SearchComponent,canActivate:[AuthGuardService]},
  {path:'question',component:QuestionComponent,canActivate:[AuthGuardService]},
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
