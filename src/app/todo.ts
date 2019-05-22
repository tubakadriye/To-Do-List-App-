export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;
  duedate: Date;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

let todo = new Todo ({
  title: 'Build a todo app.',
  complete: false,
  duedate: '2019-05-31'
});
