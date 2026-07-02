/* Hiding products' names */ 
let productsNames = document.getElementsByClassName("woocommerce-loop-product__title");
for (let i = 0; i < productsNames.length; i++) {
	productsNames[i].style.display="none";
	productsNames[i].style.display="hidden";
}

/* SpringSummer to Summer titles */
let elements = document.querySelectorAll("h2.woocommerce-loop-product__title a, .product_title, .woocommerce-breadcrumb-item");

for(let title of elements) {
	let loopTitle = title.textContent;
	if (loopTitle.includes("Spring/Summer")) {
		let newTitle = loopTitle.replace("Spring/Summer", "Summer");
		loopTitle = newTitle;
		title.textContent = newTitle;
	}
}

/* Translate Read More span links */
const loopReadMore = document.querySelectorAll("span.link_text");

loopReadMore.forEach(button => {
    if (getPageURL.includes("/fr/")) {
        button.innerHTML = "Lire plus";
    } else if (getPageURL.includes("/de/")) {
        button.innerHTML = "Mehr lesen";
    } else {
	}
})

/* Translate Buy now buttons */
const loopAddToCartButtons = document.querySelectorAll(".e-loop-add-to-cart-form > a");
const singleAddToCartButtons = document.querySelectorAll(".single_add_to_cart_button");
const AllBuyNowButtons = [...loopAddToCartButtons, ...singleAddToCartButtons];

AllBuyNowButtons.forEach(button => {
    if (getPageURL.includes("/fr/")) {
        button.innerHTML = "Acheter";
    } else if (getPageURL.includes("/de/")) {
        button.innerHTML = "Kaufen";
    } else {
	}
});

/* Translate articles metadata + read more buttons */
let readmoreButtons = document.querySelectorAll("p > a.more-link");
let views = document.querySelectorAll("a.post_meta_views span.post_meta_label");
let likes = document.querySelectorAll("a.post_meta_likes span.post_meta_label");
let comments = document.querySelectorAll("a.post_meta_comments span.post_meta_label");

//Since each article has a Read more button, counting the number of Read more buttons is equal to the number of articles in a single page.
//And the number of views, likes and comments elements cannot be greater than the number of Read more buttons
let articlesNumber = 0;
while (articlesNumber < readmoreButtons.length) {
	
	    readmoreButtons.forEach(button => {
        if (getPageURL.includes("/fr/")) {
            button.innerHTML = "Lire plus";
        } else if (getPageURL.includes("/de/")) {
            button.innerHTML = "Mehr lesen";
        } else {
        }
    });

    views.forEach(view => {
        if (getPageURL.includes("/fr/")) {
            view.innerHTML = "Vues";
        } else if (getPageURL.includes("/de/")) {
            view.innerHTML = "Aufrufe";
        } else {
        }
    });

    likes.forEach(like => {
        if (getPageURL.includes("/fr/")) {
            like.innerHTML = "J'aime";
        } else if (getPageURL.includes("/de/")) {
            like.innerHTML = "Gefällt mir";
        } else {
        }
    });

    comments.forEach(comment => {
        if (getPageURL.includes("/fr/")) {
            comment.innerHTML = "Commentaires";
        } else if (getPageURL.includes("/de/")) {
            comment.innerHTML = "Kommentare";
        } else {
        }
    });
	
	articlesNumber++;
}

/* Hide posts' date if before 2025 single post only */
//Toutes les classes qui contiennent les dates
let classesDates = document.querySelectorAll(".post_meta_item.post_date a");

const dateDeReference = 2025;

//Pour chaque classe récupérée on récupère la valeur de son a
classesDates.forEach((classDate) => {
	let dateDeLarticle = classDate.innerHTML;
    
	//Je décompose la date en jour, mois et année
	var décompositionDeLarticle = dateDeLarticle.split('/');
	var dateDeLarticleDécomposée = new Date(décompositionDeLarticle[2]);
	var annéeDeLaDateDécomposée = dateDeLarticleDécomposée.getFullYear();

	if (annéeDeLaDateDécomposée < dateDeReference) {
        let classDateBulletPoint = classDate.parentNode;
		classDateBulletPoint.style.display="none";
	} else {
	}
});