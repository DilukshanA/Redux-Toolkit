export type Person = {
    _id: string;
    name: string;
    age: number;
    email: string;
}

export type PersonType = Omit<Person, "_id">; // Use this instead of duplicating structure