export interface IShow {
    id: number;
    name: string;
    image: string;
    summary: string;
}

export interface IApiShow {
    show: {
        id: number;
        name: string;
        summary: string;
        image?: {
            medium: string;
        };
    };
}