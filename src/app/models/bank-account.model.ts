import { Archivable } from '@app/interfaces/archivable.interface';
import { Deserializable } from '@app/interfaces/deserializable.interface';

export class BankAccount implements Deserializable<BankAccount>, Archivable {
    deleted: boolean;
    accountNumber: string;
    locked: boolean;
    label: string;
    iban: string;

    deserialize(input: any): BankAccount {
        this.deleted = input.Deleted;
        this.accountNumber = input.AccountNumber;
        this.locked = input.Locked;
        this.label = input.Label;
        this.iban = input.IBAN;

        return this;
    }
}