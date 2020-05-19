import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { GetComponent } from './get/get.component';
import { PutComponent } from './put/put.component';
import { PostComponent } from './post/post.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { GetFileAndFolderComponent } from './get-file-and-folder/get-file-and-folder.component';
import {MatTableModule} from '@angular/material/table';
import { CreateFileFolderComponent } from './create-file-folder/create-file-folder.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ChangePermissionComponent } from './change-permission/change-permission.component';
import { GetUserComponent } from './get-user/get-user.component';
import { MappingComponent } from './mapping/mapping.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GetComponent,
    PutComponent,
    PostComponent,
    DeleteComponent,
    UpdateComponent,
    GetFileAndFolderComponent,
    CreateFileFolderComponent,
    LoginPageComponent,
    ChangePermissionComponent,
    GetUserComponent,
    MappingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatChipsModule,
    MatTableModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
