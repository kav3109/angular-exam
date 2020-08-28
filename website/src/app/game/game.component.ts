import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Cards} from "../core/interfaces/cards";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {

  totalCards: Array<string> = [
    '☀','☭','☦','❄', '⚝', '✪', '❤', '☕', '❉',
    '☃', '⚓', '☎', '☂', '❀', '❋'
  ];
  backCard: string = '⚜';
  cards: Array<Cards> = [];
  isStarted: boolean = false;
  selectedCapacity: number = 6;
  selectedTheme: string = 'light';
  cardsInGame: Array<string>;
  countOpenedCards: number = 0;
  id: number = -1;
  content: string = 'none';


  constructor(public router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.selectedCapacity = +params['capacity'];
      this.selectedTheme = params['theme'];
      this.setCountCards(this.selectedCapacity);
      this.setRandomCardsInGame(this.cardsInGame);
      console.log(this.cards);
    });
  }

  setRandomCardsInGame(arrCards: Array<string>): void {
    let arr;
    arr = arrCards.concat(arrCards).sort(function (): any {
      return Math.random() - 0.5;
    });
    arr.forEach((val,ind) => {
      this.cards.push({
        id: ind,
        content: val,
        isActive: true,
        isPair: false
      })
    })
  }

  setCountCards(count: number): void {
    this.cardsInGame = this.totalCards.splice(0, count/2);
  }

  closeCards(): void {
    this.cards.forEach(el => el.isActive = false);
    this.isStarted = true;
  }

  checkCard(card: Cards): void {
    if(card.isActive || card.isPair || this.countOpenedCards >= 2) return;//do unclickable
    // open card
    if(this.content === 'none') {//open first card
      this.cards.forEach(el => {
        if(el.id === card.id) {
          el.isActive = true;
          this.content = el.content;
          this.id = el.id;
          this.countOpenedCards += 1;
        }
      });
    } else {//open second card
      this.cards.forEach(el => {
        if(el.id === card.id) {
          el.isActive = true;
        }
      });
      this.countOpenedCards += 1;
      this.compare(this.id, this.content, card);
    }
  }

  compare(id:number, content: string, obj: Cards) {
    if(content === obj.content) {
      this.cards.forEach(val => {
        if(val.id === id || val.id === obj.id) val.isPair = true;
      });
      this.countOpenedCards = 0;
    } else {
      setTimeout(()=>{
        this.cards.forEach(val => {
          if(val.id === id || val.id === obj.id) val.isActive = false;
        });
        this.countOpenedCards = 0;
      }, 1000);
    }
    this.id = -1;
    this.content = 'none';
  }
}
