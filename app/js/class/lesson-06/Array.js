{
    console.log(Array.of(1, 2, 3))

    console.log(Array.of()) // []
}

{
    console.log(Array.from(document.querySelectorAll("*")))

    console.log(Array.from([0, 1, 2, 3], (item) => item * 2))
}

{
    console.log([1, 'a', undefined].fill(7))
    console.log([1, 'a', undefined, 'b', 'e'].fill(7, 1, 3))
}

{
    for (let index of ['1', 'c', 'ks'].keys()) {
        console.log(index)
    }

    for (let value of ['1', 'c', 'ks'].values()) {
        console.log(value)
    }

    for (let [k, v] of ['1', 'c', 'ks'].entries()) {
        console.log(k, v)
    }
}

{
    /**
     *  target （必需）：从该位置开始替换数据。
        start （可选）：从该位置开始读取数据，默认为 0 。如果为负值，表示倒数。
        end （可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
     */
    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4))
}

{
    console.log([1,2,3,4,5,6].find((item)=> item > 3))
    console.log([1,2,3,4,5,6].findIndex((item)=> item > 3))
}

{
    console.log([1,2,3,4,5,6].includes(1))
    console.log([1,2,3,4,5,NaN].includes(NaN))
    console.log([1,2,3,4,5,1 / 0].includes(NaN))
}