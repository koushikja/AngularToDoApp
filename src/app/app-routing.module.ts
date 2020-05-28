import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AlarmComponent } from './alarm/alarm.component';

const routes: Routes = [
  {path:'atlasToDo',component:ToDoListComponent},
  {path:'alarm',component:AlarmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
