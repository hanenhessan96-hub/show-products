const productsContainer = document.getElementById("productsContainer");
const showProductsButton = document.getElementById("showProductsButton");

const apiUrl = "https://dummyjson.com/products";


async function getProducts() {

    try {

        const response = await fetch(apiUrl);

        const data = await response.json();

        displayProducts(data.products);

    } catch (error) {

        console.error(error);

    }
}


function displayProducts(products) {

    productsContainer.innerHTML = products.map((product) => {

        return `
            <div class="col-12 col-sm-6 col-lg-4">

                <div class="card product-card shadow-sm border-0">

                    <img
                        src="${product.thumbnail}"
                        class="card-img-top product-image"
                        alt="${product.title}"
                    >

                    <div class="card-body">

                        <h5 class="card-title product-title">
                            ${product.title}
                        </h5>

                        <p class="card-text text-muted">
                            ${product.description}
                        </p>

                        <h5 class="text-primary">
                            $${product.price}
                        </h5>

                    </div>

                </div>

            </div>
        `;

    }).join("");
}


showProductsButton.addEventListener("click", async () => {

    if (productsContainer.innerHTML === "") {

        await getProducts();

        showProductsButton.textContent = "Hide Products";
        showProductsButton.classList.remove("btn-primary");
        showProductsButton.classList.add("btn-danger");

    } else {

        productsContainer.innerHTML = "";

        showProductsButton.textContent = "Show Products";
        showProductsButton.classList.remove("btn-danger");
        showProductsButton.classList.add("btn-primary");
    }
});