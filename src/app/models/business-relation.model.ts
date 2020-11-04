import { Archivable } from '@app/interfaces/archivable.interface';
import { Entity } from '@app/interfaces/entity.interface';
import { Serializable } from '@app/interfaces/serializable.interface';
import { Address } from '@app/models/address.model';
import { Email } from '@app/models/email.model';
import { Phone } from '@app/models/phone.model';

export class BusinessRelation implements Entity<number, BusinessRelation>, Serializable<BusinessRelation>, Archivable {
    id: number;
    deleted: boolean;
    name: string;
    defaultPhone: Partial<Phone>;
    defaultPhoneId: number;
    defaultEmail: Partial<Email>;
    defaultEmailId: number;
    invoiceAddress: Partial<Address>;
    invoiceAddressId: number;

    deserialize(input: any): BusinessRelation {
        this.id = input.ID;
        this.deleted = input.Deleted;
        this.name = input.Name;
        this.defaultPhone = new Phone().deserialize(input.DefaultPhone);
        this.defaultPhoneId = input.DefaultPhoneID;
        this.defaultEmail = new Email().deserialize(input.DefaultEmail);
        this.defaultEmailId = input.DefaultEmailID;
        this.invoiceAddress = new Address().deserialize(input.InvoiceAddress);
        this.invoiceAddressId = input.InvoiceAddressID;

        return this;
    }

    serialize(input: BusinessRelation) {
        return {
            ID: input.id,
            Deleted: input.deleted,
            Name: input.name,
            DefaultPhoneID: input.defaultPhoneId,
            DefaultEmailID: input.defaultEmailId,
            InvoiceAddressID: input.invoiceAddressId
        }
    }
}