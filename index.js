/*

/!**
 * 数据基础
 * *!/


/!**
* 一、新的声明方式
* *!/
var a = "yj";
console.log(a);

/!**
* 如何理解var声明全局变量
*   用匿名函数对他进行包裹，然后在匿名函数中调用这个a变量，看是否可以调用
* *!/
let a = "yj123123";
window.onload = function () {
    console.log(a);
};

/!**
 * 区块的方式测试var是全局声明
 * *!/
let a=2;
{
   var a=3;
}
console.log(a);

/!**
 * 测试let局部声明
 * 只在区块里面声明，看控制台显示什么
 * *!/
var a=2;
{
   let a=3;
}
console.log(a);

/!**
 * 用var声明的循环
 * *!/
for (let i=0;i<10;i++){
   console.log('循环体中：'+i);
}
console.log('循环体外：'+i);

/!**
 * 用const声明常量
 * *!/
const a='yj';
var a='杨静';
console.log(a);

/!**
 * 二、变量的解构赋值
 * *!/
// let a=0;
// let b=1;
// let c=2;

/!**
 * 1. 数组解构的方式
 * *!/
let [a,b,c,d] = [1,2,3];
console.log(a);
console.log(d);

/!**
 * /解构的默认值  undefined相当于什么都没有， b是默认值
 *!/
let [a,b="yj"] = ['杨静',undefined];
console.log(a+b);    // --->“杨静yj”

/!**
 * undefined和null的区别
 * *!/
let [a,b="yj"] = ['杨静',null];
console.log(a+b);   //  --->"杨静null"

/!**
 * 2. 对象的解构赋值
 * *!/
let {foo,bar} = {bar:'杨静',foo:'yj'};
console.log(foo+bar);     // --->"yj杨静"

/!**
 * 圆括号的使用
 * *!/
let foo;
// {foo} = {foo:'yj'};  // 错误的写法
({foo} = {foo:'yj'});
console.log(foo);   // --->"yj"

/!**
 * 3. 字符串的解构
 * *!/
const [a,b,c,d,e] = 'yangj';
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

/!**
 *
 * 三、扩展运算符
 *
 * *!/
/!**
 * 对象扩展运算符(适用于不知道参数有几个的情况下)
 * *!/
function taiji(...arg) {
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);
}
taiji(1,2,3);

/!**
 * 声明两个数组arr1和arr2，然后我们把arr1赋值给arr2，
 * 然后我们改变arr2的值，发现arr1的值也改变了
 * *!/
let arr1=['www','taiji','com'];
// let arr2 = arr1;
let arr2 = [...arr1];
console.log(arr2);
arr2.push('yj');
console.log(arr2);
console.log(arr1);

/!**
 * rest运算符
 * *!/
function taiji(first,...arg) {
    console.log(arg.length);  // --->7
    console.log(first);  // ---> "0"
    console.log(arg);  // 除固定的元素以外剩下的所有元素
}
taiji(0,1,2,3,4,5,6,7);

/!**
 * 循环输出rest运算符
 * *!/
function taiji(first,...arg) {
    for (let val of arg){
       console.log(val);
    }
}
taiji(0,1,2,3,4,5,6,7);


/!**
 *
 * 四、字符串模板
 *
 * *!/

/!**
 * es5字符串拼接的例子
 * *!/
let yj = '杨静';
let blog = '非常高兴能看到这篇文章，我是'+yj+',主要内容是字符串模板';
document.write(blog);

/!**
 * es6写法
 * *!/
let test = '测试';
let demo = `这是一个<b>${test}</b>`;
document.write(demo);

/!**
 *
 * 字符串模板对运算的支持
 *
 * *!/
let a=1;
let b=2;
let result=`${a+b}`;
// let result=a+b;
document.write(result);

/!**
 * 字符串查找
 * *!/
let test = '测试';
let demo = '这是一个测试';
// es5的写法
document.write(demo.indexOf(test));  // 返回下标 ---> 4
// es6直接用includes就可以判断，不再返回索引值
document.write(demo.includes(test));   // --->true

// 判断开头是否存在
document.write(demo.startsWith(test));

// 判断结尾是否存在
document.write(demo.endsWith(test));

/!**
 * 复制字符串
 * *!/
document.write('aaa'.repeat(3));


/!**
 *
 * 五、数字操作
 *
 * *!/

/!**
 * 二进制 Binary
 * *!/
let binary = 0B010101;
console.log(binary);   //  --->  21

/!**
 * 八进制
 * *!/
const octal = 0o666;
console.log(octal);   // --->438

/!**
 * 如何判断是否是数字
 * *!/
let a = 13/2;
console.log(Number.isFinite(a));
console.log(Number.isFinite('yj'));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(undefined));

/!**
 * es5判断NaN
 * *!/
console.log("*********************************");
console.log(isNaN(NaN));
console.log(isNaN(undefined));
console.log(isNaN('taiji'));
console.log(isNaN(123));
console.log(isNaN({}));
console.log(isNaN(100+'2a'));
console.log("*********************************");
/!**
 * es6判断NaN
 * *!/
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN('taiji'));
console.log(Number.isNaN(123));
console.log(Number.isNaN({}));
console.log(Number.isNaN(100+'2a'));
console.log(33333)
console.log(parseInt("abc1111"));
console.log(Number.isNaN(parseInt("abc111")));

/!**
 * Number.isInteger 判断是否为整数
 * *!/
let a=918.1;
console.log(Number.isInteger(a));
console.log(Number.parseInt(a));
console.log(Number.parseFloat(a));

/!**
 * 整数取值范围操作
 * *!/
let yj = Math.pow(2,53)-1;
console.log(yj);

/!**
 * 最大安全整数
 * *!/
console.log(Number.MAX_SAFE_INTEGER);

/!**
 * 最小安全整数
 * *!/
console.log(Number.MIN_SAFE_INTEGER);
console.log(9007199254740991333);

/!**
 * 安全整数判断isSafeInteger()
 * *!/
console.log(Number.isSafeInteger(yj));

/!**
 * 六、es6新增的数组知识
 * *!/
let json = {
    '0':'yj',
    '1':'杨静',
    '2':'太极学院',
    length:3
    // length必须写
};
console.log(json);

/!**
 * json数组格式转化
 * 把json数组转换成array  Array.from()
 * *!/
let arr = Array.from(json);
console.log(arr);

/!**
 * Array.of方法
 * *!/
let arr = Array.of(3,4,5,6);
console.log(arr);

let arr = Array.of('太极','yangjing','太极学院');
console.log(arr);

/!**
 * find() 实例方法
 *      value:表示当前查找的值
 *      index:表示当前查找的数组索引
 *      arr:表示当前数组
 * *!/
let arr=[1,2,3,4,5,6,7,8];
var v = arr.find((value,index,arr)=>{
   // return value>4;      // --->  5
   return index>4;    // --->  6
});
console.log(v);

/!**
 * findIndex()方法
 * *!/
let arr1 = [1,2,3,4,5,6,7,8];
var i = arr1.findIndex((value) => value>4);
console.log(i);   // --->  4

/!**
 * filter()方法  不同之处在于filter返回的是数组
 * *!/
let arr2 = [1,2,3,4,5,6,7,8];
var a = arr2.filter((value)=> value>4);
console.log(a);  // ---> 5 6 7 8

/!**
 * 数组去重
 * *!/
var myArr = [1,3,2,3,2,4,3,2,6,9];
// 箭头函数  箭头前面是传的参数   箭头后面是 返回的值
console.log(myArr.filter((value,index,arr)=>arr.indexOf(value)===index));

/!**
 * fill(替换的字符串，开始的索引，结束的索引)实例方法
 * 注意：fill 左闭右开
 * *!/
let arr = ['yj','杨静','太极','你好'];
arr.fill('web',1,3);
console.log(arr);

/!**
 * 数组循环
 * 其中item为数组中的某一个值
 * 返回数组中的值
 * *!/
let arr=['yj','杨静','太极'];
for (let item of arr){
   console.log(item);
}

/!**
 * for...of数组索引
 * 数组循环
 * 返回数组中值的索引
 * *!/
let arr=['yj','杨静','太极'];
for (let index of arr.keys()){
   console.log(index);
}

/!**
 * 同时输出数组的内容和索引，用entries()这个实例方法，配合for...of
 * *!/
let arr=['yj','杨静','太极'];
for (let [index,val] of arr.entries()){
   console.log(index+':'+val);
}

/!**
 * entries方法  切分数组
 * *!/
let arr=['yj','杨静','太极'];
let list = arr.entries();
console.log(list);
console.log(list.next().value);
console.log('******************');
console.log(list.next().value);
console.log('&&&&&&&&&&&&&&&&&&');
console.log(list.next().value);
console.log('..................');


/!**
 *
 * 七、es6 箭头函数
 *    （严谨模式和默认值是不能重复存在的）
 *
 * *!/
// es5中的写法
// 'use strict'
function add(a,b=2) {
    // 'use strict'
    if (a===0){
       throw new Error('This is error');
    }
    return a+b;
}
console.log(add(1));  // --->  3
console.log(add.length);  // --->  1
// 此处获得的参数的个数是必须传递参数的个数，如果有默认则不计入其内
// 有严谨模式'use strict'函数有默认值的时候是不行的



function add(a,b) {
   'use strict';
    return a+b;
}
console.log(add.length);
//这时控制台打印出了2，但是如果我们去掉严谨模式，并给第二个参数加上默认值的话，这时候add.length的值就变成了1，
// 也就是说它得到的是必须传入的参数。
// 此处获得的参数的个数是必须传递参数的个数，如果有默认自则不计入其内

/!**
 * 默认值  es6箭头函数
 * *!/
var add=(a,b=2) => a+b;
console.log(add(1));    // -->  3

var add=(a,b=1)=>{
    console.log('taiji');   // --> taiji
    return a+b;
}
console.log(add(1));  // --> 2


/!**
 *
 * 八、函数和数组补充
 *
 * *!/

/!**
 * 对象的函数解构 json
 * *!/
let a = undefined;
function fun(a=4) {
    console.log(a);
}
fun(a);   // --->  4


/!**
 * 对象的函数结构
 * *!/
let json = {
    a:'yj',
    b:undefined
};
function fun({a,b='web'}) {
    console.log(a,b);
}
fun(json);     // -->  yj web


/!**
 * 数组的函数解构
 * *!/
let arr = ['yj','杨静','太极'];
function fun(a,b,c,d){
    console.log(a,b,c,d)
}
// 扩展运算符
fun(...arr);  // --> yj 杨静 太极 undefined


/!**
 * in的用法
 * *!/
let obj ={
    a:'yj',
    b:'杨静'
};
// c指key
console.log('c' in obj);  // false
console.log('b' in obj);  // true

/!**
 * 数组判断
 * *!/
let arr=[,,,];
console.log(arr.length);   // --> 3
console.log(arr[0]);  // --> undefined
console.log(0 in arr);  // --> false
// 注意：这里的0指的是数组下标位置是否为空
let arr1=['yj','杨静'];
console.log(0 in arr1);  // true

/!**
 * 数组遍历（foreach）
 * *!/
let arr = ['yj','杨静','太极'];
arr.forEach((val,index)=>console.log(index,val));

/!**
 * 数组遍历（filter）
 * 将数组的内容以字符串的形式输出
 * *!/
let arr = ['yj','杨静','太极'];
arr.filter(x => console.log(x));

/!**
 * 数组遍历 some
 * 将数组的内容以字符串的形式输出
 *!/
let arr = ['yj','杨静','太极'];
arr.some(x => console.log(x));

/!**
 * 数组遍历 map替换
 *!/
let arr = ['yj','杨静','太极'];
console.log(arr.map(x=>'web'));

/!**
 * 数组转换成字符串
 * *!/
let arr = ['yj','杨静','太极'];
console.log(arr.toString());
console.log(arr.join('|'));

*/


