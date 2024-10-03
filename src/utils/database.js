// src/utils/database.js

// This is a mock database implementation
// In a real application, you would use SQLite or another database

let items = [
  { id: 554, name: 'Colchón Visco Cama Nido', price: 79.99 },
  { id: 279, name: 'Colchón Basic Cama Nido', price: 101.46 },
  { id: 562, name: 'Topper Visco 4', price: 103.99 },
  { id: 263, name: 'Colchón Visco King 1', price: 137.51 },
  { id: 265, name: 'Colchón Visco Energy 2', price: 158.92 },
  { id: 364, name: 'Colchón Visco Fresh 3', price: 183.11 },
  { id: 266, name: 'Colchón Visco Energy 2 Plus', price: 191.97 },
  { id: 373, name: 'Colchón Visco Fresh 3 Plus', price: 238.99 },
  { id: 270, name: 'Colchón Viscarbono Artesano 9', price: 266.99 },
  { id: 648, name: 'Colchón Visco New Plus', price: 317.60 },
  { id: 630, name: 'Colchón Visco Luxe H', price: 344.92 },
  { id: 367, name: 'Colchón Visco Nature Memory', price: 954.52 },
  { id: 372, name: 'Colchón Viscarbono Avantgarde 6', price: 267.73 },
  { id: 409, name: 'Colchón Látex Nature Confort', price: 415.26 },
  { id: 426, name: 'Colchón Látex Nature Confort Plus', price: 515.67 },
  { id: 497, name: 'Colchón Visco Truck', price: 134.47 },
  { id: 496, name: 'Colchón Basic Truck', price: 127.54 },
  { id: 631, name: 'Cabecero tapizado Life', price: 38.99 },
  { id: 632, name: 'Cabecero tapizado juvenil Julie', price: 41.99 },
  { id: 712, name: 'Cabecero tapizado Life Madera', price: 49.99 },
  { id: 647, name: 'Cabecero tapizado Camile', price: 58.99 },
  { id: 499, name: 'Cabecero Miller', price: 75.99 },
  { id: 661, name: 'Cabecero tapizado Miller Top', price: 81.99 },
  { id: 666, name: 'Cabecero tapizado Siena Top', price: 84.99 },
  { id: 287, name: 'Cabecero tapizado Siena', price: 89.99 },
  { id: 302, name: 'Cabecero Maxi', price: 89.99 },
  { id: 667, name: 'Cabecero tapizado Mike Top', price: 90.99 },
  { id: 501, name: 'Cabecero tapizado Mike', price: 94.99 },
  { id: 665, name: 'Cabecero tapizado Mia Top', price: 97.99 },
  { id: 668, name: 'Cabecero tapizado Gamer Top', price: 97.99 },
  { id: 293, name: 'Cabecero tapizado Gamer', price: 99.99 },
  { id: 307, name: 'Cabecero tapizado Mia', price: 104.99 },
  { id: 662, name: 'Cabecero tapizado Maxi Top', price: 107.99 },
  { id: 634, name: 'Cabecero tapizado Brigitte', price: 97.80 },
  { id: 309, name: 'Cabecero tapizado Nilson', price: 109.99 },
  { id: 549, name: 'Cabecero tapizado Florida', price: 309.99 },
  { id: 709, name: 'Cabecero Tapizado Paris Combi', price: 309.40 },
  { id: 660, name: 'Cabecero tapizado Nilson Top', price: 117.99 },
  { id: 319, name: 'Cabecero tapizado Trade', price: 119.99 },
  { id: 663, name: 'Cabecero tapizado Iso Top', price: 127.99 },
  { id: 664, name: 'Cabecero tapizado Trade Top', price: 137.99 },
  { id: 547, name: 'Cabecero tapizado Iso', price: 139.99 },
  { id: 629, name: 'Cabecero tapizado Corfú Tex', price: 139.99 },
  { id: 300, name: 'Cabecero tapizado Heracles', price: 149.99 },
  { id: 305, name: 'Cabecero tapizado Naxos', price: 159.99 },
  { id: 455, name: 'Cabecero tapizado Mirto', price: 217.00 },
  { id: 711, name: 'Cabecero Tapizado Dalice', price: 219.99 },
  { id: 550, name: 'Cabecero tapizado California', price: 254.99 },
  { id: 298, name: 'Cabecero tapizado Nicodemus', price: 139.99 },
  { id: 493, name: 'Cabecero Rústico Markus', price: 41.96 },
  { id: 645, name: 'Cabecero de madera Nórdico', price: 41.99 },
  { id: 640, name: 'Cabecero Rústico Olimpia', price: 51.99 },
  { id: 639, name: 'Cabecero de madera Rústico Nordika', price: 55.99 },
  { id: 655, name: 'Cabecero Rústico Helsinki', price: 61.99 },
  { id: 649, name: 'Cabecero Rústico Fines', price: 63.99 },
  { id: 650, name: 'Cabecero de madera Rústico Verona', price: 73.99 },
  { id: 638, name: 'Cabecero de madera Rústico Otto', price: 79.99 },
  { id: 654, name: 'Mesita Vintage Olson', price: 41.99 },
  { id: 656, name: 'Mesita Vintage Viggo', price: 43.99 },
  { id: 652, name: 'Mesita Vintage Jensen estante', price: 46.99 },
  { id: 637, name: 'Mesita Vintage Hans estante', price: 47.99 },
  { id: 636, name: 'Mesita Vintage Riad', price: 48.99 },
  { id: 651, name: 'Mesita Vintage Jensen cajón', price: 48.99 },
  { id: 635, name: 'Mesita Vintage Hans cajón', price: 53.99 },
  { id: 633, name: 'Cama articulada Basic', price: 239.99 },
  { id: 385, name: 'Cama Articulada Confort', price: 227.00 },
  { id: 278, name: 'Cama Articulada Confort Plus', price: 277.00 },
  { id: 456, name: 'Cama Geriátrica Luxury', price: 673.05 }
];


export const fetchAllItems = async () => {
  return items;
};

export const fetchItem = async (id) => {
  return items.find(item => item.id === parseInt(id));
};

export const addItem = async (item) => {
  const newItem = { ...item, id: items.length + 1 };
  items.push(newItem);
  return newItem;
};

export const updateItem = async (id, updatedItem) => {
  const index = items.findIndex(item => item.id === parseInt(id));
  if (index !== -1) {
    items[index] = { ...items[index], ...updatedItem };
    return items[index];
  }
  return null;
};

export const deleteItem = async (id) => {
  items = items.filter(item => item.id !== parseInt(id));
};