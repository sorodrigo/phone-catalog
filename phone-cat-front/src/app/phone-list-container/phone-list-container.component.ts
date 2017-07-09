import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.scss']
})
export class PhoneListContainerComponent {
  public phones;
  public BASE_URL = environment.API_BASE_URL;

  constructor(
    private store: Store<any>
  ) {
    store.select('phones')
      .subscribe((phones) => {
        this.phones = phones;
      });
  }
}
