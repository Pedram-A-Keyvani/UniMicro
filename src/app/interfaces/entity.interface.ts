import { Deserializable } from '@app/interfaces/deserializable.interface';

export interface Entity<TId, T> extends Deserializable<T> {
    id: TId;
}