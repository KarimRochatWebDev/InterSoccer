window.addEventListener("load", function() {
	// Array holding all French translations
	const translationsFR = [{
		selector: ".woocommerce-info",
		property: "innerHTML",
		value: 'Vous avez un coupon ? <a href="#" class="showcoupon">Cliquez ici pour entrer votre code</a>'
	}, {
		selector: "div.bar_cart",
		property: "innerHTML",
		value: '<span class="num">1</span> Panier'
	}, {
		selector: "div.bar_payment",
		property: "innerHTML",
		value: '<span class="num">2</span> Options de paiement et de livraison'
	}, {
		selector: "div.bar_order",
		property: "innerHTML",
		value: '<span class="num">3</span> Commande reçue'
	}, {
		selector: "tr.first_row td.product-name",
		property: "data-title",
		value: 'Produit'
	}, {
		selector: "tr.first_row td.product-price",
		property: "data-title",
		value: 'Prix'
	}, {
		selector: "tr.second_row td.product-quantity",
		property: "data-title",
		value: 'Quantité'
	}, {
		selector: "tr.second_row td.product-subtotal",
		property: "data-title",
		value: 'Sous-total'
	}, {
		selector: "th.product-remove",
		property: "innerText",
		value: "Supprimer"
	}, {
		selector: "#coupon_code",
		property: "placeholder",
		value: "Code du coupon"
	}, {
		selector: "button.apply_coupon",
		property: "innerHTML",
		value: "Appliquer le coupon"
	}];
	// Array holding all German translations
	const translationsDE = [{
		selector: ".woocommerce-info",
		property: "innerHTML",
		value: 'Haben Sie einen Gutschein? <a href="#" class="showcoupon">Klicken Sie hier, um Ihren Code einzugeben</a>'
	}, {
		selector: "div.bar_cart",
		property: "innerHTML",
		value: '<span class="num">1</span> Warenkorb'
	}, {
		selector: "div.bar_payment",
		property: "innerHTML",
		value: '<span class="num">2</span> Zahlungs- und Lieferoptionen'
	}, {
		selector: "div.bar_order",
		property: "innerHTML",
		value: '<span class="num">3</span> Bestellung eingegangen'
	}, {
		selector: "tr.first_row td.product-name",
		property: "data-title",
		value: 'Produkt'
	}, {
		selector: "tr.first_row td.product-price",
		property: "data-title",
		value: 'Preis'
	}, {
		selector: "tr.second_row td.product-quantity",
		property: "data-title",
		value: 'Menge'
	}, {
		selector: "tr.second_row td.product-subtotal",
		property: "data-title",
		value: 'Zwischensumme'
	}, {
		selector: "th.product-remove",
		property: "innerText",
		value: "Entfernen"
	}, {
		selector: "#coupon_code",
		property: "placeholder",
		value: "Gutscheincode"
	}, {
		selector: "button.apply_coupon",
		property: "innerHTML",
		value: "Gutschein anwenden"
	}];

	function applyTranslations(translationsTab) {
		translationsTab.forEach(item => {
			let element = document.querySelector(item.selector);
			// Check if the element exists
			if (element) {
				// We cannot directly edit data-title like .innerHTML for instance (DOM vs HTML attribut), we need to access dataset.title instead
				if (item.property == "data-title") {
					element.dataset.title = item.value;
					// For all other property, we can immediately attribute the value
				} else {
					element[item.property] = item.value;
				}
			}
		});
	}
	try {
		let hideapplycouponcode = document.querySelector("form.checkout_coupon.woocommerce-form-coupon p");
		hideapplycouponcode.style.display = "none";
	} catch (error) {} finally {
		if (getPageURL.includes("/fr/")) {
			applyTranslations(translationsFR);
		} else if (getPageURL.includes("/de/")) {
			applyTranslations(translationsDE);
		} else {}
	}
});