import { Component, OnInit } from '@angular/core';
import {StartPageComponent} from "../start-page/start-page.component";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent extends StartPageComponent implements OnInit {

  totalCards: Array<string> = [
    '☀','☭','☦','❄', '⚝', '✪', '❤', '☕', '❉',
    '☃', '⚓', '☎', '☂', '❀', '❋'
  ];
  backCard: string = '⚜';
  cards: Array<string>;
  isStarted: boolean = false;
  _selectedCapacity: number = 12;// TODO get from start page
  cardsInGame: Array<string>;
  cardCompare: string;


  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setCardsInGame(this._selectedCapacity);
    this.getRandomCards(this.cardsInGame);
  }

  getRandomCards(arrCards: Array<string>): void {
    this.cards = arrCards.concat(arrCards).sort(function (): any {
      return Math.random() - 0.5;
    })
  }

  setCardsInGame(count: number): void {
    this.cardsInGame = this.totalCards.splice(0, count/2);
  }

  checkCard(card: string): void {
    console.log(card);
  }








  test(): void {
    console.log(this.selectedCapacity);
  }

}