/**
 *
 * 对象
 *
 * */
/**
 * 一、es6中对象
 * */
/**
 * 1. 对象赋值
 * */
// let name='yj';
// let skill = 'web';
// var obj = {name,skill};
// console.log(obj);   // -->{name: "yj", skill: "web"}name: "yj"skill: "web"__proto__: Object

/**
 * 2. key值的构建
 * */
// let key = "skill";
// var obj = {
//     [key]:'web'
// };
// console.log(obj.skill);   // -->  web

/**
 * 3. 自定义对象的方法
 * */
// let obj = {
//     add:function (a,b) {
//         return a+b;
//     }
// };
// console.log(obj.add(1,2));   // -->  3

/**
 * Object.is() 对象比较
 * */
// let obj1 = {name:'yj'};
// let obj2 = {name:'yj'};
// console.log(obj1.name === obj2.name);   // --> true
// console.log(Object.is(obj1.name,obj2.name));  // --> true
// // ===同值相等   is严格相等
// console.log(+0===-0);    // ---> true
// console.log(NaN===NaN);  // ---> false
// console.log(Object.is(+0,-0));  // ---> false
// console.log(Object.is(NaN,NaN));  // ---> true

/**
 * Object.assign( ) 合并对象
 * */
// let a={a:'yj'};
// let b={b:'杨静'};
// let c={c:'web'};
// let d=Object.assign(a,b,c);
// console.log(d);   // --> {a: "yj", b: "杨静", c: "web"}


