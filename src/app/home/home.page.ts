import { Component } from '@angular/core';
declare var cordova: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  executar() : void {
    var success = function(result) {
      alert("EXECUTOU NO CORDOVA"+ JSON.stringify(result, undefined, 2));
    }
    var failure = function(result) {
      alert("NAO EXECUTOU" + JSON.stringify(result, undefined, 2));
    }
    cordova.plugins.HelloWorld.coolMethod({
      _sMessage: "Hello World"
    }, success, failure);
  }

}
