export interface ItemInterface {
    label: string;
    route: string;
}

export interface MenuInterface {
    item: ItemInterface;
}

export interface PayloadInterface {
    data: MenuInterface[];
}

export interface ActionInterface {
    type: string;
    payload: PayloadInterface;
}
