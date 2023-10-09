import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BooksComponent } from './books.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { HomeComponent } from '../public-components/home/home.component';
import { BooksRoutingModule } from './books-routing.module';
import { BookService } from './services/book.service';
import { SharedModule } from '../shared/shared.module';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { BookcardComponent } from './components/bookcard/bookcard.component';


@NgModule({
  declarations: [
    BooksComponent,
    AllBooksComponent,
    BookDetailsComponent,
    RecentBooksComponent,
    BookcardComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,SharedModule,
  ]
})
export class BooksModule { }
