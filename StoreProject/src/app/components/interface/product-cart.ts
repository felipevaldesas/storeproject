export interface productCart {
    howMany:number,
    product:{
        description: string,
        id: number,
        name:string ,
        price: number,
        url: string
    }
}

export interface Product {
    description: string,
    id: number,
    name:string ,
    price: number,
    url: string
}