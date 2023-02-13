enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

enum DirectionString {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

enum Decision {
  Yes = 1,
  No = calcEnum(),
}

function calcEnum() {
  return 2;
}

function runEnum(obj: { Up: string }) {}

runEnum(DirectionString);

enum Test {
  A,
}

let test = Test.A;
let nameA = Test[test]; // A

const enum ConstEnum {
  A,
  B,
}

let c = ConstEnum.A;

enum Dice {
  One = 1,
  Two = 2,
  Tree,
}

function ruDice(dice: Dice) {
  switch (dice) {
    case Dice.One:
      return "One";
    case Dice.Two:
      return "Two";
    default:
      const a: never = dice;
  }
}
