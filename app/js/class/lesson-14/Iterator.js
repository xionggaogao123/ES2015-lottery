{
    let arr = ['hello', 'world'];
    console.log(arr);
    let map = arr[Symbol.iterator]();

    console.log('next', map.next());
    console.log('next', map.next());
    console.log('next', map.next());
}

{
    let obj = {
        start: [1, 3, 2],
        end: [9, 8, 7],
        [Symbol.iterator]() {
            let self = this;
            let index = 0;
            let arr = self.start.concat(self.end);
            let len = arr.length;

            return {
                next() {
                    if (index < len) {
                        return {
                            value: arr[index++],
                            done: false
                        }
                    } else {
                        return {
                            value: arr[index++],
                            done: true
                        }
                    }
                }
            }
        }
    };

    for (let val of obj) {
        console.log('key', val);
    }

    for (let val of [1, 2, 3]) {
        console.log('val', val);
    }
}