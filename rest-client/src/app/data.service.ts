import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap, retryWhen, delay, scan } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  bookCache: {[isbn: string]: Book} = {}

  constructor(private http: HttpClient) { }


  getBooks() : Observable<Book[]> {
    return this.http.get<Book[]>("/books")
  }

  getBook(isbn: string): Observable<Book>{
    let cachedBook = this.bookCache[isbn]

    if(cachedBook !== undefined){
      console.log("Cachehit!")
      return of(cachedBook)
    }

    return this.http.get<Book>(`/books/${isbn}`).pipe(
      tap(book => this.bookCache[isbn] = book),
      catchError(err => cachedBook ? of (cachedBook) : throwError(err))
    )
  }

  deleteBook(isbn: string): Observable<any>{
    return this.http.delete(`/books/${isbn}`).pipe(
      tap(() => delete this.bookCache[isbn]),
      catchError((err:HttpErrorResponse) => {
        if (err.status == 0) {
          return throwError("oops, connection issues")
        } else {
          return throwError("problems at the serverrr")
        }
      })
    )
  }

  saveBook(book : Book): Observable<any>{
    return this.http.put(`books/${book.isbn}`, book).pipe(
      tap(() => this.bookCache[book.isbn] = book)
    )
  }

}

export class Book {
  isbn!: string
  title!: string
  price!: number
}


