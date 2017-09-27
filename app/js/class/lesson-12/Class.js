{
    class Foo {
        constructor(name = 'default name') {
            this.name = name;
        }
    }

    let foo = new Foo();
    let foo2 = new Foo('new name');

    console.log('foo', foo);
    console.log('foo2', foo2);
}

{
    class Base {
        constructor(name = 'default name') {
            this.name = name;
        }
    }

    class Foo extends Base {
        constructor() {
            super('new name');
            this.keyword = 'es 2015';
        }

        // 获取longName属性
        get longName() {
            return 'mk-' + this.name;
        }

        set longName(val) {
            this.name = val;
        }
    }

    let foo = new Foo();
    console.log('extends', foo);

    console.log('longName', foo.longName);

    foo.longName = 'yoyo';
    console.log('longName', foo.longName);

}

{
    class Foo {
        constructor(name = 'default name') {
            this.name = name;
        }

        static tell() {
            console.log('tell this name');
        }
    }

    Foo.tell()
}

{
    class Foo {
        constructor(name = 'default name') {
            this.name = name;
        }

        static tell() {
            console.log('tell this name');
        }
    }

    Foo.type = 'yoyo';

    console.log('static attribute:', Foo.type);
}