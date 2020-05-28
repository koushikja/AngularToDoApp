import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

    todoroute(){
      this.router.navigate(['atlasToDo'])
    }
}
