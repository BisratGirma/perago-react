
export interface App {
    listOfCompany: Company[]
}

export interface Company {
    name: string;
}

export interface Person {
    head?: true;
    name: string;
    position: string;
}