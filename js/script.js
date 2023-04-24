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

const people = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 },
]

// Stwórz obiekt klasy DataManipulator, który będzie zawierał metody przeprowadzadzające poniższe operacje. Dodaj odpowiednie metody walidujące.

// Sprawdź, czy co najmniej jedna osoba ma ukończone 19 lat.

class DataManipulator {
	constructor(people) {
		this.people = people
	}

	peopleOlderThen19() {
		const actualYear = new Date().getFullYear()
		return this.people.some(person => actualYear - person.year >= 19)
	}

	// Sprawdź, czy wszyscy mają powyżej 19 lat

	allpeopleOlderThen19() {
		const actualYear = new Date().getFullYear()
		return this.people.every(person => actualYear - person.year >= 19)
	}

	// Wykorzystując funkcję find(), znajdź imie osoby urodzonej po 2000 roku

	nameOfPerson() {
		const person = people.find(person => person.year > 2000)
		const name = person ? person.name : 'Nikt nie urodził się po 2000 roku'
		console.log(name)
	}
}

const dataManipulator = new DataManipulator(people)
console.log(dataManipulator.peopleOlderThen19())
console.log(dataManipulator.nameOfPerson())

// Wykorzystując dodatkowo poniższą strukturę:

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
]

// Połącz elementy z listy comments oraz people do pojedynczych słowników zawartych w nowej liście opinions (obiekt opinions to końcowy efekt po połączeniu obiektów comments i people)

// const opinions = [
//     { name: 'Wes', year: 1988, text: 'Love this!', id: 523423},
//     { name: 'Kait', year: 1986, text: 'Super good', id: 823423 },
//     { name: 'Irv', year: 1970, text: 'You are the best', id: 2039842 },
//     { name: 'Lux', year: 2015, text: 'Ramen is my fav food ever', id: 123523 }

// ];

const opinions = comments.map((comment, index) => {
	return {
		name: people[index].name,
		year: people[index].year,
		text: comment.text,
		id: comment.id,
	}
})

console.log(opinions)

// Challenge 4
// Pobierz listę wszystkich państw i informacji o nich z poniższego API:
// https://restcountries.com

// Przefiltruj te państwa w taki sposób, aby uzyskać tylko te, których populacja przekracza 37 milionów ludzi.
const restAPI = 'https://restcountries.com/v3.1/all'
fetch(restAPI)
	.then(response => response.json())
	.then(data => {
		const countries = data.map(country => ({ name: country.name.common, population: country.population }))
		const filtered = countries.filter(({ name, population }) => population > 37_000_000)
		console.log(filtered)
	})

// Oblicz średnią zaludnienia państw z każdego kontynentu.

const restAPI2 = 'https://restcountries.com/v3.1/all'

fetch(restAPI2)
	.then(response => response.json())
	.then(data => {
		const countriesByContinent = data.reduce((acc, country) => {
			const continent = country.region
			if (!acc[continent]) {
				acc[continent] = []
			}
			acc[continent].push(country)
			return acc
		}, {})

		const averagePopulations = Object.entries(countriesByContinent).map(([continent, countries]) => {
			const populationSum = countries.reduce((acc, country) => acc + country.population, 0)

			const populationAverage = populationSum / countries.length

			return { continent, population: populationAverage }
		})
		console.log(averagePopulations)

		// Znajdź państwa, które mają największe zaludnienie z każdego kontynentu

		const largestCountries = Object.entries(countriesByContinent).map(([continent, countries]) => {
			const largestCountry = countries.reduce(
				(largest, current) => {
					if (current.population > largest.population) {
						return current
					}
					return largest
				},
				{ name: '', population: 0 }
			)
			return { continent, largestCountry }
		})
		console.log(largestCountries)
	})
	.catch(error => console.error(error))

// Znajdź najczęściej wykorzystywane języki, podawaj również informacje, ile razy pojawiły się na liście wszystkich państw.

// posortowanie krajów względem każdego języka
// wybranie np. 5 pierwszych
// podanie ilości krajów dla konkretnych języków

// const restApi3 = 'https://restcountries.com/v3.1/all'

// fetch(restAPI)
// 	.then(response => response.json)
// 	.then(data => {

// 	})
