export type Inf = {
    id: number;
    status: boolean;
}

export type error = {
    type: string;
    message: string | Array<string>;
}

export type Resp = {
    qtd: number;
    inf: Inf;
}

export type Movie = {
    id: number;
    name: string;
    platform: string;
    type: string;
    status: boolean;
    comment?: string;
}

export type CreateMovie = Omit<Movie, "id">

export type UpdateMovie = Omit<Movie, "name" | "platform" | "type">

export type ReadMovie = {
    type?: string;
    platform?: string
}
