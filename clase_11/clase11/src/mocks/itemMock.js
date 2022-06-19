const items = [
  {
    id: "1",
    title: "Cebolla de verdeo",
    stock: 20,
    description: "Esto es una breve descripción del producto",
    price: 50,
    pictureUrl:
      "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3390022_f.jpg",
  },
  {
    id: "2",
    title: "Shampoo",
    stock: 50,
    description: "Esto es una breve descripción del producto",
    price: 20,
    pictureUrl:
      "https://www.sedal.com.ar/content/dam/unilever/sunsilk/argentina/pack_shot/7791293031095-1979370-png.png",
  },
  {
    id: "3",
    title: "Fideo",
    stock: 100,
    description: "Esto es una breve descripción del producto",
    price: 50,
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABWkSUZjExv0D0wHPbD3LK68IBE3qzZOFKA&usqp=CAU",
  },
  {
    id: "4",
    title: "Jabón",
    stock: 3,
    description: "Esto es una breve descripción del producto",
    price: 30,
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZYdYJdA1fGJhcvru9htXRcPgDHMXx2wwLA&usqp=CAU",
  },
  {
    id: "5",
    title: "Yerba",
    stock: 2,
    description: "Esto es una breve descripción del producto",
    price: 100,
    pictureUrl:
      "https://d2r9epyceweg5n.cloudfront.net/stores/001/312/110/products/dsc_01511-782a91078adb2af72815984055782597-480-0.jpg",
  },
  {
    id: "6",
    title: "Azúcar",
    stock: 8,
    description: "Esto es una breve descripción del producto",
    price: 150,
    pictureUrl:
      "https://ardiaprod.vteximg.com.br/arquivos/ids/211546-1000-1000/Azucar-Ledesma-Clasica-1-Kg-_1.jpg?v=637669476649300000",
  },
  {
    id: "7",
    title: "Queso",
    stock: 10,
    description: "Esto es una breve descripción del producto",
    price: 200,
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRBNDUguoS9-G2BrZZmIm4NqpVx8RjfNbgg&usqp=CAU",
  },
  {
    id: "8",
    title: "Detergente",
    price: 80,
    stock: 10,
    description: "Esto es una breve descripción del producto",
    pictureUrl:
      "https://abastecedoraanasco.com.ar/images/virtuemart/product/DM5%20-%20Detergente%20Magistral.jpg",
  },
];

export const getMockedItems = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 3000);
  });
};
