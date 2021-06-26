import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  id:any;
  questionData:any;
  options:any;
  result:any;
  showresults=false;
  constructor(private route:ActivatedRoute,private http:HttpClient,private common:CommonService) { } 

  async ngOnInit() {
    this.route.queryParamMap.subscribe(params=>{
      this.id=params.get("id");
    });
    await this.http.get("assets/questionaries.json").toPromise().then(
      (data)=>{
        console.log(data);
        this.questionData = data;
      }
    )
    this.questionData.forEach((element: { [x: string]: any; }) => {
      if(element["id"]==this.id){
        this.result =element;
      }
    });

    console.log(this.result);
  }
  logout(){
    console.log("logout called")
    this.common.logout();
  }

}
