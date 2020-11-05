import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactFormGroup, ContactFormValue } from '@app/contact/contact-form/contact-form.model';
import { ContactHttpService } from '@app/http-services/contact-http.service';
import { Contact } from '@app/models/contact.model';
import { TPhone } from '@app/types/phone.type';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  private mode: 'add' | 'edit';
  private id: number;
  readonly phoneTypeList = TPhone.List;
  conact: Contact;
  form: ContactFormGroup;

  constructor(
    activatedRoute: ActivatedRoute,
    private router: Router,
    private contactHttpService: ContactHttpService) {
    this.mode = activatedRoute.snapshot.params.mode;
    this.id = Number(activatedRoute.snapshot.params.id);
    if (this.mode === 'edit' && this.id === undefined) {
      this.router.navigate(["404"]);
    }
    else {
      this.form = new ContactFormGroup({
        role: new FormControl(''),
        comment: new FormControl(''),
        name: new FormControl('', [Validators.required]),
        defaultPhoneDescription: new FormControl(''),
        defaultPhoneNumber: new FormControl(''),
        defaultPhoneType: new FormControl(''),
        defaultEmailAddress: new FormControl('', [Validators.required]),
        invoiceCity: new FormControl(''),
        invoiceCountry: new FormControl(''),
        invoiceCountryCode: new FormControl(''),
        invoicePostalCode: new FormControl(''),
        invoiceRegion: new FormControl(''),
        invoiceAddressLine1: new FormControl(''),
        invoiceAddressLine2: new FormControl(''),
        invoiceAddressLine3: new FormControl(''),
        infoId: new FormControl(undefined),
        defaultPhoneId: new FormControl(undefined),
        defaultEmailId: new FormControl(undefined),
        invoiceAddressId: new FormControl(undefined)
      });
    }
  }

  async ngOnInit() {
    if (this.mode === 'edit' && this.id !== undefined) {
      const contact = await this.contactHttpService.get(this.id);
      this.form.setValue({
        role: contact?.role ?? '',
        comment: contact?.comment ?? '',
        name: contact?.info?.name ?? '',
        defaultPhoneDescription: contact?.info?.defaultPhone?.description ?? '',
        defaultPhoneNumber: contact?.info?.defaultPhone?.number ?? '',
        defaultPhoneType: contact?.info?.defaultPhone?.type ?? TPhone.Type.None,
        defaultEmailAddress: contact?.info?.defaultEmail?.emailAddress ?? '',
        invoiceCity: contact?.info?.invoiceAddress?.city ?? '',
        invoiceCountry: contact?.info?.invoiceAddress?.country ?? '',
        invoiceCountryCode: contact?.info?.invoiceAddress?.countryCode ?? '',
        invoicePostalCode: contact?.info?.invoiceAddress?.postalCode ?? '',
        invoiceRegion: contact?.info?.invoiceAddress?.region ?? '',
        invoiceAddressLine1: contact?.info?.invoiceAddress?.addressLine1 ?? '',
        invoiceAddressLine2: contact?.info?.invoiceAddress?.addressLine2 ?? '',
        invoiceAddressLine3: contact?.info?.invoiceAddress?.addressLine3 ?? '',
        infoId: contact?.infoId ?? undefined,
        defaultPhoneId: contact?.info?.defaultPhoneId ?? undefined,
        defaultEmailId: contact?.info?.defaultEmailId ?? undefined,
        invoiceAddressId: contact?.info?.invoiceAddressId ?? undefined
      });
    }
  }

  async onSubmit() {
    const value: Partial<ContactFormValue> = this.form.value;

    if (this.mode === 'add') {
      await this.contactHttpService.add({
        comment: value.comment,
        role: value.role,
        info: {
          name: value.name,
          defaultEmail: {
            emailAddress: value.defaultEmailAddress
          },
          defaultPhone: {
            type: value.defaultPhoneType,
            number: value.defaultPhoneNumber
          },
          invoiceAddress: {
            addressLine1: value.invoiceAddressLine1,
            addressLine2: value.invoiceAddressLine2,
            addressLine3: value.invoiceAddressLine3,
            city: value.invoiceCity,
            country: value.invoiceCountry,
            countryCode: value.invoiceCountryCode,
            postalCode: value.invoicePostalCode,
            region: value.invoiceRegion
          }
        }
      });
    }
    else {
      await this.contactHttpService.edit(this.id, {
        id: this.id,
        comment: value.comment,
        role: value.role,
        info: {
          id: value.infoId,
          name: value.name,
          defaultEmail: {
            id: value.defaultEmailId,
            emailAddress: value.defaultEmailAddress
          },
          defaultPhone: {
            id: value.defaultPhoneId,
            type: value.defaultPhoneType,
            number: value.defaultPhoneNumber
          },
          invoiceAddress: {
            id: value.invoiceAddressId,
            addressLine1: value.invoiceAddressLine1,
            addressLine2: value.invoiceAddressLine2,
            addressLine3: value.invoiceAddressLine3,
            city: value.invoiceCity,
            country: value.invoiceCountry,
            countryCode: value.invoiceCountryCode,
            postalCode: value.invoicePostalCode,
            region: value.invoiceRegion
          }
        }
      });
    }

    this.router.navigate(['/contacts']);
  }
}
