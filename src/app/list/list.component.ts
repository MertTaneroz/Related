import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {GetJsonService} from 'src/app/services/json-get.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  checked:boolean = false;
  numberEdit:number = 0;
  showEdit:boolean = false;
  sort:boolean = true;
  p:number = 1;

  todos:any = [];
  users:any = [];

  constructor(private JsonGetService: GetJsonService ) {
  }

  ngOnInit(): void {
    this.JsonGetService.getTodoData().subscribe(data => this.todos = data);
    this.JsonGetService.getUserData().subscribe(data => this.users = data);
  }


  sortStatusUp() {
    this.todos.sort(function(a:any,b:any) {
      return a.completed-b.completed
    })

    this.sort = false
  }

  sortStatusDown() {
    
    this.todos.sort(function(a:any,b:any) {
      return b.completed-a.completed
    })

    this.sort = true;
  }

  deleteTodo(id:any) {
    const newTodos = this.todos.filter((todo:any)=> todo.id != id);

    this.todos = newTodos;
    this.showEdit = false;
  }

  editTodo(todo:any) {
    this.numberEdit = todo.id;
    this.showEdit = true;
  }

  changeStatus(idNumber:number) {
    this.todos[idNumber-1].completed = this.checked

    console.log(this.checked)

    this.showEdit = false;
    this.checked = false;
  }

  eventCheck(e:any) {
    this.checked = e.target.checked
  }
}