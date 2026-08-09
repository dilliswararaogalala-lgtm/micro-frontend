import faker from "faker";

const carts = `<div>You have ${faker.random.number()} items in your cart</div>`;

export const mount = (el) => {
    const carts =
        `<div>You have ${faker.random.number()} items in your cart</div>`;
    el.innerHTML = carts;
};

if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#dev-cart");
    if (el) {
        el.innerHTML = carts;
    }
}
