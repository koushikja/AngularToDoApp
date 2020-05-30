import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface toDoTask{
  taskDesc:string;
  taskStatus:boolean;
  uniqueTaskId:number
}
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
showPlaceholder:string = "type task description here";
taskToAdd:string = '';
toDoTasksList:toDoTask[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addListToDo(taskToAdd){
    this.toDoTasksList.push({taskDesc:taskToAdd, taskStatus:false, uniqueTaskId:Math.floor(Math.random()*100)})
   
  }

  removeFromTasksList(taskIdToBeRemoved:number){
    this.toDoTasksList.splice(this.toDoTasksList.findIndex(tasks => tasks.uniqueTaskId == taskIdToBeRemoved),1);
  }
  changeroute(){
    this.router.navigate(['alarm'])
  }
}
