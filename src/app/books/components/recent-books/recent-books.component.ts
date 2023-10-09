import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'imam-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.scss']
})
export class RecentBooksComponent implements OnInit{


  private _pageTitle:string;

  public set pageTitle(value:string){
    this._pageTitle=value;
  }

  public get pageTitle(){
    return this._pageTitle;
  }
  public recentbooks:BookModel[];
  constructor(private _bookservice:BookService){}

  ngOnInit(): void {
    this.pageTitle='Recent Books';
    this.getRecentBooks();
      
  }
  private getRecentBooks():void{
    this.recentbooks=this._bookservice.recentBooks();
  }
}
