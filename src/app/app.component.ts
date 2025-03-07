import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUsersList, selectUsersLoading } from '../store/users.selectors';
import { User, UsersState } from '../store/model';
import { CommonModule } from '@angular/common';
import { usersActions } from '../store/users.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private store = inject(Store);
  loading$: Observable<boolean> = this.store.select(selectUsersLoading);
  usersList$: Observable<User[]> = this.store.select(selectUsersList);
  loading: boolean = false;

  title = 'ngrxAdvanced';

  ngOnInit() {
    this.store.dispatch(usersActions.getAll());
    this.loading$.subscribe(val => {
      this.loading = val;
    })
  }
}
