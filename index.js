//      快捷键
//  Ctrl + d  ：复制一行
//  index.html 文件必须放在根目录下，必须叫这个名字

// let hy = '侯彦';
// let blog = '胡说待遇侯彦大酒店'
// document.write(blog.includes(hy))

// var i = 1;
// const a = 3;
// {
//     let i = 2;
//     console.log('let:i=',i);
// }
// console.log(a);
// console.log('var:i=',i);

// let a = 6;
// let b = 2;
// //``：不是单引号，是tab键上的转义符号，一共有四种
// let result = `${a/b}`;
// document.write(result);
//*******************************************************************
// // 第2节 新的声明方式
// var a="aa";
// console.log(a);

//如何理解var声明全局变量
// 用匿名函数对它进行包裹，然后在匿名函数中调用这个a变量，看是否可以调用。
// let a="gf33535";
// window.onload = function(){
//     console.log(a);
// }

//区块的方式测试var是全局声明
// var a = 2;
// {
//     leta = 3;
// }
// console.log(a);
// 测试let局部申明
//只在区块里面申明，看控制台显示什么
// var a = 2;
// {
//     let a = 3;
// }
// console.log(a);
// 用var申明的循环
// for (let i=0;i<10;i++){
//     console.log('循环体中：'+i);
// }
// console.log('循环体外：'+i);
// 用const申明常量
// const a='hh';
// var a2='哈哈';
// console.log(a);
// console.log(a2);

// 变量的解构赋值
// let a = 0;
// let b = 1;
// let c = 2;
// 数组结构结构的方式
// let [a,b,c,d] = [1,2,3];
// console.log(a);
// console.log(d);

// 解构的默认值  undefined相当于什么都没有，b是默认值。

// let [a,b="haha"] = ['哈哈',undefined];
// console.log(a+b);   // 控制台显示“哈哈haha”
// undefined和null的区别
// let [a,b="lj"]=['哈哈',null];
// console.log(a+b); //控制台显示“哈哈null”

// 2.2 对象的解构赋值
// let {foo,bar} = {bar:'哈哈',foo:'haha'};
// console.log(foo+bar); //控制台打印出了“haha哈哈“

// // 圆括号的使用
// let foo;
// // // {foo}={foo:'haha'};
// // ({foo}={foo:'haha'});
// // console.log(foo);

// 字符串的解构
// const [a,b,c,d,e]='abcde';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// 扩展运算符            未知参数个数时用，不确定参数个数
// 对象扩展运算符
// function taiji(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }
// taiji(1,2,3);

// 声明两个数组arr1和arr2，然后我们把arr1赋值给arr2，然后我们改变arr2的值，发现arr1的值也改变了
// let arr1=['www','taiji','com'];
// // let arr2 = arr1;
// let arr2 = [...arr1];
// console.log(arr2);
// arr2.push('lj');
// console.log(arr2);
// console.log(arr1);

// rest ...
// function taiji(first,...arg){
//     console.log(arg.length);//因为第一个元素已经确定了，所以长度不把他加在里面
//     console.log(first);
//     console.log(arg);//显示除了第一个已确定的元素外的元素
// }
// taiji(0,1,2,3,4,5,6,7);

//如何循环输出rest运算符
// function taiji(first,...arg){
//     for(let val of arg){   //循环输出
//         console.log(val);
//     }
// }
// taiji(0,1,2,3,4,5,6,7);

// 5.字符串模板
//ES5字符串拼接的例子
// let h='哈哈';
// let blog = '非常高兴你能看到这篇文章，我是你的老师'+h+'。这节课我们学习字符串模版。';
// document.write(blog);

// ES6写法
// let hh='哈哈';
// let blog = `<h1>非常高兴你能看到这篇文章</h1>，我是你的老师<h2>${hh}</h2>,<b>这节课我们学习字符串模版。</b>`;
// document.write(blog);

// 字符串模板对运算的支持
// let a=1;
// let b=2;
// let result=`${a+b}`;
// // let result = a+b;
// document.write(result);

