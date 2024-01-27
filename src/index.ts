import { v4 as uuidv4 } from 'uuid';

// Item type
type Item = {
    id: string;
    name: string;
    price: number;
    description: string;
};


// User type
type User = {
    id: string;
    name: string;
    age: number;
    cart: Item[];
};


// Create new user
function createUser(name: string, age: number): User {
    return { id: uuidv4(), name, age, cart: [] };
}

// Create new item
function createItem(name: string, price: number, description: string): Item {
    return { id: uuidv4(), name, price, description };
}


// Add item to cart
function addToCart(user: User, item: Item): void {
    user.cart.push(item);
}

// Remove item from cart
function removeFromCart(user: User, itemId: string): void {
    user.cart = user.cart.filter(item => item.id !== itemId);
}

// Remove quantity from cart
function removeQuantityFromCart(user: User, itemId: string, quantity: number): void {
    let count = 0;
    user.cart = user.cart.filter(item => {
        if (item.id === itemId && count < quantity) {
            count++;
            return false;
        }
        return true;
    });
}

// Cart total
function cartTotal(user: User): number {
    return user.cart.reduce((total, item) => total + item.price, 0);
}


// Print the cart
function printCart(user: User): void {
    let total = 0;
    user.cart.forEach(item => {
        console.log(`Item: ${item.name}, Price: ${item.price}`);
        total += item.price;
    });
    console.log(`Total Cart Value: ${total}`);
}


// Create a User
let user = createUser("Alice", 25);

// Create 3 Items
let itemA = createItem("Item A", 10, "Description of Item A");
let itemB = createItem("Item B", 20, "Description of Item B");
let itemC = createItem("Item C", 30, "Description of Item C");

// Add Item A to the user's Cart
addToCart(user, itemA);

// Print Cart Contents and Total
printCart(user);
console.log(`Total: ${cartTotal(user)}`);

// Add 3 Item B to the user's Cart
addToCart(user, itemB);
addToCart(user, itemB);
addToCart(user, itemB);

// Print Cart Contents and Total
printCart(user);
console.log(`Total: ${cartTotal(user)}`);

// Add 3 Item C to the user's Cart
addToCart(user, itemC);
addToCart(user, itemC);
addToCart(user, itemC);

// Print Cart Contents and Total
printCart(user);
console.log(`Total: ${cartTotal(user)}`);

// Remove all of Item B from the cart
removeFromCart(user, itemB.id);

// Print Cart Contents and Total
printCart(user);
console.log(`Total: ${cartTotal(user)}`);

// Remove 2 of Item C from the cart
removeQuantityFromCart(user, itemC.id, 2);

// Print Cart Contents and Total
printCart(user);


