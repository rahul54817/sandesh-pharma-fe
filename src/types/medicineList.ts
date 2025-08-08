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
    name: 'Paracetamol',
    price: 50,
    discount: 10,
    description: 'Used to relieve pain and reduce fever.',
    image : product1
  },
  {
    name: 'Amoxicillin',
    price: 120,
    discount: 15,
    description: 'A broad-spectrum antibiotic for bacterial infections.',
    image : product2
  },
  {
    name: 'Ibuprofen',
    price: 80,
    discount: 12,
    description: 'Relieves pain, inflammation, and fever.',
    image : product3
  },
  {
    name: 'Cetrizine',
    price: 40,
    discount: 5,
    description: 'Commonly used for allergies and hay fever.',
    image : product4
  },
  {
    name: 'Pantoprazole',
    price: 95,
    discount: 20,
    description: 'Reduces stomach acid; treats GERD.',
    image : product5
  },
  {
    name: 'Azithromycin',
    price: 150,
    discount: 18,
    description: 'Effective against bacterial respiratory infections.',
    image : product6
  },
  {
    name: 'Dolo 650',
    price: 60,
    discount: 8,
    description: 'Popular pain and fever reliever.',
    image : product7
  },
  {
    name: 'Metformin',
    price: 70,
    discount: 10,
    description: 'Used to control blood sugar in type 2 diabetes.',
    image : product8
  },
  {
    name: 'Atorvastatin',
    price: 110,
    discount: 15,
    description: 'Lowers cholesterol and prevents heart disease.',
    image : product9
  },
  {
    name: 'Montelukast',
    price: 90,
    discount: 10,
    description: 'Prevents asthma and allergic symptoms.',
    image : product10
  },
  {
    name: 'Losartan',
    price: 85,
    discount: 12,
    description: 'Treats high blood pressure and protects kidneys.',
    image : product11
  },
  {
    name: 'Levocetirizine',
    price: 45,
    discount: 5,
    description: 'Antihistamine for allergy relief.',
    image : product12
  },
  {
    name: 'Diclofenac',
    price: 75,
    discount: 10,
    description: 'Used for inflammation, joint pain, and swelling.',
    image : product13
  },
  {
    name: 'Ranitidine',
    price: 65,
    discount: 20,
    description: 'Reduces acid in the stomach; treats ulcers.',
    image : product14
  },
  {
    name: 'Aspirin',
    price: 55,
    discount: 10,
    description: 'Used to reduce pain, fever, and inflammation.',
    image : product15
  }
]
