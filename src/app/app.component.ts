import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    (function () {
      const doc = document.documentElement

      doc.classList.remove('no-js')
      doc.classList.add('js')
    }())
  }
}
