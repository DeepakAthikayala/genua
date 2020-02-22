import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Photos } from '../photos';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

    public photos: Array<Photos> = [];
    
    constructor(private userService: UserService) { }

    ngOnInit() {
        let index = window.location.href.split("/");
        let id = Number(index[index.length-1]);
        this.userService.getPhotos(id)
        .subscribe(data => this.photos = data);
    }

    goBack(): void {
      window.history.back();
    }

}
