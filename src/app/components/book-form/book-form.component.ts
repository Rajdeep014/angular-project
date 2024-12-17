import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}
@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
  imports: [CommonModule, FormsModule], // Corrected to styleUrls
})
export class BookFormComponent {
  isEditMode = false;
  book: Book = { id: 0, title: '', author: '', year: 0 };
  constructor() {
    // For edit mode simulation, set up dummy data
    const bookId = 1; // This should come from route parameters in a real scenario
    if (bookId) {
      this.isEditMode = true;
      this.book = {
        id: bookId,
        title: `Sample Book`,
        author: `Sample Author`,
        year: 2020,
      };
    }
  }
  onSubmit() {
    if (this.isEditMode) {
      console.log('Updated Book:', this.book);
    } else {
      console.log('Added New Book:', this.book);
    }
  }
}
