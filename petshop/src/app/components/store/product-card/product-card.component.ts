import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartUtil } from 'src/app/utils/cart.util';
import { ToasterService } from 'angular2-toaster';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
	@Input() product: Product;
	constructor(private toaster: ToasterService) { }

	ngOnInit() {
	}


	addToCart() {
		CartUtil.add(
		  this.product._id,
		  this.product.title,
		  1,
		  this.product.price,
		  this.product.images[0]
		)
		this.toaster.pop('success', 'Produto adicionado', `${this.product.title} adicionado ao carrinho` );
	  }
	
	}

