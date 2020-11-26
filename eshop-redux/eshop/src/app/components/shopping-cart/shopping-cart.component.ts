import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Clear, Remove } from 'src/app/actions/cart.action';
import { CartModel } from 'src/app/models/cart.model';
import { cart } from 'src/app/reducers/cart.reducer';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {

    cart$: Observable<CartModel>;

    constructor(
        private store: Store<{cart: CartModel}>, // VERSÕES MAIS NOVAS
        private alertCtrl: AlertController
    ) { 
        this.cart$ = store.pipe(select('cart'));
    }

    ngOnInit() { }

    remove(item) {
        this.store.dispatch(Remove(item));
    }

    reset() {
        this.store.dispatch(Clear());
    }

    async presentRemoveConfirm(item) {
        const alert = await this.alertCtrl.create({
          header: 'Remover item',
          message: `Deseja remover o item ${item.title}?`,
          buttons: [
            {
              text: 'Cancelar',
              role: 'cancel',
            }, {
              text: 'Remover',
              handler: () => {
                this.remove(item);
              }
            }
          ]
        });
    
        await alert.present();
      }

}
