import "./style/style.css";
import pokemonImage from "./assets/pokemon.png";

function App() {
  return (
    <div classNameName="App">
      <div>
        <div>
          <div className="product-big-title-area">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="product-bit-title text-center">
                    <h2> Pokémon </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="single-product-area">
            <div className="zigzag-bottom"></div>
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="single-shop-product">
                    <div className="product-upper">
                      <img src={pokemonImage} />
                    </div>
                    <h2>
                      <a href="product.html">Charmander </a>
                    </h2>

                    <div className="product-option-shop">
                      <a
                        className="add_to_cart_button"
                        data-quantity="1"
                        data-product_sku=""
                        data-product_id="70"
                        rel="nofollow"
                      >
                        Détails
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <div className="single-shop-product">
                    <div className="product-upper">
                      <img src={pokemonImage} />
                    </div>
                    <h2>
                      <a href="#">Charmeleon</a>
                    </h2>

                    <div className="product-option-shop">
                      <a
                        className="add_to_cart_button"
                        data-quantity="1"
                        data-product_sku=""
                        data-product_id="70"
                        rel="nofollow"
                        href="/canvas/shop/?add-to-cart=70"
                      >
                        Détails
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <div className="single-shop-product">
                    <div className="product-upper">
                      <img src={pokemonImage} />
                    </div>
                    <h2>
                      <a href="">Charizard</a>
                    </h2>

                    <div className="product-option-shop">
                      <a
                        className="add_to_cart_button"
                        data-quantity="1"
                        data-product_sku=""
                        data-product_id="70"
                        rel="nofollow"
                        href="/canvas/shop/?add-to-cart=70"
                      >
                        Détails
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-shop-product">
                    <div className="product-upper">
                      <img src={pokemonImage} />
                    </div>
                    <h2>
                      <a href="">Squirtle</a>
                    </h2>

                    <div className="product-option-shop">
                      <a
                        className="add_to_cart_button"
                        data-quantity="1"
                        data-product_sku=""
                        data-product_id="70"
                        rel="nofollow"
                        href="/canvas/shop/?add-to-cart=70"
                      >
                        Détails
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" tabindex="-1">
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="single-product-area">
            <div class="zigzag-bottom"></div>
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="product-content-right">
                    <div class="product-breadcroumb">
                      <a href="#">Back</a>
                    </div>

                    <div class="row">
                      <div class="col-sm-6">
                        <div class="product-images">
                          <div class="product-main-img">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/4.png" />
                          </div>
                        </div>
                      </div>

                      <div class="col-sm-6">
                        <div class="product-inner">
                          <h2 class="product-name">id: 4</h2>
                          <div class="product-inner-price">
                            <ins>height: 6</ins>
                            <ins>weight: 85</ins>
                          </div>

                          <div class="product-inner-category">
                            <h2>Charmender</h2>
                            Types :<> Fire</>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="footer-about-us">
                <h2>
                  <span>Pokémon</span>
                </h2>
                <p>
                  SES Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis sunt id doloribus vero quam laborum quas alias
                  dolores blanditiis iusto consequatur, modi aliquid eveniet
                  eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit,
                  debitis, quisquam. Laborum commodi veritatis magni at?
                </p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="footer-menu">
                <h2 className="footer-wid-title">Lorem ipsum </h2>
                <ul>
                  <li>
                    <a href="#">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#">Lorem ipsum</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
