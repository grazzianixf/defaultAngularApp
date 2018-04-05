import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.todos = db.collection('todos').valueChanges();
  }

  ngOnInit() {
  }

}
