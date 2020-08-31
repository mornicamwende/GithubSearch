import { Component, OnInit } from '@angular/core';
import { GitService } from '../services/git.service';
import{ User } from '../user';
import{ Repo } from '../repo';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent implements OnInit {


  user:User;
  repo:Repo;
  constructor(public gitService:GitService) { }

  getUser(gitName){
    this.gitService.getUser(gitName).then(
      (success)=>{
        this.user= this.gitService.user;
      },
      (error)=>{
        console.log(error);
      }
    )
    this.gitService.getRepo(gitName).then(
      (success)=>{
        this.repo= this.gitService.repo;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  ngOnInit(): void {
    this.getUser("mornicamwende")
  }

}
