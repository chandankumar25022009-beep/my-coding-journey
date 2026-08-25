const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const products =
    document.querySelectorAll(".product-card");

const categories =
    document.querySelectorAll(".category");

const noProducts =
    document.getElementById("noProducts");

const cartCount =
    document.getElementById("cartCount");

const cartMessage =
    document.getElementById("cartMessage");

const year =
    document.getElementById("year");


let cart = 0;


/* Search Products */

function searchProducts() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    let visibleProducts = 0;

    products.forEach(product => {

        const name =
            product.dataset.name.toLowerCase();

        const category =
            product.dataset.category.toLowerCase();

        if (
            name.includes(searchText) ||
            category.includes(searchText) ||
            searchText === ""
        ) {

            product.style.display = "block";

            visibleProducts++;

        } else {

            product.style.display = "none";

        }

    });


    noProducts.style.display =
        visibleProducts === 0
            ? "block"
            : "none";
}


searchButton.addEventListener(
    "click",
    searchProducts
);


searchInput.addEventListener(
    "input",
    searchProducts
);


/* Category Filter */

categories.forEach(categoryButton => {

    categoryButton.addEventListener(
        "click",
        () => {

            const selectedCategory =
                categoryButton.dataset.category;

            let visibleProducts = 0;


            products.forEach(product => {

                const productCategory =
                    product.dataset.category;


                if (
                    selectedCategory === "all" ||
                    productCategory === selectedCategory
                ) {

                    product.style.display = "block";

                    visibleProducts++;

                } else {

                    product.style.display = "none";

                }

            });


            noProducts.style.display =
                visibleProducts === 0
                    ? "block"
                    : "none";

        }
    );

});


/* Add To Cart */

document.querySelectorAll(".add-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                cart++;

                cartCount.textContent = cart;

                const productName =
                    button.dataset.product;

                cartMessage.textContent =
                    `${productName} added to cart.`;

                cartMessage.classList.add("show");


                setTimeout(() => {

                    cartMessage.classList.remove(
                        "show"
                    );

                }, 2000);

            }
        );

    });


/* Cart Button */

document
    .getElementById("cartButton")
    .addEventListener("click", () => {

        if (cart === 0) {

            cartMessage.textContent =
                "Your cart is empty.";

        } else {

            cartMessage.textContent =
                `You have ${cart} item(s) in your cart.`;

        }

        cartMessage.classList.add("show");


        setTimeout(() => {

            cartMessage.classList.remove(
                "show"
            );

        }, 2000);

    });


/* Current Year */

year.textContent =
    new Date().getFullYear();