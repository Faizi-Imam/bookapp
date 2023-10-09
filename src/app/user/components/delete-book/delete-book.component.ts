import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'imam-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {

  userId:string='Faizi';

constructor(private route: ActivatedRoute){}
ngOnInit(): void {
    this.route.parent?.params.subscribe((param)=>{
      
      
    })
}
}



