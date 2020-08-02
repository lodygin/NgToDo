import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {TODO_REDUCER_NODE, todoReducer} from './store/todo/todo.reducer';
import {TodoPageComponent} from './page/todo-page/todo-page.component';
import {RouterModule} from '@angular/router';
import {TodoWidgetComponent} from './widget/todo-widget/todo-widget.component';
import {TodoCreateFormUiComponent} from './ui/todo-create-form-ui/todo-create-form-ui.component';
import {FormsModule} from '@angular/forms';
import {TodoListUiComponent} from './ui/todo-list-ui/todo-list-ui.component';
import {TodoListItemComponent} from './ui/todo-list-item/todo-list-item.component';
import {TodoListItemEditUiComponent} from './ui/todo-list-item-edit-ui/todo-list-item-edit-ui.component';


@NgModule({
  declarations: [
    TodoPageComponent,
    TodoWidgetComponent,
    TodoCreateFormUiComponent,
    TodoListUiComponent,
    TodoListItemComponent,
    TodoListItemEditUiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoPageComponent
      }
    ]),
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    FormsModule
  ]
})
export class TodoModule {
}
