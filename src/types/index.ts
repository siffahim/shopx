export interface IProduct {
  status: boolean;
  category: string;
  description: string;
  id: number | string;
  image: string;
  price: number | string;
  rating: { rate: number; count: number };
  title: string;
}
