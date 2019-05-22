import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'filterTodos'
})
export class FilterPipe implements PipeTransform {
  

  transform(todos: any[], query: string): any {
    console.log('filter for', query);
    if (!query) {
      return todos;
    }
    return todos.filter(todo => todo.title.indexOf(query) !== -1);
  }

}
