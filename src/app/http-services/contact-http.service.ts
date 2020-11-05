import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@app/environment';
import { Contact } from '@app/models/contact.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService {

  constructor(private httpClient: HttpClient) { }

  async get(id: number): Promise<Contact> {
    return this.httpClient.get(
      `${environment.baseUrl}biz/contacts/${id}` +
      '?expand=Info,Info.InvoiceAddress,Info.DefaultPhone,Info.DefaultEmail,Info.DefaultAddress')
      .pipe(
        map<any, Contact>(a => new Contact().deserialize(a))
      )
      .toPromise();
  }

  async getList(top: number, skip: number = 0): Promise<Contact[]> {
    return this.httpClient.get(
      `${environment.baseUrl}biz/contacts` +
      '?expand=Info,Info.InvoiceAddress,Info.DefaultPhone,Info.DefaultEmail,Info.DefaultAddress&hateoas=false' +
      `&top=${top}&skip=${skip}`)
      .pipe(
        map<any, Contact[]>(a => a.map((b: any) => new Contact().deserialize(b)))
      )
      .toPromise();
  }

  async add(contact: Partial<Contact>) {
    return this.httpClient.post(`${environment.baseUrl}biz/contacts`, contact)
      .pipe(
        map<any, Contact>(a => new Contact().deserialize(a))
      )
      .toPromise();
  }

  async edit(id: number, contact: Partial<Contact>): Promise<Contact> {
    return this.httpClient.put(`${environment.baseUrl}biz/contacts/${id}`, contact)
      .pipe(
        map<any, Contact>(a => new Contact().deserialize(a))
      )
      .toPromise();
  }

  async archive(id: number): Promise<void> {
    this.httpClient.delete(`${environment.baseUrl}biz/contacts/${id}`).toPromise();
  }
}
