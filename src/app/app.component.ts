import { Component, OnInit } from '@angular/core';
import { PhonesService } from './phones.service';
import { Store } from '@ngrx/store';
import { SET_PHONES, SET_LOADING } from './store/phones';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<any>,
    private phonesService: PhonesService
  ) { }

  ngOnInit() {
    this.store.dispatch({ type: SET_LOADING, payload: true });
    this.phonesService.getPhones()
      .then(phones => this.update(phones));
  }

  update(phones) {
    this.store.dispatch({ type: SET_PHONES, payload: phones });
    this.store.dispatch({ type: SET_LOADING, payload: false });
  }
}
