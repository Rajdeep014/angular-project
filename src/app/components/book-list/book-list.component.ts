import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}

@Component({
  selector: 'app-book-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  books: Book[] = [
    { id: 1, title: 'Angular for Beginners', author: 'John Doe', year: 2020 },
    { id: 2, title: 'Mastering Angular', author: 'Jane Smith', year: 2021 },
    { id: 3, title: 'Advanced Angular', author: 'Chris Lee', year: 2022 },
  ];
}
