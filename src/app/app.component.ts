import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'odoo-website';

  accordionItems = [
    { title: '📝 Which license do I need?', content: 'Content for Item 1', active: false },
    { title: '🔒 How do I get access to my database?', content: 'Content for Item 2', active: false },
    { title: '📁 How do I see previous orders?', content: 'Content for Item 3', active: false },
    { title: '📝 Which license do I need?', content: 'Content for Item 4', active: false },
    { title: '🔒 How do I get access to my database?', content: 'Content for Item 5', active: false },
    { title: '📁 How do I see previous orders?', content: 'Content for Item 6', active: false },
  ];

  toggleAccordion(item: any) {
    item.active = !item.active;
  }
}