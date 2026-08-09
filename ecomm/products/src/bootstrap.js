import faker from "faker";

const mount = (el) => {
  const products = [];

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products.push(`<div>${name}</div>`);
  }
  el.innerHTML = products.join("\n");
};

if(process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  console.log("el", el);
  if(el) {
    mount(el);
  }
}

export { mount };
