// Challenge 1
// Korzystając z poniższej struktury:

const animals = [
	{ name: 'Burek', eyes: 3, type: 'cat' },
	{ name: 'Milelon', type: 'cat', eyes: 4 },
	{ name: 'Pusia', type: 'cat', eyes: 2 },
	{ name: 'Puszek', type: 'dog', eyes: 2 },
	{ name: 'Zorka', eyes: 2, type: 'dog' },
]

// Wykorzystaj funkcję .map(), aby otrzymać następującą listę:
// [
// “Burek is a cat and has 3 eyes”,
// “Milelon is a cat and has 4 eyes”,
// “Pusia is a cat and has 2 eyes”,
// “Puszek is a dog and has 2 eyes”,
// “Zorka is a dog and has 2 eyes”
// ]

const newAnimals = animals.map(animal => `${animal.name} is a ${animal.type} + and has ${animal.eyes} eyes`)
console.log(newAnimals)

// Przefiltruj listę animals - tak,
// aby otrzymać listę tylko tych zwierzat, przechowują informacje o psach.

const onlyDogs = animals.filter(animal => animal.type === 'dog')
console.log(onlyDogs)

// Otrzymaj z listy animals stringa, który będzie składał się tylko i wyłącznie z imion zwierząt, tj. ‘Burek Milelon Pusia Puszek Zorka’
const onlyNames = animals.map(animal => animal.name).join(' ')
console.log(onlyNames)

// Otrzymaj z listy animals stringa, który będzie składał się tylko i wyłącznie z imion psów, tj. ‘Puszek Zorka’
const dogsNames = animals
	.filter(animal => animal.type === 'dog')
	.map(dog => dog.name)
	.join(' ')
console.log(dogsNames)

// Challenge 2
// Mając do dyspozycji poniższą listę:
const products = [
	{ product: 'banana', price: 3 },
	{ product: 'mango', price: 6 },
	{ product: 'potato', price: ' ' },
	{ product: 'avocado', price: 8 },
	{ product: 'coffee', price: 10 },
	{ product: 'tea', price: '10' },
]
// Oblicz sumę cen produktów, korzystając tylko i wyłącznie z funkcji .reduce(). Wykonaj tę samą operację, wykorzystując forEach
const priceSum = products.reduce((sum, item) => {
	const price = Number(item.price)
	if (isNaN(price)) {
		return sum
	} else {
		return sum + price
	}
}, 0)
console.log(priceSum)
// Znajdź nazwy produktów, których ceny podane są w nieliczbowym formacie.

// Challenge 3
// Mając do dyspozycji poniższą listę:

// const people = [
//      { name: 'Wes', year: 1988 },
//      { name: 'Kait', year: 1986 },
//      { name: 'Irv', year: 1970 },
//      { name: 'Lux', year: 2015 }
// ];

// Stwórz obiekt klasy DataManipulator, który będzie zawierał metody przeprowadzadzające poniższe operacje. Dodaj odpowiednie metody walidujące.

// Sprawdź, czy co najmniej jedna osoba ma ukończone 19 lat.
// Sprawdź, czy wszyscy mają powyżej 19 lat
// Wykorzystując funkcję find(), znajdź imie osoby urodzonej po 2000 roku

// Wykorzystując dodatkowo poniższą strukturę:

// const comments = [
//       { text: 'Love this!', id: 523423 },
//       { text: 'Super good', id: 823423 },
//       { text: 'You are the best', id: 2039842 },
//       { text: 'Ramen is my fav food ever', id: 123523 }
// ];

// Połącz elementy z listy comments oraz people do pojedynczych słowników zawartych w nowej liście opinions (obiekt opinions to końcowy efekt po połączeniu obiektów comments i people)

// const opinions = [
//     { name: 'Wes', year: 1988, text: 'Love this!', id: 523423},
//     { name: 'Kait', year: 1986, text: 'Super good', id: 823423 },
//     { name: 'Irv', year: 1970, text: 'You are the best', id: 2039842 },
//     { name: 'Lux', year: 2015, text: 'Ramen is my fav food ever', id: 123523 }

// ];

// Challenge 4
// Pobierz listę wszystkich państw i informacji o nich z poniższego API:
// https://restcountries.com
// Przefiltruj te państwa w taki sposób, aby uzyskać tylko te, których populacja przekracza 37 milionów ludzi.
// Oblicz średnią zaludnienia państw z każdego kontynentu.
// Znajdź państwa, które mają największe zaludnienie z każdego kontynentu
// Znajdź najczęściej wykorzystywane języki, podawaj również informacje, ile razy pojawiły się na liście wszystkich państw.
