import { Component, inject, OnInit } from '@angular/core';
import {  MembersService } from './members-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.css',
})
export class MembersPage implements OnInit {
  


  save() {
    const newItem = Object.assign({}, this.item);
    this.membersService.add(this.item);
    this.dataRefrsh();
    this.state = 'list';

  }
  ngOnInit(): void {
    this.dataRefrsh();
  }
  data: membersItem[] = [];
  item: membersItem = {
     id: 0,
      name: '',
      family: '',
      code: 0,
      phone: 0,
  }
  membersService = inject(MembersService);
  state: string = 'list';
  dataRefrsh() {
    this.data = this.membersService.list();
  }
  add() {
    this.state = 'add';
    this.item = {
      id: 0,
      name: '',
      family: '',
      code: 0,
      phone: 0,
    };

  }
  cansel() {
    this.state = 'list';
  }
}
export interface membersItem {
  id: number;
  name: string;
  family: string;
  code: number;
  phone: number;
}