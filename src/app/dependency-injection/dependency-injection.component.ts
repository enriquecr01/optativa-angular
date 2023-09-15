import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.css']
})
export class DependencyInjectionComponent implements OnInit {

  users: any[] = []
  selectedUser: any;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(res => {
      this.users = res;
    })
  }

  getUser(id: number) {
    this.usersService.getUser(id).subscribe(res => {
      this.selectedUser = res;
    })
  }

}
