import { Component } from '@angular/core';
import { DataService, Book } from '../data.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent {
  constructor(private dataService: DataService){}
  books:Book[] = []
  page = 1;
  pageSize = 4;
  
  getDisplayList(): Book[] {
    return this.books.slice(
      (this.page-1) * this.pageSize, this.page * this.pageSize
    )
  }

  ngOnInit(){
    this.dataService.getBooks().subscribe(bookList => {
      this.books = bookList
    })
  }

  deleteBook(book: Book){
    if(!window.confirm('Really want to delete?')) {
      return
    }
    this.dataService.deleteBook(book.isbn).subscribe({
      next: (_) => {
        // delete local copy
        this.books = this.books.filter(b => b.isbn !== book.isbn)
      },
      error: (err) => {
        alert(err)
      }
    })
  }


}
