import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Albums } from '../albums';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

	public albums: Array<Albums> = [];
  	
  constructor(private userService: UserService) { }

	ngOnInit() {
	 	let index = window.location.href.split("/");
    let id = Number(index[index.length-1]);
      this.userService.getAlbums(id)
    .subscribe(data => {
      this.albums = data;
    });
	}

	goBack(): void {
    window.history.back();
  }

}
