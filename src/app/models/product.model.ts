export interface ProductModel {
  id: number;
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: Array<Rating>;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface NewProduct {
  title: string;
  price: number;
}

export interface NewProductResponse extends NewProduct {
  id: number
}
