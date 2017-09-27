{
    let readOnly = function (target, name, descriptor) {
        descriptor.writable = false;
        return descriptor;
    }

    class Test {

        @readOnly
        time() {
            return '2017年9月24日'
        }
    }

    let test = new Test();

    /**
     * Uncaught TypeError: Cannot assign to read only property 'time' of object '#<Test>
     */
    // test.time = function() {
    //     console.log('show...');
    // }
    console.log(test.time);
}


{
    const typeName = (target, name, descriptor) => {
        target.myname = 'hello';
    }

    @typeName
    class Test {

    }

    console.log('类修饰符', Test.myname);
}

{
    // 第三方库修饰器的js库： core-decorators
}

{
    let log = (type) => {
        return (target, name, descriptor) => {
            let src_method = descriptor.value;
            descriptor.value = (...arg) => {
                src_method.apply(target, arg);
                console.log(`log ${type}`);
            }
        }
    }

    class AD {
        @log('show')
        show() {
            console.log('ad is show');
        }

        @log('click')
        click() {
            console.log('ad is click');
        }
    }

    let ad = new AD();
    ad.show();
    ad.click();
}