export interface IMedicineProp {
  id:string;
  name : string;
  price : number;
  discount : number;
  description?: string
  image ?: string;
}

export interface ICartItem extends IMedicineProp {
  quantity: number;
}