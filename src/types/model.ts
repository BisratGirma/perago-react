export interface App {
  listOfCompany: Company[];
}

export interface Company {
  name: string;
  bio?: string;
}

export interface Person {
  id: number;
  name: string;
  position: string;
  description?: string;
  parent: number | "head";
  childrens: Array<Person>;
}
