import Ship from "./ship.js"

test('hit on ship', () => {
    const boat = new Ship(2);
    boat.hit();
    expect(boat.hits).toBe(1);
});


test('check isSunk', () => {
    const boat = new Ship(2);
    boat.hit();
    boat.hit();
    expect(boat.isSunk()).toBe(true);
});