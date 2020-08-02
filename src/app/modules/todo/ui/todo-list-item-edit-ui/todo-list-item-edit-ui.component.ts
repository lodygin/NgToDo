import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../models/todo';

@Component({
  selector: 'app-todo-list-item-edit-ui',
  templateUrl: './todo-list-item-edit-ui.component.html',
  styleUrls: ['./todo-list-item-edit-ui.component.css']
})
export class TodoListItemEditUiComponent implements OnInit {

  name = '';

  @Input() todo: Todo;
  @Output() edit: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    this.name = this.todo.name;
  }

  onEdit(): void {
    if (this.name) {
      this.edit.emit(this.name);
    }
  }

  onCancel(): void {
    this.name = this.todo.name;
  }
}
