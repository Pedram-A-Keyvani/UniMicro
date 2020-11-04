import { Archivable } from '@app/interfaces/archivable.interface';
import { Entity } from '@app/interfaces/entity.interface';

export class Email implements Entity<number, Email>, Archivable {
    id: number;
    deleted: boolean;
    emailAddress: string;

    deserialize(input: any): Email {
        this.id = input.ID;
        this.deleted = input.Deleted;
        this.emailAddress = input.EmailAddress;

        return this;
    }
}