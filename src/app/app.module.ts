import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CurrencyPipe} from './pipes/currency.pipe';
import {LargeTextDirective} from './directives/large-text.directive';
import {MenuComponent} from './components/menu/menu.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyPipe,
    LargeTextDirective,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


