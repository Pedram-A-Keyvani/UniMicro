export interface Serializable<T> {
    serialize(input: Partial<T>): any;
}