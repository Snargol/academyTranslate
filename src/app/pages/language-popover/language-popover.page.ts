import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {LanguageService} from '../../services/language.service';

@Component({
  selector: 'app-language-popover',
  templateUrl: './language-popover.page.html',
  styleUrls: ['./language-popover.page.scss'],
})
export class LanguagePopoverPage implements OnInit {
  languages = [];
  selected = '';

  constructor(private popoverController: PopoverController,
              private languageService: LanguageService) { }

  ngOnInit() {
      this.languages = this.languageService.getLanguages();
      this.selected = this.languageService.selected;
  }

  select(lng) {
    this.languageService.setLanguage(lng);
    this.popoverController.dismiss();
  }
}
