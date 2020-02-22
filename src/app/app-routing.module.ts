import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PhotosComponent } from './photos/photos.component';
import { AlbumsComponent } from './albums/albums.component';
import { UserPhotosComponent } from './user-photos/user-photos.component';



const routes: Routes = [
	{ path: '', redirectTo: '/users', pathMatch: 'full' },
	{path: 'users', component: UsersComponent},
	{path: 'albums/userId/:id', component: AlbumsComponent},
	{path: 'photos/albumId/:id', component: PhotosComponent},
	{path: 'photos/userId/:id', component: UserPhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [UsersComponent, PhotosComponent, AlbumsComponent, UserPhotosComponent];


