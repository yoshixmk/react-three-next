// https://capacitor.ionicframework.com/docs/guides/ionic-framework-app
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export class Tab2Page {
  photo: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {  }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tab2',
//   templateUrl: 'tab2.page.html',
//   styleUrls: ['tab2.page.scss']
// })
// export class Tab2Page {

//   constructor() {}

// }
