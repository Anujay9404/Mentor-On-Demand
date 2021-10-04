import { Component, OnInit } from '@angular/core';
import { MentorService } from '../_services/mentor.service';

@Component({
  selector: 'app-add-mentor',
  templateUrl: './add-mentor.component.html',
  styleUrls: ['./add-mentor.component.css']
})

export class AddMentorComponent implements OnInit {

  showMessage: boolean = false;
  constructor(private mentorService: MentorService) { }

  addMentor(name:string,course:string, descp: string, rating: string,fees:string){
    
    this.mentorService.addMentor({name,course,descp,rating,fees})
    .subscribe((res: any) => {
      console.log(res);
      this.showMessage = true;
    });
  
  }
    ngOnInit(): void {
  }

}


