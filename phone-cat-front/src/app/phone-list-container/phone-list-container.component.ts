import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.scss']
})
export class PhoneListContainerComponent {
  public phones;

  constructor(
    private store: Store<any>
  ) {
    store.select('phones')
      .subscribe((phones) => {
        this.phones = phones;
      });
  }
}
