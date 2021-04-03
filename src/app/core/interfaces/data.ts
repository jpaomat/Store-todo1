export interface Data {
}

export interface Modal {
    activateModal: boolean;
    textsProductForm?: any;
    dataProductForm?: any;
}

export interface Products {
    nameProduct: string;
    reference: string;
    description: string;
    quantity: string;
    price: string;
    discount: string;
    image: any,
}

export interface PostI {
    contentPost: string;
    imagePost:  string;
    tiltePost: string
}