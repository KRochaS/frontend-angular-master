import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    cart$: Observable<any[]>;

    constructor(
        private store: Store<{ cart: [] }>
    ) {
        this.cart$ = store.pipe(select('cart'));
     }

}
