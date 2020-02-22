import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { PhotosComponent } from './photos/photos.component';
import { AlbumsComponent } from './albums/albums.component';
import { UserPhotosComponent } from './user-photos/user-photos.component';

@NgModule({
  declarations: [
    AppComponent, UsersComponent, PhotosComponent, AlbumsComponent, UserPhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
 
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
