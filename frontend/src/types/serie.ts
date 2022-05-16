export type Serie = {
    id: number;
    title: string;
    score: number;
    count: number;
    image: string;
}

export type SeriePage = {
    content: Serie[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}