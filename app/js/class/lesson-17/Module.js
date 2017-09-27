// export let A = 123;

// export function test() {
//     console.log('export test');
// }

// export class Test{
//     test() {
//         console.log('this is a test function');
//     }
// }

let A = 123;

function test() {
    console.log('export test');
}

class Test{
    test() {
        console.log('this is a test function');
    }
}
export default {
    A,
    test,
    Test
}