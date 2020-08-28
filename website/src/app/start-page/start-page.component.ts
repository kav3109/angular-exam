import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.sass']
})
export class StartPageComponent implements OnInit {

  arrCapacity: Array<number> = [6,12,18,24,30];
  selectedCapacity: number = this.arrCapacity[0];
  arrTheme: Array<string> = ['light', 'dark'];
  selectedTheme: string = this.arrTheme[0];

  constructor() { }

  ngOnInit(): void {
  }

  setCapacity(num: number): void {
    this.selectedCapacity = num;
    console.log(this.selectedCapacity)
  }
  setTheme(str: string): void {
    this.selectedTheme = str;
  }
}
