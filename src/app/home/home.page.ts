import { Component, OnInit } from '@angular/core';
import {AlertController, PopoverController} from '@ionic/angular';
import {LanguagePopoverPage} from '../pages/language-popover/language-popover.page';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  params = {
     name: 'Anatole'
  };

  constructor(private popoverController: PopoverController,
              private alertController: AlertController,
              private translate: TranslateService) { }

  ngOnInit() {
  }

  async openLanguagePopOver($event) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: $event
    });
    await popover.present();
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: this.translate.instant('ALERT.header'),
      message: this.translate.instant('ALERT.msg'),
      buttons: ['OK']
    });
    await alert.present();
  }
}
