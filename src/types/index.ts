export interface IProduct {
  category: string;
  description: string;
  id: number | string;
  image: string;
  price: number | string;
  rating: { rating: number; count: number }[];
  title: string;
}
