export function add(a: number, b: number): number {
  return a + b;
}

// A function that returns a greeting message with a given name
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

// A basic interface for a user object
export interface User {
  id: number;
  name: string;
}

// A function that takes a User object and returns a greeting for the user
export function greetUser(user: User): string {
  return `Hello, ${user.name} (ID: ${user.id})!`;
}
