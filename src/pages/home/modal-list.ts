import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  template: `
  <ion-header>
    <ion-toolbar>
      <ion-title>
        Device List
      </ion-title>
      <ion-buttons start>
        <button ion-button (click)="dismiss()">
          <ion-icon name="md-close"></ion-icon>
        </button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <button ion-item *ngFor="let item of items" (click)="choose(item.address)">
        {{ item.name }}
      </button>
    </ion-list>
  </ion-content>
  `,
})
export class ListModal {

  items = [];

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) {
    this.items = this.navParams.get('data');
  }

  choose(address) {
    this.viewCtrl.dismiss({ address });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
