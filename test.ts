let a: number = 4;
let b: string = 'testaaaa'
let c = true; 

let d: string[] = ['1', 'hello', 'my']

let e: any = 3
e = 'aff'

function testString(a: string): string {
	return '';
}

function test(a: string): string | number {
	return '';
}

const test2 = (a:  number): number => {
	return a*2;
}

d = d.map((x: string) => x.toLowerCase())

function countCoord(coord: { lat: number, long?: number }) {
	return
}

function printIt(id: number | string) {
	if(typeof id === 'number') {
		console.log(id.toString())
	} else if (typeof id === 'string') {
		id.toUpperCase()
	}
}

function getSum(a: number | number[]) {
	if (Array.isArray(a)) {
		a.map(x => x.toString)
	}
}

function returnVoid(a: number): void {
	return
}

const x: undefined = undefined
const z: null = null