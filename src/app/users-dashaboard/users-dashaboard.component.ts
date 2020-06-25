import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-dashaboard',
  templateUrl: './users-dashaboard.component.html',
  styleUrls: ['./users-dashaboard.component.scss']
})
export class UsersDashaboardComponent implements OnInit, AfterViewInit {
  public posts$;
  public usersPosts$;
  public isOpen = false;
  constructor(private usersService: UsersService) {

  }

  ngOnInit() {
    this.usersPosts$ = this.usersService.posts$;
  }

  ngAfterViewInit() {


  }

}
