//// [tests/cases/conformance/typings/typingsLookupAmd.ts] ////

//// [index.d.ts]
export declare class A {}

//// [index.d.ts]
import {A} from "a";
export declare class B extends A {}

//// [foo.ts]
import {B} from "b";


//// [foo.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
