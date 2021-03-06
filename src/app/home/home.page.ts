import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CitylistPage } from '../citylist/citylist.page';
import { CityService } from '../city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public mainCity = [];
  public cityList = [];

  constructor(public modalController: ModalController, private cityService: CityService, private router: Router) {}
  
  ngOnInit(){
    this.mainCity = this.cityService.getMainCities();
    this.cityList = this.cityService.getCityList();
  }

  async openCityList(isSearch){
    const modal = await this.modalController.create({
      component: CitylistPage,
      componentProps: {
        'searchbar': isSearch,
        'cities': this.cityList
      }
    });
    return await modal.present();
  }

  showBankList(url){
    this.router.navigate(['/bank/'+url]);
  }
}
