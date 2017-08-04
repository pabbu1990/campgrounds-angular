import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Campground} from "../campground.model";
import {isUndefined} from "util";
import {Router} from "@angular/router";

@Injectable()
export class ServerService {
  private campgrounds: Campground[] = [];
  campground: Campground;
  headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http, private router: Router) {}
  // storeServers(servers: any[]) {
  //   const headers = new Headers({'Content-Type': 'application/json'});
  //   // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
  //   //   servers,
  //   //   {headers: headers});
  //   return this.http.put('https://udemy-ng-http.firebaseio.com/data.json',
  //     servers,
  //     {headers: headers});
  // }
  getServers() {
    return this.http.get('https://serene-tundra-49862.herokuapp.com/campgrounds')
      .map(
        (response: Response) => {
          const me = response.json().campgrounds;
          let realCampgrounds: Campground[] = [];
          for (let campground of me) {
            realCampgrounds.push(new Campground(
              campground._id,
              campground.name,
              campground.image,
              campground.description)
            );
          }

            return realCampgrounds;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  addCamp(cam: any) {
    return this.http.post('https://serene-tundra-49862.herokuapp.com/campgrounds', JSON.stringify(cam), {headers: this.headers}).
    map((response: Response)=> {
      return response;
    })
  }

  submitEditCamp(cam: any, heada: any) {
    return this.http.put('https://serene-tundra-49862.herokuapp.com/campgrounds/'+heada, JSON.stringify(cam), {headers: this.headers}).
    map((response: Response)=> {
      return response;
    })
  }

  deleteCampground(campId: any) {
    return this.http.delete('https://serene-tundra-49862.herokuapp.com/campgrounds/'+campId).
    map((response: Response)=> {
      return response;
    })
  }

  editCamp(camp: any) {
  this.campground = camp;
  this.router.navigate(["new"]);

  }

  editCampResp() {
    setTimeout(()=>{this.campground = null, 4000})
    return this.campground;

  }



}
