import { Injectable } from '@angular/core';
import { membersItem } from './members-page';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private data: membersItem[] = [
      { id: 1, name: 'مهسا ', family: 'احمدی', code: 3859621475, phone: 935864215, },
      { id: 2, name: 'علی ', family: 'موسوی  ', code: 38965421056, phone:986253147 },
      { id: 3, name: 'مریم ', family: 'حسینی ', code: 38965420169, phone:9183081838},
      { id: 4, name: 'سیما', family: 'مهرابی ', code: 39520678942, phone:9021674339 },
      { id: 5, name: 'زهرا ', family: ' ملکی', code: 398562145628, phone:9123046985 }  
    ];
    list() {
      return [...this.data];
    }
    add(item: membersItem) {
      this.data.push(item);
    }
  
}
