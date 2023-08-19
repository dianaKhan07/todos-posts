


export interface ITodo {
    text: string;
    completed: boolean;
    date: string;
    id: number;
}

export interface IPost {
    id: number;
    title: string;
    body: string;
    userId: number;
    tags: string[]
    reactions: number;
}