//字符串查找
// ES5的写法
// let lj='字符串';
// let blog = '非常高兴你能看到这篇文章，我是你的老师梁娟。这节课我们学习字符串模版。';
// //标点符号不算
// document.write(blog.indexOf(lj));

// ES6直接用includes就可以判断，不再返回索引值。
// document.write(blog.includes(lj));
// // // 判断开头是否存在
// document.write(blog.startsWith(lj));
// // 判断结尾是否存在：
// document.write(blog.endsWith(lj));

//复制字符串
// document.write('*'.repeat(3));

//6.数字操作
// 二进制 Binary
// let binary = 0B010101;
// console.log(binary);
// // 八进制
// const octal = 0o666;
// console.log(octal);

// 如何判断是否是数字
// let a = 11/4;
// console.log(Number.isFinite(a));
// console.log(Number.isFinite('lj'));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(undefined));

// ES5 判读NaN：是数字就是false
// console.log("******************************")
// console.log(isNaN(NaN));
// console.log(isNaN(undefined));
// console.log(isNaN('taiji'));
// console.log(isNaN(123));
// console.log(isNaN({}));
// console.log(isNaN(100+'2a'));
// console.log("#############################")

// isNaN() 函数用于检查其参数是否是非数字值。
// Number.isNaN() 方法的参数值必须是Number类型的才能进行判断（这是基础），否则返回的都是false。
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN('taiji'));
// console.log(Number.isNaN(123));
// console.log(Number.isNaN({}));
// console.log(Number.isNaN(100+'2a'));
// console.log(333333);
// console.log(Number.isNaN(parseInt("abc1111")));
// console.log(isFinite(``));
//Number.isInteger 判断是否为整数
// let a= 918.1
// console.log(Number.isInteger(a));
// console.log(Number.parseInt(a));
// console.log(Number.parseFloat(a));

// 整数取值范围操作
// let lj = Math.pow(2,53)-1;
// console.log(lj);
// 最大安全整数
// console.log(Number.MAX_SAFE_INTEGER);
// // // 最小安全整数
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(9007199254740991333)
// 安全整数判断isSafeInteger( )
// console.log(Number.isSafeInteger(lj));

// // ES6新增的数组知识
// let json ={
//     '0':'lj',
//     '1':'梁娟',
//     '2':'太极员工',
//     length:3
// }
// console.log(json);

//前面的下标可以是字母
// let json ={
//     'c':'ss',
//     'g':'dd',
//     length:2
// }
// console.log(json);

//把json数组转换成array  Array.from方法
//前提是 json 中必须标明长度“length”，下标必须为数字，没有长度是空数组
// let arr = Array.from(json);
// console.log(arr);

// // Array.of方法
// let arr = Array.of(3,4,5,6);
// console.log(arr);

// let arr = Array.of('太极','liangjuan','开发者社区')
// console.log(arr)

//find() 实例方法   value:值（必须有）   index：下标   arr：数组
// let arr=[1,2,3,4,5,6,7,8];
// var v = arr.find((value,index,arr)=>{
//     return value >4;     //判断值是否大于4
//     // return index > 4;      //判断下标是否大于4
// });
// console.log(v)

//findIndex()方法         结果返回下标值
// let arr1=[1,2,3,4,5,6,7,8];
// var i = arr1.findIndex((value) => value >4);
// console.log(i);

//filter()方法             不同之处在于filter返回的是剩下满足条件的数组
// let arr2=[1,2,3,4,5,6,7,8];
// var a = arr2.filter((value) => value >4);
// console.log(a)

// 数组去重
// var myArr = [1,3,4,5,6,3,7,4];
// console.log(myArr.filter((value,index,arr)=>arr.indexOf(value)===index));

// fill     用来对数组进行填充
// let arr=['hh','哈哈','瑟瑟发抖','订单'];
// arr.fill('web',1,3);//      用 web 填充   从下标1开始到下标2结束，左闭右开
// console.log(arr);
// fill左闭右开，包前不包后

// //数组循环
// let arr=['hh','哈哈','瑟瑟发抖'];
// for (let item of arr){
//    console.log(item);
// }

