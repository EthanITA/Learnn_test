const isFoo = (num) => num % 3 === 0;
const isBar = (num) => num % 5 === 0;
const isFooBar = (num) => isFoo(num) && isBar(num);

function solve() {
    for (let i = 1; i <= 100; i++) {
        if(isFooBar(i)) console.log('FooBar');
        else if(isFoo(i)) console.log('Foo');
        else if(isBar(i)) console.log('Bar');
        else console.log(i);
    }
}

solve();