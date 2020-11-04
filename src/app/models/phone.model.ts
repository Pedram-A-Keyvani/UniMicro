import { Archivable } from '@app/interfaces/archivable.interface';
import { Entity } from '@app/interfaces/entity.interface';

export class Phone implements Entity<number, Phone>, Archivable {
    id: number;
    deleted: boolean;
    description: string;
    type: string;
    number: string;

    deserialize(input: any): Phone {
        this.id = input.ID;
        this.deleted = input.Deleted;
        this.description = input.Description;
        this.type = input.Type;
        this.number = input.Number;

        return this;
    }
}