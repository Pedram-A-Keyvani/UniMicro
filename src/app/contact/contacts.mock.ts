import { Contact } from "@app/models/contact.model";

export const mockContacts: Partial<Contact>[] = [
    {
        id: 1,
        comment: 'contact no.1',
        role: 'Admnistrator',
        infoId: 1,
        info: {
            id: 1,
            name: 'Pedram Ahmadpour',
            defaultEmailId: 1,
            defaultEmail: {
                id: 1,
                emailAddress: 'ahmadpour.keyani@gmail.com'
            },
            defaultPhoneId: 1,
            defaultPhone: {
                id: 1,
                description: 'mobile number',
                number: '111-111-11',
                type: 'Mobile'
            },
            invoiceAddressId: 1,
            invoiceAddress: {
                id: 1,
                country: 'Norway',
                city: 'Bergen',
                region: 'Hordaland'
            }
        }
    },
    {
        id: 2,
        comment: 'contact no.2',
        role: 'DWCharacter',
        infoId: 2,
        info: {
            id: 2,
            name: 'Mikke Mus Kontaktperson',
            defaultEmailId: 2,
            defaultEmail: {
                id: 2,
                emailAddress: 'mikke@mus.com'
            },
            defaultPhoneId: 2,
            defaultPhone: {
                id: 2,
                description: 'mobile number',
                number: '999-999-99',
                type: 'Mobile'
            },
            invoiceAddressId: 2,
            invoiceAddress: {
                id: 2,
                country: 'DisneyWorld',
                city: 'Andeby'
            }
        }
    }
]