// for…of数组索引
// //数组循环
// let arr=['hh','哈哈','瑟瑟发抖'];
// for (let index of arr.keys()){
//    console.log(index);//输出数组的下标
// }

// 同时输出数组的内容和索引：我们用entries()这个实例方法，配合我们的for…of循环
// let arr=['hh','哈哈','瑟瑟发抖'];
// for(let [index,val] of arr.entries()){
//     console.log(index+':'+val);
// }

//entries方法 切分数组
// let arr=['hh','哈哈','瑟瑟发抖'];
// let list = arr.entries();
// console.log(list);
// console.log(list.next().value);
// console.log('******************')
// console.log(list.next().value);
// console.log('&&&&&&&&&&&&&&&&&&&')
// console.log(list.next().value);
// console.log('$$$$$$$$$$$$$$$$$$$')

//ES6箭头函数
// 首先是ES5中的写法
// 'use strict'
// function add(a,b=2){
//     // 'use strict'
//     if(a === 0){
//         throw new Error('This is error');
//     }
//     return a+b;
// }
// console.log(add(1))
// console.log(add.length);
// 此处获得的参数的个数是必须传递参数的个数，如果有默认自则不计入其内
// 有严谨模式‘use strict’函数有默认值的时候是不行的
// function add(a,b){
//     // 'use strict'
//     return a+b;
// }
// console.log(add.length);
//这时控制台打印出了2，但是如果我们去掉严谨模式，并给第二个参数加上默认值的话，这时候add.length的值就变成了1， 也就是说它得到的是必须传入的参数。
// // 此处获得的参数的个数是必须传递参数的个数，如果有默认自则不计入其内

// 默认值  es6箭头函数
// var add=(a,b=2) => a+b;
// console.log(add(1));

// var add=(a,b=1)=>{
//     console.log('taiji')
//     return a+b;
// }
// console.log(add(1))

//对象的函数解构 json
// let a = undefined;
// function fun (a=4){
//     console.log(a);
// }
// fun(a);
//
// console.log(a);

// 对象的函数结构
// let json = {
//     a:'hh',
//     b:undefined
// }
// function fun({a,b='web'}){
//     console.log(a,b);
// }
// fun(json);
//
// console.log(json);

//数组的函数解构
// let arr = ['hh','哈哈','山姜素'];
// function fun(a,b,c,d){
//     console.log(a,b,c,d)
// }
// //
// fun(...arr);
// console.log(arr)

// in的用法
let obj ={
    a:'hh',
    b:'哈哈'
}
// // c指key
console.log('c' in obj);//判断下标 c 是否在对象中   false
console.log('a' in obj);//判断下标 a 是否在对象中   true
// 数组判断

// let arr=[,,,];
// console.log(arr.length); //3     明明可以放4个元素，结果返回3
// console.log(arr[0])
// console.log(0 in arr);  // false
// // 注意：这里的0指的是数组下标位置是否为空。
// let arr1=['hh','哈哈'];
// console.log(0 in arr1);  // true
// console.log(0 in arr);
// 数组遍历 forEach
// let arr = ['hh','哈哈','大酒店'];
// arr.forEach((val,index)=>console.log(index,val));
// 数组遍历 filter
// let arr = ['hh','哈哈','大酒店'];
// arr.filter(x => console.log(x));
// // 数组遍历 some
// let arr = ['hh','哈哈','大酒店'];
// arr.some(x => console.log(x));
// // 数组遍历 map替换
// let arr = ['hh','哈哈','大酒店'];
// console.log(arr.map(x=>'web'));
// 数组转换成字符串
// let arr = ['hh','哈哈','大酒店'];
// console.log(arr.toString());
// console.log(arr.join('|'));

// 对象
// 对象赋值
// let name = 'lj';
// let skill = 'web';
// var obj = {name,skill};
// console.log(obj);

// // key值的构建
// let key = "skill"
// var obj ={
//     [key]:'web'
// }
// console.log(obj.skill);

//自定义对象方法
// let obj = {
//     add:function(a,b){
//         return a+b;
//     }
// }
// console.log(obj.add(1,2))

