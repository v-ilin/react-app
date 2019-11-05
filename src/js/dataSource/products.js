
export async function getProducts() {

  await wait(5000);

  return [
    {
      title: "Product 1",
      description: "First product info",
      count: 34,
      imageUrl: "",
    },
    {
      title: "Product 2",
      description: "Second product info",
      count: 156,
      imageUrl: "",
    },
    {
      title: "Product 3",
      description: "Third product info",
      count: 1,
      imageUrl: "",
    },
  ];
}

async function wait(timeout) {
  await new Promise((resolve, reject) => {
    setTimeout(() => { resolve() }, timeout);
  });
}