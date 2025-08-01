import butterChicken from '@/assets/butter-chicken.jpg';
import masalaDosa from '@/assets/masala-dosa.jpg';
import hakkaNoodles from '@/assets/hakka-noodles.jpg';
import pasta from '@/assets/pasta.jpg';
import biryani from '@/assets/biryani.jpg';
import pizza from '@/assets/pizza.jpg';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  cuisine: string;
  isVeg: boolean;
  rating: number;
  prepTime: string;
}

export interface Cuisine {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export const menuData: Cuisine[] = [
  {
    id: 'north-indian',
    name: 'North Indian',
    description: 'Rich and creamy curries with aromatic spices',
    items: [
      {
        id: 1,
        name: 'Butter Chicken',
        description: 'Tender chicken in rich tomato and butter gravy',
        price: 320,
        image: butterChicken,
        cuisine: 'North Indian',
        isVeg: false,
        rating: 4.5,
        prepTime: '25 mins'
      },
      {
        id: 2,
        name: 'Chicken Biryani',
        description: 'Fragrant basmati rice with spiced chicken',
        price: 280,
        image: biryani,
        cuisine: 'North Indian',
        isVeg: false,
        rating: 4.8,
        prepTime: '35 mins'
      },
      {
        id: 3,
        name: 'Paneer Makhani',
        description: 'Cottage cheese in creamy tomato gravy',
        price: 260,
        image: butterChicken,
        cuisine: 'North Indian',
        isVeg: true,
        rating: 4.3,
        prepTime: '20 mins'
      },
      {
        id: 4,
        name: 'Dal Tadka',
        description: 'Yellow lentils tempered with spices',
        price: 180,
        image: butterChicken,
        cuisine: 'North Indian',
        isVeg: true,
        rating: 4.2,
        prepTime: '15 mins'
      }
    ]
  },
  {
    id: 'south-indian',
    name: 'South Indian',
    description: 'Traditional dishes with coconut and curry leaves',
    items: [
      {
        id: 5,
        name: 'Masala Dosa',
        description: 'Crispy crepe filled with spiced potato curry',
        price: 120,
        image: masalaDosa,
        cuisine: 'South Indian',
        isVeg: true,
        rating: 4.6,
        prepTime: '20 mins'
      },
      {
        id: 6,
        name: 'Idli Sambar',
        description: 'Steamed rice cakes with lentil curry',
        price: 80,
        image: masalaDosa,
        cuisine: 'South Indian',
        isVeg: true,
        rating: 4.4,
        prepTime: '10 mins'
      },
      {
        id: 7,
        name: 'Uttapam',
        description: 'Thick pancake topped with vegetables',
        price: 140,
        image: masalaDosa,
        cuisine: 'South Indian',
        isVeg: true,
        rating: 4.3,
        prepTime: '18 mins'
      }
    ]
  },
  {
    id: 'chinese',
    name: 'Chinese',
    description: 'Indo-Chinese fusion dishes with bold flavors',
    items: [
      {
        id: 8,
        name: 'Hakka Noodles',
        description: 'Stir-fried noodles with vegetables',
        price: 160,
        image: hakkaNoodles,
        cuisine: 'Chinese',
        isVeg: true,
        rating: 4.1,
        prepTime: '15 mins'
      },
      {
        id: 9,
        name: 'Chicken Manchurian',
        description: 'Crispy chicken in tangy sauce',
        price: 240,
        image: hakkaNoodles,
        cuisine: 'Chinese',
        isVeg: false,
        rating: 4.4,
        prepTime: '25 mins'
      },
      {
        id: 10,
        name: 'Veg Fried Rice',
        description: 'Wok-tossed rice with mixed vegetables',
        price: 140,
        image: hakkaNoodles,
        cuisine: 'Chinese',
        isVeg: true,
        rating: 4.0,
        prepTime: '12 mins'
      }
    ]
  },
  {
    id: 'italian',
    name: 'Italian',
    description: 'Authentic Italian flavors and fresh ingredients',
    items: [
      {
        id: 11,
        name: 'Margherita Pizza',
        description: 'Classic pizza with fresh basil and mozzarella',
        price: 320,
        image: pizza,
        cuisine: 'Italian',
        isVeg: true,
        rating: 4.7,
        prepTime: '20 mins'
      },
      {
        id: 12,
        name: 'Pasta Alfredo',
        description: 'Creamy pasta with mushrooms and herbs',
        price: 280,
        image: pasta,
        cuisine: 'Italian',
        isVeg: true,
        rating: 4.5,
        prepTime: '18 mins'
      },
      {
        id: 13,
        name: 'Chicken Pepperoni Pizza',
        description: 'Loaded with chicken pepperoni and cheese',
        price: 380,
        image: pizza,
        cuisine: 'Italian',
        isVeg: false,
        rating: 4.6,
        prepTime: '22 mins'
      }
    ]
  }
];

export const getFeaturedItems = (): MenuItem[] => {
  return [
    menuData[0].items[0], // Butter Chicken
    menuData[1].items[0], // Masala Dosa
    menuData[3].items[0], // Margherita Pizza
    menuData[0].items[1], // Chicken Biryani
  ];
};