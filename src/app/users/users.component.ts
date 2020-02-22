import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  public users: Array<User> = [];
	
  constructor(private userService: UserService) { }

  ngOnInit() {
  	this.userService.getUsers().subscribe(data =>{
        this.users = data;
    });
  }

}
