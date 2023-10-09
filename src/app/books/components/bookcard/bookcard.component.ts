import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'imam-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrls: ['./bookcard.component.scss']
})
export class BookcardComponent implements OnInit{
  @Input() books:BookModel[];
  constructor(){}
  ngOnInit(): void {
      
  }
}
