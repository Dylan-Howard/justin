import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const bg = document.getElementById('bg')
    const hero = document.getElementsByClassName('hero')[0];
    const main = document.getElementsByTagName('main')[0];
    const loader = document.getElementById('loader')

    var isLoaded = false

    var loadTimer = setInterval(function () {
      if (isLoaded) {
        console.log('Transitioning')
        if (loader) {
          loader.classList.add('fadeout')
          setTimeout(function () { loader.classList.add('inactive') }, 300)
        }

        if (hero) {
          hero.classList.add('active')
          hero.setAttribute("style","background-image: url('./assets/img/jcole_bg.jpg')")
        }

        if (document.body.classList.contains('has-animations')) {
          /* global ScrollReveal */
          const sr = (<any>window).sr = ScrollReveal()

          sr.reveal('.hero-title, .hero-subtitle, .hero-cta', {
            duration: 1000,
            distance: '40px',
            easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
            interval: 150
          })

          sr.reveal('.nav-brand, .nav-link, .soc-link', {
            duration: 1000,
            distance: '40px',
            easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
            interval: 50
          })
        }
        clearInterval(loadTimer)
      }
    }, 2500)


    if (bg) {
      bg.onload = function() {
        console.log('Loaded')
        isLoaded = true
      }
    }

  }

}
