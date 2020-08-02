import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../models/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();
  @Output() edit: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.delete.emit();
  }

  onToggle(event: MouseEvent): void {
    event.preventDefault();
    this.toggle.emit();
  }

  onEdit(): void {
    this.edit.emit();
  }
}
