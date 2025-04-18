//// [tests/cases/compiler/typePredicateTopLevelTypeParameter.ts] ////

//// [typePredicateTopLevelTypeParameter.ts]
// Repro from #51980

function getPermissions(user: string) {
    if (user === 'Jack') return 'admin';
    return undefined;
}

const admins = ['Mike', 'Joe'].map(e => getPermissions(e));

function isDefined<T>(a: T | undefined): a is T {
    return a !== undefined;
}

const foundAdmins = admins.filter(isDefined);  // "admin"[]


//// [typePredicateTopLevelTypeParameter.js]
// Repro from #51980
function getPermissions(user) {
    if (user === 'Jack')
        return 'admin';
    return undefined;
}
const admins = ['Mike', 'Joe'].map(e => getPermissions(e));
function isDefined(a) {
    return a !== undefined;
}
const foundAdmins = admins.filter(isDefined); // "admin"[]
