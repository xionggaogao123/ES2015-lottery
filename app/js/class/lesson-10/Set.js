{
    let set = new Set()
    set.add(5)
    set.add(7)
    set.add(5)

    console.log(set.size)
}

{
    let arr = [1, 2, 3, 3, 4]
    let set = new Set(arr)

    console.log(set.size)
}

{
    let arr = [1, 2, 3, 4, 2, 1, '3']
    let set = new Set(arr)
    arr = Array.from(set)

    // 数据去重
    console.log(arr)
}

{
    let set = new Set()

    set.add(1)
    set.add(2)
    console.log(set)

    console.log(set.has(2))

    set.delete(2)
    console.log(set)

    set.clear()
    console.log(set)
}

{
    let set = new Set()
    set.add(1)
    set.add(3)
    set.add([1, 2, 3])

    for (let key of set.keys()) {
        console.log(key)
    }

    for (let value of set) {
        console.log(value)
    }

    set.forEach(item => console.log(item))
}

{
    // 1. 元素必须是引用类型
    // 2. 弱引用
    let weakSet = new WeakSet()

    weakSet.add({})
    weakSet.add({})
    // weakSet.add(2) // Invalid value

    console.log(weakSet)

}

{
    let map = new Map()
    let obj = {}
    map.set(obj, [1, 2])

    console.log(map)
    console.log(map.get(obj))
}

{
    let map = new Map([['a', 123], ['b', 456]])

    console.log(map)

    console.log(map.get('a'))
}

{
    let weakMap = new WeakMap()

    let obj = {}

    weakMap.set(obj, [1, 2, 3])

    console.log(weakMap.get(obj))
}