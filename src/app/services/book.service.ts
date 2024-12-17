// src/app/services/book.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:8080/api/v1/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getBookById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addBook(book: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, book).pipe(
      catchError(this.handleError)
    );
  }

  updateBook(id: number, book: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, book).pipe(
      catchError(this.handleError)
    );
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error('Error Occurred: ' + error.message));
  }
}
