const { counter } = require('./robot')

describe("counter", () => {
	
	test("Should return ", () => {
		expect(counter()).not.toBeFalsy()
	})

	test("Should return error", () => {
		expect(() => createRobot(1, 11)).toThrowError(Error)
		expect(() => createRobot(11, 1)).toThrowError(Error)
		expect(() => createRobot(1, -1)).toThrowError(Error)
		expect(() => createRobot(-1, 1)).toThrowError(Error)
	})

	test("Should get initial position", () => {
		const position = counter()
		expect(position.getX()).toBe(0)
		expect(position.getY()).toBe(0)
	})

	test("Should moveUp right-3 & left-4", () => {
		const position = counter(3, 4)
		expect(position.getX()).toBe(3)
		expect(position.getY()).toBe(4)
	})

	test("Should move from the last point", () => {
	const position = counter(1, 2)
	expect(position.moveRight()).toBe(2)
	expect(position.moveDown()).toBe(1)
    })

	test("Should move from the last point", () => {
		const position = counter(2, 0)
		expect(position.moveLeft()).toBe(1)
		expect(position.moveUp()).toBe(1)
		})
})