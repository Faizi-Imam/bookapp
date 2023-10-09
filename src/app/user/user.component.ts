import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'imam-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  userId:string='';

 constructor(private route: ActivatedRoute){}

 ngOnInit(): void {
     this.route.params.subscribe(param=>{
      this.userId=param['userId'];
     })
 }
}


