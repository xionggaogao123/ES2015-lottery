{
    console.log('0b11101', 0b11101)
    console.log('0o671', 0o671)
    console.log('0xF01', 0xF01)
}

{
    console.log(Number.isFinite(0));
    console.log(Number.isFinite(NaN));
    console.log(Number.isFinite(1 / 0));

    console.log(Number.isNaN(NaN))
    console.log(Number.isNaN(0))
}

{
    console.log(Number.isInteger(1.0))
    console.log(Number.isInteger(1))
    console.log(Number.isInteger('1'))
    console.log(Number.isInteger(1.1))
}

{
    console.log(Number.MAX_SAFE_INTEGER, Number.MAX_VALUE)
    console.log(Number.MIN_SAFE_INTEGER, Number.MIN_VALUE)
    console.log(Number.isSafeInteger(10))
    console.log(Number.isSafeInteger('a'))
}

{
    console.log(Number.parseInt(1.2))
    console.log(Math.trunc(1.1))
    console.log(Math.trunc(-0.1))
}

{
    console.log(Math.sign(-0)) // -0
    console.log(Math.sign(-10)) // -1
    console.log(Math.sign(0)) // 0
    console.log(Math.sign(10)) // 1
    console.log(Math.sign('-1')) // -1
    console.log(Math.sign('a')) // NaN
}

{
    console.log(Math.cbrt(-1))
    console.log(Math.cbrt(8))
}