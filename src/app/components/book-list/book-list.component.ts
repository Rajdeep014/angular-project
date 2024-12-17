import { CommonModule } from '@angular/common';
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
  imports: [RouterLink, CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'], // Corrected `styleUrls`
})
export class BookListComponent implements OnInit {
  books: Book[] = []; // Use the `Book` interface for type safety

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    // Fetch books from the service
    this.bookService.getBooks().subscribe({
      next: (data) => {
        this.books = data; // Store the fetched data into the 'books' array
        console.log('Books fetched successfully:', data);
      },
      error: (err) => {
        console.error('Error fetching books:', err);
      },
    });
  }
}
