import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {TodoState} from '../store/todo/todo.reducer';
import {select, Store} from '@ngrx/store';
import {todoFeatureSelector} from '../store/todo/todo.selectors';
import {filter} from 'rxjs/operators';
import {TodoLoadStateAction} from '../store/todo/todo.actions';


export const TODO_LOCALSTORAGE_KEY = 'todo';

@Injectable({
  providedIn: 'root'
})
export class TodoSyncStorageService {
  private renderer: Renderer2;
  private isInit = false;

  constructor(
    private store$: Store<TodoState>,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  init(): void {
    if (this.isInit) {
      return;
    }

    this.isInit = true;
    this.loadFromStorage();

    this.store$.pipe(
      select(todoFeatureSelector),
      filter(state => !!state)
    )
      .subscribe(state => {
        localStorage.setItem(TODO_LOCALSTORAGE_KEY, JSON.stringify(state));
      });

    this.renderer.listen(window, 'storage', () => {
      this.loadFromStorage();
    });
  }

  private loadFromStorage(): void {
    const storageState = localStorage.getItem(TODO_LOCALSTORAGE_KEY);
    if (storageState) {
      this.store$.dispatch(new TodoLoadStateAction({
        state: JSON.parse(storageState)
      }));
    }
  }
}
