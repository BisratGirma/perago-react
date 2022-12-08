export interface Company {
  id: string;
  name: string;
  bio?: string;
}

export interface Person {
  name: string;
  attributes: {
    id: string;
    position: string;
    description?: string;
    parent: number | "head";
  };

  children: Array<Person>;
}
