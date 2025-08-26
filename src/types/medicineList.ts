import type { IMedicineProp } from "./medicine";
import product1 from "../assets/product1.jpg"
import product2 from "../assets/product2.jpg"
import product3 from "../assets/product3.jpg"
import product4 from "../assets/product1.jpg"
import product5 from "../assets/product5.jpg"
import product6 from "../assets/product6.jpg"
import product7 from "../assets/product7.jpg"
import product8 from "../assets/product8.jpg"
import product9 from "../assets/product9.jpg"
import product10 from "../assets/product10.jpg"
import product11 from "../assets/product11.jpg"
import product12 from "../assets/product12.jpg"
import product13 from "../assets/product13.jpg"
import product14 from "../assets/product14.jpg"
import product15 from "../assets/product15.jpg"

export const medicineList: IMedicineProp[] = [
  {
    id : "1",
    name: 'Paracetamol',
    price: 50,
    discount: 10,
    description: 'Used to relieve pain and reduce fever.',
    image : product1,
    category: "Pain Relief",
    packInfo: 10,
    stock: 25,   // ✅ added
  },
  {
    id : "2",
    name: 'Amoxicillin',
    price: 120,
    discount: 15,
    description: 'A broad-spectrum antibiotic for bacterial infections.',
    image : product2,
    category: "Antibiotic",
    packInfo: 15,
    stock: 12,
  },
  {
     id :"3",
    name: 'Ibuprofen',
    price: 80,
    discount: 12,
    description: 'Relieves pain, inflammation, and fever.',
    image : product3,
    category: "Pain Relief",
    packInfo: 25,
    stock: 30,
  },
  {
     id :"4",
    name: 'Cetrizine',
    price: 40,
    discount: 5,
    description: 'Commonly used for allergies and hay fever.',
    image : product4,
    category: "Allergy",
    packInfo: 10,
    stock: 18,
  },
  {
     id :"5",
    name: 'Pantoprazole',
    price: 95,
    discount: 20,
    description: 'Reduces stomach acid; treats GERD.',
    image : product5,
    category: "Stomach Care",
    packInfo: 15,
    stock: 20,
  },
  {
     id :"6",
    name: 'Azithromycin',
    price: 150,
    discount: 18,
    description: 'Effective against bacterial respiratory infections.',
    image : product6,
    category: "Antibiotic",
    packInfo: 10,
    stock: 10,
  },
  {
     id :"7",
    name: 'Dolo 650',
    price: 60,
    discount: 8,
    description: 'Popular pain and fever reliever.',
    image : product7,
    category: "Pain Relief",
    packInfo: 25,
    stock: 40,
  },
  {
     id :"8",
    name: 'Metformin',
    price: 70,
    discount: 10,
    description: 'Used to control blood sugar in type 2 diabetes.',
    image : product8,
    category: "Diabetes",
    packInfo: 15,
    stock: 22,
  },
  {
     id :"9",
    name: 'Atorvastatin',
    price: 110,
    discount: 15,
    description: 'Lowers cholesterol and prevents heart disease.',
    image : product9,
    category: "Heart Health",
    packInfo: 10,
    stock: 16,
  },
  {
     id :"10",
    name: 'Montelukast',
    price: 90,
    discount: 10,
    description: 'Prevents asthma and allergic symptoms.',
    image : product10,
    category: "Allergy",
    packInfo: 25,
    stock: 25,
  },
  {
     id :"11",
    name: 'Losartan',
    price: 85,
    discount: 12,
    description: 'Treats high blood pressure and protects kidneys.',
    image : product11,
    category: "Blood Pressure",
    packInfo: 15,
    stock: 12,
  },
  {
     id :"12",
    name: 'Levocetirizine',
    price: 45,
    discount: 5,
    description: 'Antihistamine for allergy relief.',
    image : product12,
    category: "Allergy",
    packInfo: 10,
    stock: 18,
  },
  {
     id :"13",
    name: 'Diclofenac',
    price: 75,
    discount: 10,
    description: 'Used for inflammation, joint pain, and swelling.',
    image : product13,
    category: "Pain Relief",
    packInfo: 25,
    stock: 30,
  },
  {
     id :"14",
    name: 'Ranitidine',
    price: 65,
    discount: 20,
    description: 'Reduces acid in the stomach; treats ulcers.',
    image : product14,
    category: "Stomach Care",
    packInfo: 15,
    stock: 14,
  },
  {
     id :"15",
    name: 'Aspirin',
    price: 55,
    discount: 10,
    description: 'Used to reduce pain, fever, and inflammation.',
    image : product15,
    category: "Pain Relief",
    packInfo: 10,
    stock: 20,
  }
]