/**
 *
 * 二、Symbol在对象中的作用，ES6新增的数据类型
 *    （Symbol是原始数据类型，不需要用new）
 *
 * */

/**
 * 1. 声明Symbol
 * */
// let a = new String;
// let b = new Number;
// let c = new Boolean;
// let d = new Array;
// let e = new Object;
// let f = Symbol();
// console.log(typeof(f));

/**
 * 2. Symbol的打印
 * */
// let yj = Symbol('杨静');
// console.log(yj);  // ---> Symbol(杨静) 红色
// console.log(yj.toString());   // ---> Symbol(杨静) 黑色

// /**
//  * 3. Symbol在对象中的应用
//  * */
// let yj = Symbol();
// let obj = {
//     [yj]:'杨静'    // key值的构建
// };
// console.log(obj[yj]);  // ---> 杨静
//
// obj[yj] = '太极学院';
// console.log(obj[yj]);  // ---> 太极学院

/**
 * 4. Symbol对象元素的保护作用
 * */
// let obj = {name:'yj',skill:'web',age:18};
// for (let item in obj){
//     console.log(obj[item]);   // --> yj\n web\n 18
// }

// let obj ={name:'yj',skill:'web'};
// let age = Symbol();
// obj[age]=18;
// console.log(obj);   // --> {name: "lj", skill: "web", Symbol(): 18}
// for(let item in obj){
//     console.log(obj[item]);  // --> yj\n web
// }
// console.log(obj[age]);  // --> 18

