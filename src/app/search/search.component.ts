import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search="";
  questionData:any;
  contents:any=[];
  constructor(private http:HttpClient,private route:Router,private common:CommonService) { }

  async ngOnInit() {
    await this.http.get("assets/questionaries.json").toPromise().then(
      (data)=>{
        console.log(data);
        this.questionData = data;
      }
    )
  }
  showresults(){
    console.log("Entered")
    
   this.contents = this.questionData.filter((res: { [x: string]: any; })=>{
     return res.questionText.toLocaleLowerCase().match(this.search.toLocaleLowerCase())
   })
   console.log(this.contents);
  }

  navigateItem(i:number){
    console.log(this.contents[i]["id"]);
    this.route.navigate(['/question'],{queryParams:{id:this.contents[i]["id"]}});
  }
  logout(){
    this.common.logout();
  }
}
