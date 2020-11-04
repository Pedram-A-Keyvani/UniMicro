import { Archivable } from '@app/interfaces/archivable.interface';
import { Entity } from '@app/interfaces/entity.interface';
import { Serializable } from '@app/interfaces/serializable.interface';

export class Address implements Entity<number, Address>, Serializable<Address>, Archivable {
    id: number;
    deleted: boolean;
    city: string;
    country: string;
    countryCode: string;
    region: string;
    postalCode: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;

    deserialize(input: any): Address {
        this.id = input.ID;
        this.deleted = input.Deleted;
        this.city = input.City;
        this.country = input.Country;
        this.countryCode = input.CountryCode;
        this.region = input.Region;
        this.postalCode = input.PostalCode;
        this.addressLine1 = input.AddressLine1;
        this.addressLine2 = input.AddressLine2;
        this.addressLine3 = input.AddressLine3;

        return this;
    }

    serialize(input: Partial<Address>) {
        return {
            ID: input.id,
            Deleted: input.deleted,
            City: input.city,
            Country: input.country,
            CountryCode: input.countryCode,
            Region: input.region,
            PostalCode: input.postalCode,
            AddressLine1: input.addressLine1,
            AddressLine2: input.addressLine2,
            AddressLine3: input.addressLine3
        }
    }
}