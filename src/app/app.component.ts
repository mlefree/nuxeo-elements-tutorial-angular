import {Component, ElementRef, ViewChild} from '@angular/core';

import '@nuxeo/nuxeo-elements/nuxeo-connection';
import '@nuxeo/nuxeo-elements/nuxeo-page-provider';
import '@nuxeo/nuxeo-ui-elements/widgets/nuxeo-document-suggestion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  router = {
    browse: () => '#'
  };
  title = 'My Nuxeo App';
  doc;
  params = {};
  documents = [];

  @ViewChild('pp') pp: ElementRef;

  select(doc) {
    this.doc = doc;
    this.params = doc ? { ecm_parentId: doc.uid } : {};
  }

  up() {
    this.select({uid: this.doc.parentRef});
  }

  onResults(docs) {
    this.documents = docs.splice(0);
  }

}
