import { Injectable } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';
import{ HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class GitService {
  user:User;
  repo:Repo;

  constructor(private http:HttpClient) { 
    this.user =new User("","","","","","","","",new Date());
    this.repo = new Repo("","","","");
  }

  getUser(gitName:string){
    interface ApiResponse{
      public_repos:string,
      login:string,
      html_url:string,
      name:string,
      avatar_url: string,
      followers:string,
      following:string,
      repos_url:string,
      created_at:Date,
    }
    let promise = new Promise((resolve, reject) => {
      let apiURL = 'https://api.github.com/users/' + gitName + '?access_token=' + environment.apikey;
      this.http.get<ApiResponse>(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.user = res;
            resolve();
          },
          (error) =>{
            reject();
          }
        );
    });
    return promise;
  }
  getRepo(gitName:string){
    interface ApiResponse{
      html_url:string,
      name:string,
      repos_url:string,
      description:string,
    }
    let promise = new Promise((resolve, reject) => {
      let apiURL = 'https://api.github.com/users/' + gitName + '/repos?access_token=' + environment.apikey;
      this.http.get<ApiResponse>(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.repo = res;
            resolve();
          },
          (error)=>{
            reject();
          }
        );
    });
    return promise;
  }
}
