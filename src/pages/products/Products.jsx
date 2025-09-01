// src/data/products.js
import classic1 from "../../assets/img/classic1.jpg";
import classic2 from "../../assets/img/classic2.jpg";
import fruit1 from "../../assets/img/fruit.jpg";
import fruit2 from "../../assets/img/fruit1.jpg";
import chocolate1 from "../../assets/img/chocholat1.jpg";
import chocolate2 from "../../assets/img/chocolate2'.jpg";
import healthy1 from "../../assets/img/healthy.png";
import healthy2 from "../../assets/img/healthy2.jpg";
import nutty1 from "../../assets/img/nutty1.jpg";
import nutty2 from "../../assets/img/nutty2.jpg";
import arabic1 from "../../assets/img/arabic1.jpg";
import arabic2 from "../../assets/img/arabic2.jpg";
import party1 from "../../assets/img/party1.jpg";
import party2 from "../../assets/img/party2.jpg";
import mix1 from "../../assets/img/mix1.jpg";
import mix2 from "../../assets/img/mix2.jpg";

export const products = [
  // Classic Blabn
  {
    id: "classic1",
    name: "Classic Vanilla Blabn",
    description: "Smooth vanilla flavor with creamy texture",
    price: 5.99,
    image: classic1,
    categoryId: "classic",
  },
  {
    id: "classic2",
    name: "Classic Strawberry Blabn",
    description: "Fresh strawberry swirls with traditional base",
    price: 6.49,
    image: classic2,
    categoryId: "classic",
  },

  // Fruit Blabn
  {
    id: "fruit1",
    name: "Mango Fruit Blabn",
    description: "Tropical mango blend with creamy goodness",
    price: 6.99,
    image: fruit1,
    categoryId: "fruit",
  },
  {
    id: "fruit2",
    name: "Berry Mix Blabn",
    description: "Mixed berries for a fruity burst",
    price: 7.49,
    image: fruit2,
    categoryId: "fruit",
  },

  // Chocolate Blabn
  {
    id: "chocolate1",
    name: "Dark Chocolate Blabn",
    description: "Rich dark chocolate for chocolate lovers",
    price: 7.99,
    image: chocolate1,
    categoryId: "chocolate",
  },
  {
    id: "chocolate2",
    name: "Milk Chocolate Blabn",
    description: "Smooth milk chocolate with creamy texture",
    price: 7.49,
    image: chocolate2,
    categoryId: "chocolate",
  },

  // Healthy Blabn
  {
    id: "healthy1",
    name: "Low-Sugar Blabn",
    description: "Healthy low-sugar option for guilt-free enjoyment",
    price: 6.99,
    image: healthy1,
    categoryId: "healthy",
  },
  {
    id: "healthy2",
    name: "Vegan Blabn",
    description: "Plant-based and dairy-free, deliciously healthy",
    price: 7.29,
    image: healthy2,
    categoryId: "healthy",
  },

  // Nutty Blabn
  {
    id: "nutty1",
    name: "Almond Nutty Blabn",
    description: "Crunchy almonds blended with creamy base",
    price: 8.49,
    image: nutty1,
    categoryId: "nutty",
  },
  {
    id: "nutty2",
    name: "Pistachio Nutty Blabn",
    description: "Rich pistachio flavor with crunchy texture",
    price: 8.99,
    image: nutty2,
    categoryId: "nutty",
  },

  // Arabic Blabn
  {
    id: "arabic1",
    name: "Cardamom Arabic Blabn",
    description: "Fragrant cardamom flavor for traditional taste",
    price: 7.99,
    image: arabic1,
    categoryId: "arabic",
  },
  {
    id: "arabic2",
    name: "Date Arabic Blabn",
    description: "Sweet dates blended with creamy Arabic flavor",
    price: 8.29,
    image: arabic2,
    categoryId: "arabic",
  },

  // Party Blabn
  {
    id: "party1",
    name: "Birthday Party Blabn",
    description: "Large party dish with colorful decorations",
    price: 15.99,
    image: party1,
    categoryId: "party",
  },
  {
    id: "party2",
    name: "Celebration Party Blabn",
    description: "Perfect for celebrations and gatherings",
    price: 16.49,
    image: party2,
    categoryId: "party",
  },

  // Blabn Mix
  {
    id: "mix1",
    name: "Exclusive Mix Blabn 1",
    description: "Unique blend of flavors for exclusive taste",
    price: 9.99,
    image: mix1,
    categoryId: "mix",
  },
  {
    id: "mix2",
    name: "Exclusive Mix Blabn 2",
    description: "Special innovative flavors found only here",
    price: 10.49,
    image: mix2,
    categoryId: "mix",
  },
];
