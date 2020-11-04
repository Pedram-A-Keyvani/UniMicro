import { Archivable } from '@app/interfaces/archivable.interface';
import { Entity } from '@app/interfaces/entity.interface';
import { Serializable } from '@app/interfaces/serializable.interface';
import { BusinessRelation } from '@app/models/business-relation.model';

export class Contact implements Entity<number, Contact>, Serializable<Contact>, Archivable {
    id: number;
    deleted: boolean;
    role: string;
    comment: string;
    info: Partial<BusinessRelation>;
    infoId: number;

    deserialize(input: any): Contact {
        this.id = input.ID;
        this.deleted = input.Deleted;
        this.role = input.Role;
        this.comment = input.Comment;
        this.info = new BusinessRelation().deserialize(input.Info);
        this.infoId = input.InfoID;

        return this;
    }

    serialize(input: Contact) {
        return {
            ID: input.id,
            Deleted: input.deleted,
            Role: input.role,
            Comment: input.comment,
            InfoID: input.infoId
        }
    }
}