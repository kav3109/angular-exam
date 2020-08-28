import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

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
  cards: Array<string>;
  isStarted: boolean = false;
  selectedCapacity: number = 6;// TODO get from start page
  cardsInGame: Array<string>;
  cardCompare: string;


  constructor(public router: ActivatedRoute) {}

  ngOnInit(): void {
    // this.setCardsInGame(this._selectedCapacity);
    this.router.queryParams.subscribe(params => {
      this.selectedCapacity = +params['capacity'];
      console.log(this.selectedCapacity);
      console.log(params);
      this.setCardsInGame(this.selectedCapacity);
      this.getRandomCards(this.cardsInGame);
    });

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
