import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {TodoState} from '../../store/todo/todo.reducer';
import {TodoCreateAction, TodoDeleteAction, TodoEditAction, TodoToggleAction} from '../../store/todo/todo.actions';
import {Todo} from '../../models/todo';
import {todoListSelector} from '../../store/todo/todo.selectors';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.css']
})
export class TodoWidgetComponent implements OnInit {
  todoList: Todo[] = [];
  todoList$: Observable<Todo[]> = this.store$.pipe(
    select(todoListSelector)
  );

  constructor(
    private store$: Store<TodoState>
  ) {
  }

  ngOnInit(): void {
  }

  onCreate(name: string): void {
    this.store$.dispatch(new TodoCreateAction({name}));
  }

  onDelete(id: number): void {
    this.store$.dispatch(new TodoDeleteAction({id}));
  }

  onToggle(id: number): void {
    this.store$.dispatch(new TodoToggleAction({id}));
  }

  onEdit({id, name}: {id: number; name: string}): void {
    this.store$.dispatch(new TodoEditAction({id, name}));
  }
}
