let pumpkin = {
  color: 'green',
  weight: '34 kg',
  text: function(){
    console.log(this);
    console.log('Color:', this.color);
    console.log('Weight:', this.weight);
  }
};

// Добавте до гарбуза властивість "ціна за кілограм" та метод, який би обчислював вартість гарбуза.

console.groupCollapsed('Вартість гарбуза');

pumpkin['ціна за кілограм'] = '10 грн';

pumpkin['вартість гарбуза'] = function(){
	return parseInt(this.weight)*parseInt(this['ціна за кілограм']);
}
console.log('Вартість гарбуза : '+pumpkin['вартість гарбуза']()+" грн");

console.groupEnd();

// Створіть метод, який би повертав копію гарбуза. Можна застосувати не глибоке копіювання.
// Створіть масив з п'яти гарбузів, використовуючи даний метод копіювання.

console.groupCollapsed('Масив з 5 гарбузів');

pumpkin.copy = function(){
	let copy = {};
	obj = this;
	for (let key in obj){
		copy[key]=obj[key];
	}
	return copy;
};

let pumpkins = [];

for (let i = 0; i < 5; i++){
	pumpkins[i] = pumpkin.copy();
}

console.log(pumpkins);

console.groupEnd();

// Задайте всім гарбузам випадкову вагу від 5 до 20 кг.
// Виведіть в консоль номер гарбуза та його ціну.

console.groupCollapsed('Ціни гарбузів');

for (let i = 0; i < pumpkins.length; i++){
	pumpkins[i].weight = getWeight();
	console.log('Гарбуз №'+(i+1) +' має ціну : ' +pumpkins[i]['вартість гарбуза']()+' грн');
}

console.groupEnd();

// Виведіть в консоль вагу всіх гарбузів:
// 12 кг; 19 кг; 11 кг; 16 кг; 18 кг
// Спробуйте обійтися однією командою: всі дії вписати в дужки:
// console.log(...);

console.groupCollapsed('Вага всіх гарбузів');

console.log(pumpkins.map(function(e){
	return e.weight;
}).join(' кг; ')+' кг');

console.groupEnd();

// Створіть функцію, що отримує у якості аргументів марки автомобілів і виводить їх в консоль в одну строку через кому та пробіл.

console.groupCollapsed('Марки автомобілів');

marks("жигуль","ауді","форд");

console.groupEnd();

// Створіть функцію, що отримує у якості аргументів гарбузи і виводить в кнсоль в стовбчик їх ціну. Передайте в функцію масив гарбузів.

console.groupCollapsed('Ціни гарбузів в стовпчик');

pumpkinPrice(pumpkins);

console.groupEnd();

function getWeight(){
	return Math.floor(Math.random() * 15+5);
}

function marks(){
	console.log(Array.prototype.join.call(arguments, ', '));
}

function pumpkinPrice(arr){
	for(let i = 0; i < arr.length; i++){
		console.log(arr[i]['вартість гарбуза']());
	}
}


