import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./myStyles.css']
})
export class CatsComponent implements OnInit {

  chats = [
    {nom : "chacha" , couleur : "brun" , age : 2},
    {nom : "chouchou" , couleur : "beige" , age : 1},
    {nom : "chichi" , couleur : "blanc" , age : 3}
  ]

  myStyle2 = {color : "red"}

  constructor() { }

  ngOnInit(): void {
  }

  miauleChat = (chat:any) => {
    alert(`${chat.nom} vous salut !`);
  }
}
