import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class phoneBookPage{

  contactArray = [
    {name:'ต้า',telephone:'0950682152',imageUrl:'assets/imgs/11.png'}
    ,{name:'ฟา',telephone:'0994813642',imageUrl:'assets/imgs/22.png'}
    ,{name:'น๊ะ',telephone:'0822614048',imageUrl:'assets/imgs/33.jpg'}
    ,{name:'สมาย',telephone:'0824031541',imageUrl:'assets/imgs/44.png'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage",item);

  }

}//end class
