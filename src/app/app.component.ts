import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

/*
TODO nuxeo-connection.js needs a hack, and add :

```js
        ready() {
            super.ready();
            if (!this.url) return; // Question: good idea to prevent fake default connections ?
            this.connect().catch((error) => {
                console.warn(`Nuxeo connection refused: ${error}`);
            });
        }

        // needs to observe on DOM change aside from Angular binding
        static get observers() {
            return [
                '_itemsChanged(url)'
            ];
        }

        _itemsChanged(url) {
            console.log('updated connect:', url, this.url, this.username, this.password);
            if (!url || this.url === url) return;
            this.connect().catch((error) => {
                console.warn(`Nuxeo connection refused: ${error}`);
            });
        }
```
*/
import '@nuxeo/nuxeo-elements/nuxeo-connection';
import '@nuxeo/nuxeo-elements/nuxeo-page-provider';
// TODO : import.meta PB : import '@nuxeo/nuxeo-ui-elements';

class Document {
  constructor(public id: string, public title: string) {
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {
  title = 'My Nuxeo App';
  nuxeoList = [new Document('00', 'nxo')];
  nuxeoConnection = {
    id: 'nx2',
    url: 'http://localhost:8080/nuxeo',
    username: 'Administrator',
    password: 'Administrator',
    query: 'SELECT * FROM DOCUMENT'
  };

  @ViewChild('NPP') NPP: ElementRef;
  NPP_NE = null;
  updateTime = Date.now();

  ngAfterViewInit() {
    console.log('ngAfterViewInit:', this.NPP);
    this.NPP_NE = this.NPP.nativeElement;

    if (this.NPP_NE) {
      console.log('NPP_NE.addEventListener done');
      this.NPP_NE.addEventListener('update', (e) => {
        console.log('NPP_NE.addEventListener update');
        if (this.NPP_NE.currentPage) {
          Object.assign(this.nuxeoList, this.NPP_NE.currentPage);
          this.update();
          console.log(this.nuxeoList);
        }
      });
    }
  }

  update() {
    this.updateTime = Date.now();
  }

}
