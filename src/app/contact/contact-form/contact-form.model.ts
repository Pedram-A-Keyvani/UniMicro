import { AbstractControl, FormGroup } from "@angular/forms"

interface ContactForm<T1, T2> {
    role: T1;
    comment: T1;
    name: T1;
    defaultPhoneDescription: T1;
    defaultPhoneNumber: T1;
    defaultPhoneType: T1;
    defaultEmailAddress: T1;
    invoiceCity: T1;
    invoiceCountry: T1;
    invoiceCountryCode: T1;
    invoicePostalCode: T1;
    invoiceRegion: T1;
    invoiceAddressLine1: T1;
    invoiceAddressLine2: T1;
    invoiceAddressLine3: T1;
    infoId: T2;
    defaultPhoneId: T2;
    defaultEmailId: T2;
    invoiceAddressId: T2;
}

export interface ContactFormControl extends ContactForm<AbstractControl, AbstractControl> { }

export interface ContactFormValue extends ContactForm<string, number> { }

// Strongly typed FormGroup for Contact
export class ContactFormGroup extends FormGroup {
    controls: ContactFormControl & { [key: string]: AbstractControl; };

    constructor(controls: ContactFormControl & { [key: string]: AbstractControl; }) {
        super(controls);
    }

    setValue(value: ContactFormValue & { [key: string]: any; }, options?: { onlySelf?: boolean; emitEvent?: boolean; }) {
        super.setValue(value, options)
    }

    patchValue(value: Partial<ContactFormValue> & { [key: string]: any; }, options?: { onlySelf?: boolean; emitEvent?: boolean; }) {
        super.patchValue(value, options)
    }
}