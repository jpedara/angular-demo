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
  // {path:'home',component:HomeComponent},
  // {path:'authorization',component:AuthorizationComponent},
  // {path:'multipart',component:MultipartDemoComponent},
  // {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard],children:[
  //   {path:'',component:ProductsComponent},
  //   // {path:'',redirectTo:'/dashboard/template/fileops',pathMatch: 'full'},
  //   {path:'searchbyfolder',component:SearchbyfolderComponent},
  //   {path:'searchbymetadata',component:MetadataSearchComponent},
  //   {path:'imagegallery',component:ImagegalleryComponent},
  //   {path:'imagegallery',component:ImagegalleryComponent},
  //   {path:'sample',component:SampleComponent},
  //   {path:'filesview',component:FilesViewComponent},
  //   {path:'fileupload',component:FileUploadComponent},
  //   {path:'fileops',component:FileoperationsComponent},
  //   {path:':product/:prefix',component:ProductComponent}
  // ]}
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
