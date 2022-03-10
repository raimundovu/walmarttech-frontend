interface IProduct {
  _id: string;
  id: number;
  brand: string;
  description: string;
  image: string;
  price: number;
}

interface ProductProp {
  product: IProduct
}
type ApiDataType = {
  products: IProduct[]
  product?: IProduct
}
