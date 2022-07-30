export type User = {
  email: string;
  password: string;
  returnSecureToken: boolean;
};

export type Product = {
  info: string;
  photo: string;
  price: string;
  title: string;
  type: string;
  date: string;
};

export type ProductFromBD= {
  info: string;
  photo: string;
  price: string;
  title: string;
  type: string;
  date: string;
  id: string;
};

export type FbRes = {
  name: string;
};
