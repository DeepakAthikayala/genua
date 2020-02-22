import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Photos } from '../photos';
import { Albums } from '../albums';

@Component({
  selector: 'app-user-photos',
  templateUrl: './user-photos.component.html',
  styleUrls: ['./user-photos.component.css']
})
export class UserPhotosComponent implements OnInit {

  public photoAlbums: Array<Albums> = [];
  public userPhotos: Array<Photos> = [];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    let index = window.location.href.split("/");
    let id = Number(index[index.length-1]);
  	this.userService.getAlbums(id)
  	.subscribe(data => {
  		this.photoAlbums = data; 
  		this.photoAlbums.forEach(album => {
	  		this.userService.getPhotos(album.id)
	  		.subscribe(photos => {
	  			photos.forEach(photo => {
	  				this.userPhotos.push(photo);
	  			})
	  		})
	  	})
  	})
  }

  goBack(): void {
    window.history.back();
  }

}
