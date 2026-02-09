import turmericImg from "../../public/images/turmeric.png";
import cardamonImg from "../../public/images/cardamom-pods.png";
import blackPepperImg from "../../public/images/black-pepper.png";
import gingerImg from "../../public/images/ginger.png";
import redChilliImg from "../../public/images/red-chili-png.png";
import coffeeImg from "../../public/images/coffee-bean.png";

export const initialProducts = [
  {
    id: 1,
    name: "Turmeric CurCumin 95%",
    category: "Powder",
    price: 12.99,
    discount: 10,
    stock: 50,
    description: "Premium quality organic turmeric powder, rich in curcumin. Perfect for curries, golden milk, and health remedies.",
    image: turmericImg,
    rating: 4.8,
    reviews: 124,
    featured: true
  },
  {
    id: 2,
    name: "Turmeric Essential Oil",
    category: "Powder",
    price: 8.99,
    discount: 0,
    stock: 75,
    description: "Authentic Kashmiri chili powder with vibrant red color and mild heat. Adds beautiful color to your dishes.",
    image: turmericImg,
    rating: 4.6,
    reviews: 89,
    featured: false
  },
  {
    id: 3,
    name: "Turmeric Finger",
    category: "Seeds",
    price: 6.99,
    discount: 15,
    stock: 100,
    description: "Premium whole cumin seeds with intense aroma. Essential for tempering and seasoning.",
    image: turmericImg,
    rating: 4.7,
    reviews: 156,
    featured: true
  },
  {
    id: 4,
    name: "Cardamon Essential Oil",
    category: "Blend",
    price: 10.99,
    discount: 20,
    stock: 60,
    description: "Traditional garam masala blend with cardamom, cinnamon, cloves, and more. The heart of Indian cuisine.",
    image: cardamonImg,
    rating: 4.9,
    reviews: 203,
    featured: true
  },
  {
    id: 5,
    name: "Black Pepper Essential Oil",
    category: "Seeds",
    price: 14.99,
    discount: 0,
    stock: 45,
    description: "Premium Tellicherry black peppercorns. Bold, complex flavor perfect for grinding fresh.",
    image: blackPepperImg,
    rating: 4.5,
    reviews: 78,
    featured: false
  },
  {
    id: 6,
    name: "Ginger Essential Oil",
    category: "Powder",
    price: 7.99,
    discount: 5,
    stock: 85,
    description: "Freshly ground coriander powder with citrusy, sweet notes. Essential for curries and marinades.",
    image: gingerImg,
    rating: 4.4,
    reviews: 92,
    featured: false
  },
  {
    id: 7,
    name: "Cardamom",
    category: "Pods",
    price: 18.99,
    discount: 10,
    stock: 30,
    description: "Green cardamom pods with intense aromatic flavor. Perfect for chai, desserts, and rice dishes.",
    image: cardamonImg,
    rating: 4.9,
    reviews: 145,
    featured: true
  },
  {
    id: 8,
    name: "Red Chilli",
    category: "Sticks",
    price: 9.99,
    discount: 0,
    stock: 55,
    description: "Premium Ceylon cinnamon sticks with sweet, delicate flavor. Perfect for beverages and slow-cooked dishes.",
    image:redChilliImg,
    rating: 4.6,
    reviews: 112,
    featured: false
  },
  {
    id: 9,
    name: "Black Pepper",
    category: "Premium",
    price: 49.99,
    discount: 15,
    stock: 20,
    description: "Pure Kashmir saffron threads. The world's most precious spice, perfect for biryani and desserts.",
    image: blackPepperImg,
    rating: 5.0,
    reviews: 67,
    featured: true
  },
  {
    id: 10,
    name: "Coffee",
    category: "Leaves",
    price: 5.99,
    discount: 0,
    stock: 40,
    description: "Aromatic dried curry leaves. Essential for South Indian tempering and flavoring.",
    image: coffeeImg,
    rating: 4.3,
    reviews: 54,
    featured: false
  }
];