// Object.is( ) 对象比较
// is()
// let obj1={name:'lj'};
// let obj2={name:'lj'};
// console.log(obj1.name===obj2.name);
// console.log(Object.is(obj1.name,obj2.name));
// ===同值相等 is严格相等
// console.log(+0===-0);
// console.log(NaN===NaN);
// console.log(Object.is(+0,-0));
// console.log(Object.is(NaN,NaN));

//assign    实现对象的合并
// let a={a:'lj'};
// let b={b:'梁娟'};
// let c={c:'web'};
// let d=Object.assign(a,b,c);
// console.log(d);

// Symbol  ES6新增的       是一种原始的数据类型
// let a = new String;
// let b = new Number;
// let c = new Boolean;
// let d = new Array;
// let e = new Object;
// let f = Symbol();
// console.log(typeof(f));

// Symbol的打印
// let lj = Symbol('梁娟');
// console.log(lj); //显示字体红色
// console.log(lj.toString());


//注意，Symbol函数的参数只是表示对当前 Symbol 值的描述，
// 因此相同参数的Symbol函数的返回值是不相等的。

// 没有参数的情况
// let s1 = Symbol();
// let s2 = Symbol();
//
// console.log(s1 === s2 )// false

// 有参数的情况
// let s1 = Symbol('foo');
// let s2 = Symbol('foo');
//
// console.log(s1 === s2 ) // false


// Symbol在对象中的应用
// let lj = Symbol();
// let obj = {
//     [lj]:'梁娟'
// }
// // console.log(obj[lj]);
// obj[lj]='太极员工'
// console.log(obj[lj]);

//Symbol对象元素的保护作用
// let obj = {name:'lj',skill:'web',age:18};
// for (let item in obj){
//     console.log(obj[item]);
// }
// let obj ={name:'lj',skill:'web'};
// let age = Symbol();
// obj[age]=18;
// console.log(obj);
// for(let item in obj){//for...in... 循环输出
//     console.log(obj[item]);
// }
// console.log(obj[age]);

// set的声明       去重操作，元素唯一
// let setArr = new Set(['lj','梁娟','web']);
// setArr.add('前端技术');
// console.log(setArr);
// // // has查找set中的值
// console.log(setArr.has('lj'));

// Set值的增删改
// setArr.clear(); //删除全部
// // // 删除一个
// setArr.delete('web');
// console.log(setArr);

//循环输出
//for...of
// for(let item of setArr){
//     console.log(item);
// }
// forEach
// setArr.forEach((value)=>console.log(value));    //效果和上面for...of...等同
// size属性  size属性可以获得Set值的数量。
// console.log(setArr.size);
//WeakSet的声明  这块有个坑，如果则会输出两遍obj的值
// let weakObj = new WeakSet();
// let obj={a:'lj',b:'梁娟'};
// let obj1 = obj;
// let obj1={a:'lj',b:'梁娟'};
// weakObj.add(obj);
// weakObj.add(obj1);
// console.log(weakObj);

//map数据类型
// json
// let json={
//     name:'lj',
//     skill:'web'
// };
// console.log(json.name);

// =>
// var map = new Map();
// map.set(json,'I am');
// console.log(map);
// map.set('lj',json);
// console.log(map);
//map增删查
//get 取值
// console.log(map.get(json));
// // delete 删除特定的值
// map.delete(json);
// console.log(map);
// clear 删除全部的值
// map.clear();
//size
// console.log(map.size);
// // //has
// console.log(map.has('lj'));



//proxy 代理 ES6 增强 对象和函数(方法) 生命周期 预处理
//
// let obj = {
//     add:function(val){
//         return val+100
//     },
//     name:'I am lj'
// }
// console.log(obj.add(100));
// console.log(obj.name);

