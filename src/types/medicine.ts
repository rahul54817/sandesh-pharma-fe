export interface IMedicineProp {
  id:string;
  name : string;
  price : number;
  discount : number;
  description?: string
  image ?: string;
  category ?: string
  packInfo : number,
  stock : number
}

export interface ICartItem extends IMedicineProp {
  quantity: number;
}