/**
 * 注意，Symbol函数的参数只是表示对当前 Symbol 值的描述，
 因此相同参数的Symbol函数的返回值是不相等的。
 *
 */

// 没有参数的情况
// let s1 = Symbol();
// let s2 = Symbol();

// console.log(s1 === s2 );   // false

// 有参数的情况
// let s1 = Symbol('foo');
// let s2 = Symbol('foo');

// console.log(s1 === s2 );   // false


/**
 *
 * 三、Set和WeakSet数据结构
 *
 * */

/**
 * 1. set的声明（有自动去重操作）
 * */
// let setArr = new Set(['yj','杨静','web','杨静']);
// setArr.add('前端');
// console.log(setArr);   // --> Set(4) {"yj", "杨静", "web", "前端"}
// // has查找set中的值
// console.log(setArr.has('yj'));   // --> true

/**
 * 2. set的增删改
 * */
// setArr.clear();   // 删除全部
// setArr.delete('web');   // 删除一个
// console.log(setArr);

//循环输出
//for...of
// for(let item of setArr) {
//     console.log(item);
// }
// // forEach
// setArr.forEach((value)=>console.log(value));

/**
 * 3. size属性 （size属性可以获得set值的数量）
 * */
// console.log(setArr.size);  // --> 3

/**
 * 4. WeakSet的声明  这块有个坑，偶尔会输出两遍obj的值
 * */
