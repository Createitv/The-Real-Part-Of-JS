function sayHi() {
  console.log(this.age);
  console.log("Hello, world!");
}
obj = {
  age: 16
}
// call是一个函数，是函数对象的方法
sayHi.call() //什么都不绑定，this指向window
sayHi.call(obj) // 绑定obj，this指向了obj{ age: 16 }

let dog = {
  name: "旺财",
  sayName(){
    console.log("我是"+ this.name);
  },
  eat(food, food2) {
    console.log("我喜欢吃", food, food2);
  }
}
let cat = {
  name: "喵喵"
}
// 
dog.sayName()
dog.sayName.call(cat)
// dog.eat("egg")

// call传参数 依次传
// apply传一个数组，作用一样
dog.eat.call(cat, "fish", 'fish2')
dog.eat.apply(cat, ['fish', 'fish2'])
// bind不会直接调用,需要返回值接收再调用
dog.eat.bind(cat, "fish", 'fish2')
let fun = dog.eat.bind(cat, "fish", 'fish2')
fun()