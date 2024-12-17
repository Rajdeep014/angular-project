import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-details',
    imports: [CommonModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css',
})
export class BookDetailsComponent {
  book: any;

  constructor(private route: ActivatedRoute) {
    // Simulating book data retrieval (you can later fetch real data from a backend)
    const bookId = this.route.snapshot.paramMap.get('id');

    if (bookId) {
      this.book = {
        id: bookId,
        title: 'Sample Book Title',
        author: 'Sample Author',
        year: 2020,
        description:
          'This is a detailed description of the book. It covers all the important topics.',
      };
    }
  }
}
