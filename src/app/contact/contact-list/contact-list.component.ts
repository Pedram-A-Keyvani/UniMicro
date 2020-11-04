import { Component, ElementRef, HostListener, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ContactHttpService } from '@app/http-services/contact-http.service';
import { Contact } from '@app/models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, AfterViewInit {
  contacts: Contact[];
  selectedItemId: number;

  @ViewChild('list') listElement: ElementRef<HTMLElement>;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setListElementWidth(event.target.innerWidth);
  }

  constructor(private contactHttpService: ContactHttpService) { }

  async ngOnInit() {
    this.contacts = await this.contactHttpService.getList(20);
  }

  ngAfterViewInit() {
    this.setListElementWidth(window.innerWidth);
  }

  async onDelete(id: number) {
    await this.contactHttpService.archive(20);
  }

  private setListElementWidth(width: number) {
    this.listElement && this.listElement.nativeElement.style.setProperty('--list-width', `${width - 0.1}px`);
  }
}
