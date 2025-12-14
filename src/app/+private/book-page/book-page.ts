import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-page',
  imports: [FormsModule],
  templateUrl: './book-page.html',
  styleUrl: './book-page.css',
})
export class BookPage implements OnInit {


  save() {
    const newItem = Object.assign({}, this.item);
    this.booksService.add(this.item);
    this.dataRefrsh();
    this.state = 'list';

  }
  ngOnInit(): void {
    this.dataRefrsh();
  }
  data: BookItem[] = [];
  item: BookItem = {
    id: 0,
    title: '',
    writer: '',
    publisher: '',
    price: 0,
    img: '',
  }
  booksService = inject(BooksService);
  state: string = 'list';
  dataRefrsh() {
    this.data = this.booksService.list();
  }
  add() {
    this.state = 'add';
    this.item = {
      id: 0,
      title: '',
      writer: '',
      publisher: '',
      price: 0,
      img: '',
    };

  }
  cansel() {
    this.state = 'list';
  }
}
export interface BookItem {
  id: number;
  title: string;
  writer: string;
  publisher: string;
  price: number;
  img: string;

}