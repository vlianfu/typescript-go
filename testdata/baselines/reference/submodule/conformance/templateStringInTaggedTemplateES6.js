//// [tests/cases/conformance/es6/templates/templateStringInTaggedTemplateES6.ts] ////

//// [templateStringInTaggedTemplateES6.ts]
`I AM THE ${ `${ `TAG` } ` } PORTION`    `I ${ "AM" } THE TEMPLATE PORTION`

//// [templateStringInTaggedTemplateES6.js]
`I AM THE ${`${`TAG`} `} PORTION` `I ${"AM"} THE TEMPLATE PORTION`;
