
export interface Product {
  id: string;
  name: string;
  scientificName: string;
  category: 'Gigantes' | 'Elephantes' | 'Lentils' | 'Specialty';
  description: string;
  pricePerKg: number;
  image: string;
  pgiStatus: boolean;
  texture: string;
  flavorProfile: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  servings: number;
}
