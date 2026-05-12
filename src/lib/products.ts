import tankImage from "@/assets/roto-tank.png";
export const TANK_IMAGE = tankImage;
export const PHONE = "+254736698594";
export const PHONE_TEL = "+254736698594";
export const WHATSAPP = "254736698594";

export type Product = {
  slug: string;
  name: string;
  capacity: string;
  liters: number;
  price: number;
  priceLabel: string;
};

const make = (liters: number, price: number): Product => {
  const cap = liters.toLocaleString("en-US") + "L";
  return {
    slug: `${liters}l-cylindrical-tank`,
    name: `${cap} Cylindrical Tank`,
    capacity: cap,
    liters,
    price,
    priceLabel: `KSh${price.toLocaleString("en-US")}.00`,
  };
};

export const products: Product[] = [
  make(1000, 8500),
  make(2000, 14500),
  make(2500, 15500),
  make(3000, 18500),
  make(4000, 24000),
  make(10000, 53000),
  make(16000, 72000),
  make(20000, 107000),
  make(24000, 134000),
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
