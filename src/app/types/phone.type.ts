export module TPhone {
    export enum Type {
        None = 0,
        Phone = 150101,
        Mobile = 150102,
        Fax = 15010
    }

    export const List = Object.freeze([
        { name: 'Phone', type: [Type.Phone] },
        { name: 'Mobile', type: [Type.Mobile] },
        { name: 'Fax', type: [Type.Fax] }
    ])
}