// let weakObj = new WeakSet();
// let obj = {a:'yj',b:'杨静'};
// let obj1=obj;  // 输出一个
// // let obj1={a:'yj',b:'杨静'};  // 输出两个obj的值
// weakObj.add(obj);
// weakObj.add(obj1);
// console.log(weakObj);

/**
 *
 * 四、Map的数据结构
 *
 * */
/**
 * 1. Json和map的对比
 *      map的key值 可以是任意类型
 * */
// json
// let json = {
//     name:'yj',
//     skill:'web'
// };
// console.log(json.name);   // --> yj
//
// // // map
// var map = new Map();
// map.set(json,'I am');
// // console.log(map);  // --> Map(1) {{…} => "I am"}
// map.set('yj',json);
// console.log(map);  // --> Map(1) {"yj" => {…}}

/**
 * 2. map的增删查（get取值）
 * */
// console.log(map.get(json));  // 获取json的值
// // delete删除特定的值
// map.delete(json);
// console.log(map);  // --> Map(0) {}
// // clear 删除特定的值
// map.clear();

/**
 * 3. map的size属性
 * */
// console.log(map.size);
//
// /**
//  * 4. 查找是否存在 用has()
//  * */
// console.log(map.has('yj'));

/**
 *
 * 五、用Proxy进行预处理（作用：用来改变默认方法和属性的）
 * proxy 代理 ES6 增强 对象和函数(方法) 生命周期 预处理
 *
 * */

/**
 * 1. 声明Proxy的基本形式new Proxy({目标值},{handler});
 * */

/**
 * 2. get属性
 *      get属性：get属性是在你得到某对象属性值时预处理的方法，他接受三个参数
 •          target：得到的目标值
 •          key：目标的key值，相当于对象的属性
 •          property：这个不太常用，用法还在研究中。
 * */

// const employee={
//     firstName:'yang',
//     lastName:'jing'
// };
//
// console.group('employee');
// console.log(employee.firstName);
// console.log(employee.lastName);
// console.log(employee.org);    // --> undefined
// console.log(employee.fullName);    // --> undefined
// console.groupEnd();
//
// let handler = {
//     get:function (target,fieldName) {     // 这里的fieldName就相当于key值，即fullName
//         if (fieldName === 'fullName'){
//             return `${target.firstName} ${target.lastName}`;
//         }
//         return fieldName in target ?
//             target[fieldName] :
//             `No such property as,'${fieldName}'!`
//     }
// };
// let p = new Proxy(employee,handler);  // 前者：目标值；后者：handler
// console.log('########################');
// console.group('proxy');
// console.log(p.firstName);
// console.log(p.lastName);
// console.log(p.org);
// console.log(p.fullName);
// console.groupEnd();


/**
 * 3. set属性
 *      set属性：set属性是值你要改变Proxy属性值时，进行的预先处理。它接收四个参数。
 •      target:目标值。
 •      key：目标的Key值。
 •      value：要改变的值。
 •      receiver：改变前的原始值。
 * */
