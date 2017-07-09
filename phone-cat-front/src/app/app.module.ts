import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { PhonesService } from './phones.service';
import { StoreModule } from '@ngrx/store';
import { phonesReducer } from './store/phones';

import { AppComponent } from './app.component';
import { PhoneListContainerComponent } from './phone-list-container/phone-list-container.component';

const store = {
  phones: phonesReducer
};

@NgModule({
  declarations: [
    AppComponent,
    PhoneListContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.provideStore(store)
  ],
  providers: [PhonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
