//// [tests/cases/conformance/types/typeRelationships/subtypesAndSuperTypes/subtypingWithCallSignaturesA.ts] ////

//// [subtypingWithCallSignaturesA.ts]
declare function foo3(cb: (x: number) => number): typeof cb;
var r5 = foo3((x: number) => ''); // error

//// [subtypingWithCallSignaturesA.js]
var r5 = foo3((x) => ''); // error