// for example          get：得到某对象属性值时预处理的方法，接收三个参数，第三个property不常用
const employee = {
    firstName: 'liang',
    lastName: 'juan'
};
//
// console.group('employee');
// console.log(employee.firstName);
// console.log(employee.lastName);
// console.log(employee.org);
// console.log(employee.fullName);
// console.groupEnd()
// let handler = {
//     get: function(target, fieldName) {
//         //get属性有三个值，target，key，property ，其中key相当于对象的属性，可以自定名称
//         if(fieldName === 'fullName' ) {
//             return `${target.firstName} ${target.lastName}`;
//         }
//         return fieldName in target ?
//             target[fieldName] :
//             `No such property as, '${fieldName}'!`
//     }
// };
//Proxy用来改变对象默认方法和属性的
// let p = new Proxy(employee, handler);

// 改变set方法来实现一个验证的例子：新建一个handler，重新命名为validator
// const validator = {
//     set: function(obj, prop, value) {
//         if (prop === 'age') {
//             if(!Number.isInteger(value)) {
//                 throw new TypeError('Age is always an Integer, Please Correct it!');
//             }
//             if(value < 0) {
//                 throw new TypeError('This is insane, a negative age?');
//             }
//             console.log(value)
//         }
//     }
// };
// 然后再新建一个Proxy：
// let pr = new Proxy(employee, validator);
// 然后可以尝试设置一个不合法的属性，比如：
// pr.age = "test";
// pr.age = -3;
// pr.age = 3;



// console.log('#########################')
// console.group('proxy');
// console.log(p.firstName);
// console.log(p.lastName);
// console.log(p.org);
// console.log(p.fullName);
// console.groupEnd()


// var pro = new Proxy({
//     add:function(val){
//         return val+100
//     },
//     name:'I am lj'
// }, {
//     // get
//     get: function (target, key, property) {
//         console.log('come in Get');
//         return target[key];
//     },
// });
// console.log(pro.name);
//    set
//     set: function (target, key, value, recriver) {
//         console.log(`setting ${key} = ${value}`);
//         return target[key] = value + '222';
//     }
// //
// });
// console.log(pro.name);
// pro.name = '梁娟'
// console.log(pro.name);

// apply的使用  ：调用内部的方法，在方法体是一个匿名函数
// let target = function(){
//     return 'I am lj';
// }
// let handler={
//     apply(target,ctx,args){
//         console.log('do apply');
//         return Reflect.apply(...arguments);
//     }
// }
// let pro = new Proxy(target,handler);
// console.log(pro(5));

//promise
//promise es5 回调地狱
// let state = 1;
// function step1(resolve,reject){
//     console.log('1.开始-洗菜做饭');
//     if(state==1){
//         resolve('洗菜做饭完成')
//     }else{
//         reject('洗菜做饭-错误')
//     }
// }
// // //
// function step2(resolve,reject){
//     console.log('2.开始-坐下来吃饭');
//     if(state==1){
//         resolve('坐下来吃饭')
//     }else{
//         reject('坐下来吃饭-错误')
//     }
// }
// //
// function step3(resolve,reject){
//     state = 0;
//     console.log('3.开始-收拾桌子');
//     if(state==1){
//         resolve('收拾桌子')
//     }else{
//         reject('收拾桌子-错误')
//     }
// }
// // //
// new Promise(step1).then(function(val){
//         console.log(val);
//     return new Promise(step2);
// }).then(function(val){
//     console.log(val);
//     return new Promise(step3);
// }).then(function(val){
//     console.log(val);
// });

// class 类
//类的声明
// class Coder {
//     name(val) {
//         console.log(val);
//         return val;
//     }
// }

// let lj = new Coder;
// lj.name('aa');
    // skill(val) {
    //     console.log(this.name('梁娟') + ':' + 'skill-' + val);
    // }
//
//
// // //     // 类的传参
//     constructor(a,b){
//         this.a = a;
//         this.b = b;
//     }
//     add(){
//         return this.a + this.b;
//     }
// }
//
// let lj = new Coder(1,2);
// lj.name('aa');
// lj.skill('web');
// console.log(lj.add())
//
// //类的继承
// class htmler extends Coder{
//
// }
// let ljDev = new htmler;
// ljDev.name('梁娟');

// 模块化
// import 引入  export 输出
