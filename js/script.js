let budgetForTheMonth = +prompt("Ваш бюджет на месяц?", '10000');
let name = prompt("Название вашего магазина?");
let time = 19;

let mainList = {
	'budget': budgetForTheMonth,
	'name': name,
	shopGoods: [],
	employers: {},
	open,

};

for (let i = 0; i < 5; i++) {
	let a =  prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
		console.log('все верно');
	
	} else {
		alert('введите тип товаров');
		i++;
	}

}

/*let i = 0;
while ( i < 5 ) {
	let a =  prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
		console.log('все верно');
	} else {
		alert('введите тип товаров');
		
	}
	i++;
}

let i = 0;
do {
let a =  prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
		console.log('все верно');
	} else {
		alert('введите тип товаров');
		
	}
	i++;
}
while (i < 5);*/




if (time < 0) {
	console.log('не может быть');
} else if(time > 8 && time < 20 ) {
	console.log('время работать')
} else if ( time < 24 ) {
	console.log('уже поздно');
} else {
	console.log('в сутках только 24 часа');
}


alert( 'Бюджет на 1 день: ' + budgetForTheMonth/30 );

//console.log(mainList.shopGoods)
