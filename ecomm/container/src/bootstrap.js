import { mount } from "product/ProductsIndex";
import { mount as mountCart } from "cart/cartsShow";

console.log("Hii");

mount(document.querySelector("#my-products"));
mountCart(document.querySelector("#my-cart"));
