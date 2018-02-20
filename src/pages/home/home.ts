import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ListModal } from './modal-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private bs: BluetoothSerial,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController
  ) {

  }

  enableBluetooth() {
    if (!this.bs.isEnabled()) {
      let alert = this.alertCtrl.create({
        title: 'Bluetooth',
        subTitle: 'Please Turn on bluetooth!',
        buttons: ['OK']
      });
      alert.present();
      this.bs.enable();
    } else {
      const alert = this.alertCtrl.create({
        title: 'Bluetooth',
        subTitle: 'Bluetooth already on!',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  showBluetoothSettings() {
    this.bs.showBluetoothSettings()
      .then(success => {
        console.log(success)
      }, failure => {
        console.log(failure)
      });
  }

  discoverUnpaired() {
    this.bs.discoverUnpaired()
      .then(success => {
        console.log(success)
      }, failure => {
        console.log(failure)
      });
  }

  list() {
    this.bs.list()
      .then(data => {
        let modal = this.modalCtrl.create(ListModal, { data });
        modal.onDidDismiss(data => {
          this.bs.connect(data.address)
            .subscribe(res => {
              const alert = this.alertCtrl.create({
                title: 'Connect Success',
                subTitle: 'Bluetooth already connect to device!',
                buttons: ['OK']
              });
              alert.present();
            }, err => {
              const alert = this.alertCtrl.create({
                title: 'Connect Failed',
                subTitle: 'Bluetooth cannot connect to device!',
                buttons: ['OK']
              });
              alert.present();
            });
        });
        modal.present();
      }, failure => {
        console.log(failure)
      });
  }
  write(text) {
    this.bs.write(text)
    .then(success => {
      console.log(success)
    }, failure => {
      console.log(failure)
    });
  }
}
