import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  @Input() sideNavStatus: boolean = false;
  list = [
    {
      number: '1',
      name : 'Home',
      icon : 'bi bi-house-fill',
      link : ''
    },
    {
      number: '2',
      name : 'Analytics',
      icon : 'bi bi-graph-up-arrow',
      link : 'content1'
    },
    {
      number: '3',
      name : 'Products',
      icon : 'bi bi-box2-fill',
      link : 'content2'

    },
    {
      number: '4',
      name : 'Order',
      icon : 'bi bi-cart-fill',
      link : 'content1'

    },
    {
      number: '5',
      name : 'Settings',
      icon : 'bi bi-gear-fill',
      link : 'content2'

    },
    {
      number: '6',
      name : 'About',
      icon : 'bi bi-info-circle-fill',
      link : 'content1'

    },
    {
      number: '7',
      name : 'Contact',
      icon : 'bi bi-person-lines-fill',
      link : 'content2'

    },

  ]

}
