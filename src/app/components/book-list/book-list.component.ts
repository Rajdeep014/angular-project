import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookService } from '../../services/book.service';

interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}

@Component({
  selector: 'app-book-list',
  standalone: true, // Declare as a standalone component
  imports: [RouterLink, CommonModule, HttpClientModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'], // Corrected `styleUrls`
})
export class BookListComponent implements OnInit {
  books: Book[] = []; // Use the `Book` interface for type safety

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    // Fetch books from the service
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }
}