/**
 * 改变set方法来实现一个验证的例子：新建一个handler，重命名为validator
 * */
// const  validator = {
//     set: function (obj,prop,value) {
//         if (prop === 'age'){
//             if (!Number.isInteger(value)){
//                 throw new TypeError('Age只能为整数！');
//             }
//             if (value < 0){
//                 throw new TypeError('Age不合法！');
//             }
//         }
//     }
// };
// // 然后再新建一个Proxy:
// let pr = new Proxy(employee,validator);
// // 然后可以尝试设置一个不合法的属性
// // pr.age = 'test';
// pr.age=-2;

/**
 * 例子
 * */
// var pro = new Proxy({
//     // target
//     add:function (val) {
//         return val+100
//     },
//     name:'I am yj'
// }, {
    // get(handler)
//     get:function (target,key,property) {
//         console.log('come in Get!');
//         return target[key];
//     },
// });
// console.log(pro.name);    // --> I am yj

//     // set
//     set: function (target, key, value, receiver) {
//         console.log(`setting ${key} = ${value}`);
//         return target[key] = value + '222';
//     }
// });
// console.log(pro.name);
// pro.name='杨静';   // 此处重新给name赋值
// console.log(pro.name);   // 打印出新的name值+222

/**
 * 4. Apply的使用: （与Reflect连用）
 *      apply的作用是调用内部的方法，它使用在方法体是一个匿名函数时。
 * */
// let target = function (val) {
//     console.log("I am yj");
//     return val+=100;
// };
// let handler = {
//     /**
//      * ctx: 表示目标对象的上下文对象9
//      * args：表示目标对象的数组参数集合
//      * */
//     apply(target,ctx,args){
//         console.log('do apply');
//         return Reflect.apply(...arguments);
//     }
// };
// let pro = new Proxy(target,handler);
// console.log(pro(3));

/**
 *
 * 5. promise对象的使用
 *
 * */

/**
 * promise是什么？
 *      1.已经完成了 resolved（完成态）
 •      2.因为某种原因被中断了 rejected（失败态）
 •      3.初始状态 pending（未完成）
 * */

/**
 * promise的then()方法
 • then()方法传递的两个参数中:
 • 第一个参数（函数）对应着完成态的操作，也就是resolve时调用
 • 第二个参数（函数）对应着失败态的操作，也就是reject时调用（第二个参数可以没有）
 * */
// let state = 1;
// function step1(resolve,reject) {
//     console.log('1.开始-洗菜做饭');
//     if (state==1){
//         resolve('洗菜做饭完成')
//     } else {
//         reject('洗菜做饭-错误')
//     }
// }
//
// function step2(resolve,reject) {
//     console.log('2.开始-坐下来吃饭');
//     if (state==1){
//         resolve('坐下来吃饭')
//     } else {
//         reject('坐下来吃饭-错误')
//     }
// }
//
// function step3(resolve,reject){
//     state = 0;
//     console.log('3.开始-收拾桌子');
//     if(state==1){
//         resolve('收拾桌子')
//     }else{
//         reject('收拾桌子-错误')
//     }
// }
// new Promise(step1).then(function (val) {
//     console.log(val);
//     return new Promise(step2);
// }).then(function (val) {
//     console.log(val);
//     return new Promise(step3);
// }).then(function (val) {
//     console.log(val);
// });

/**
 *
 * 6. class 类
 *
 * */

// 类的声明
class Coder{
    name(val){
        console.log(val);
        return val;
    }
    skill(val){
        console.log(this.name('杨静')+':'+'skill-'+val);
    }
    // 类的传参(constructor)--定义类方法时，自带的传参方法
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    add(){
        return this.a+this.b;
    }
}
// // 类的实例化
// let yj = new Coder(2,3);
// yj.name('杨静');
// yj.skill('www');
// console.log(yj.add());

// 类的继承
class htmler extends Coder{

}
let yjDev = new htmler;
yjDev.name('杨静');


