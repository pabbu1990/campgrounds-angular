import {Component, OnInit} from '@angular/core';
import {ServerService} from "./campgrounds/server.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
begin: boolean;


  ngOnInit() {
    this.begin = false;
}

  onBegin()
  {
    this.begin=true;
  }
}
