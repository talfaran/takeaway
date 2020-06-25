import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
@Input() title: string;
@Input() body: string;
@Input() windowOpen: boolean;
  constructor() { }

  ngOnInit() {
  }

}
