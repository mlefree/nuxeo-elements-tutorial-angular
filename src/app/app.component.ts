import {Component, ElementRef, ViewChild} from '@angular/core';

import '@nuxeo/nuxeo-elements/nuxeo-connection';
import '@nuxeo/nuxeo-elements/nuxeo-page-provider';
// TODO : import.meta PB : import '@nuxeo/nuxeo-ui-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'My Nuxeo App';
  documents = [];
  query = 'SELECT * FROM DOCUMENT';
  updateTime = Date.now();
  @ViewChild('pp') pp: ElementRef;

  onResults(docs) {
    this.documents = docs;
    this.updateTime = Date.now();
  }

  update() {
    this.pp.nativeElement.fetch();
  }

}
