"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var DirectionString;
(function (DirectionString) {
    DirectionString["Up"] = "UP";
    DirectionString["Down"] = "DOWN";
    DirectionString["Left"] = "LEFT";
    DirectionString["Right"] = "RIGHT";
})(DirectionString || (DirectionString = {}));
var Decision;
(function (Decision) {
    Decision[Decision["Yes"] = 1] = "Yes";
    Decision[Decision["No"] = calcEnum()] = "No";
})(Decision || (Decision = {}));
function calcEnum() {
    return 2;
}
function runEnum(obj) {
}
runEnum(DirectionString);
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
})(Test || (Test = {}));
let test = Test.A;
let nameA = Test[test]; // A
let c = 0 /* ConstEnum.A */;
