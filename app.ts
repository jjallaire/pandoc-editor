// app.ts

import { hello } from './src/editor/'

export class Hero {
  id: number;
  name: string;

  constructor(name: string) {
    this.id = 42;
    this.name = name;
  }

  myName()
  {
    return this.name;
  }
}

let hero = new Hero('krunal3');
console.log(hero.myName());
hello();
