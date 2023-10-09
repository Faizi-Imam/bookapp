import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  "providedIn":"root"
})
export class BookService {

  constructor() { }

  public getBooks(): any[] {
    return [
      {
        "id":1,
        "title":"Angular Fundamentals",
        "totalPages":453,
        "author":"Ram Singh",
        "price":{
          "currency":"INR",
          "value":199
        }
      },
      {
        "id":2,
        "title":"C sharp Fundamentals",
        "totalPages":203,
        "author":"George",
        "price":{
          "currency":"USD",
          "value":60
        }
      },
      {
        "id":3,
        "title":"Dot net Fundamentals",
        "totalPages":563,
        "author":"XI habgu",
        "price":{
          "currency":"CXD",
          "value":256
        }
      },
      {
        "id":4,
        "title":"SQL Fundamentals",
        "totalPages":233,
        "author":"Abdul",
        "price":{
          "currency":"UDE",
          "value":178
        }
      },
      {
        "id":5,
        "title":"React Fundamentals",
        "totalPages":123,
        "author":"Anji",
        "price":{
          "currency":"JKL",
          "value":89
        }
      },
      {
        "id":4,
        "title":"SQL Fundamentals",
        "totalPages":233,
        "author":"Abdul",
        "price":{
          "currency":"UDE",
          "value":178
        }
      },
      {
        "id":5,
        "title":"React Fundamentals",
        "totalPages":123,
        "author":"Anji",
        "price":{
          "currency":"JKL",
          "value":89
        }
      },
      {
        "id":4,
        "title":"SQL Fundamentals",
        "totalPages":233,
        "author":"Abdul",
        "price":{
          "currency":"UDE",
          "value":178
        }
      },
      {
        "id":5,
        "title":"React Fundamentals",
        "totalPages":123,
        "author":"Anji",
        "price":{
          "currency":"JKL",
          "value":89
        }
      },
      {
        "id":4,
        "title":"SQL Fundamentals",
        "totalPages":233,
        "author":"Abdul",
        "price":{
          "currency":"UDE",
          "value":178
        }
      },
    ]

  }
  public recentBooks(): any[] {
    return [
      {
        "id":1,
        "title":"Angular Fundamentals",
        "totalPages":453,
        "author":"Ram Singh",
        "price":{
          "currency":"INR",
          "value":199
        }
      },
      {
        "id":2,
        "title":"C sharp Fundamentals",
        "totalPages":203,
        "author":"George",
        "price":{
          "currency":"USD",
          "value":60
        }
      },
      {
        "id":3,
        "title":"Dot net Fundamentals",
        "totalPages":563,
        "author":"XI habgu",
        "price":{
          "currency":"CXD",
          "value":256
        }
      },
      {
        "id":4,
        "title":"SQL Fundamentals",
        "totalPages":233,
        "author":"Abdul",
        "price":{
          "currency":"UDE",
          "value":178
        }
      },
      {
        "id":5,
        "title":"React Fundamentals",
        "totalPages":123,
        "author":"Anji",
        "price":{
          "currency":"JKL",
          "value":89
        }
      },
      
    ]
}
}
