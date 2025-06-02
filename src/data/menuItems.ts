import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Avocado Toast',
    description: 'Sourdough bread topped with mashed avocado, poached eggs, and microgreens',
    price: '',
    image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'breakfast',
    popular: true
  },
  {
    id: 2,
    name: 'Belgian Waffles',
    description: 'Fluffy waffles served with fresh berries, maple syrup and whipped cream',
    price: '',
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'breakfast',
    popular: true
  },
  {
    id: 3,
    name: 'Caprese Panini',
    description: 'Fresh mozzarella, tomatoes, basil, and balsamic glaze on ciabatta bread',
    price: '',
    image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'lunch'
  },
  {
    id: 4,
    name: 'Caesar Salad',
    description: 'Romaine lettuce, parmesan, croutons, and house-made Caesar dressing',
    price: '',
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'lunch'
  },
  {
    id: 7,
    name: 'Tiramisu',
    description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream',
    price: '',
    image: 'https://static01.nyt.com/images/2017/04/05/dining/05COOKING-TIRAMISU1/05COOKING-TIRAMISU1-square640.jpg',
    category: 'desserts'
  },
  {
    id: 8,
    name: 'Vanilla Bean Latte',
    description: 'Espresso with steamed milk and vanilla bean syrup',
    price: '',
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Coffee',
    popular: true
  }
];
