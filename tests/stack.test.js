const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

//Testa pop-funktionen
test ("empty the array", () => {
    stack.push("test");
    stack.empty();
    expect(stack.peek()).toBeUndefined();
});

//Två objekt läggs till men pop() körs bara en gång. Alltså bör listan ha ett innehåll.
test('pop one element in stack', () => {
    stack.push("ett");
    stack.push("två");
    stack.pop();
    expect(stack.peek()).toBeDefined();
});