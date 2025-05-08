# TypeScript: Interfaces vs Types

## Introduction

This repository provides an overview of the key differences between **`interface`** and **`type`** in TypeScript. These are two powerful constructs in TypeScript that allow you to define the shape of data structures, such as objects, functions, and more. Understanding when to use each of these can help you write better and more maintainable code.

---

## Key Concepts

### 1. `interface`

An `interface` in TypeScript is a way to define the structure of an object, specifying the properties it must have and their types. You can also extend interfaces, which makes it easy to create hierarchical relationships between data structures.

#### Features of `interface`:

* **Declaration Merging**: You can declare the same `interface` multiple times, and TypeScript will merge them automatically.
* **Extends**: Interfaces can extend other interfaces, which allows you to build on existing structures.
* **Implementation**: Classes can implement interfaces to ensure they adhere to a specific structure.

#### Example of `interface`:

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  position: string;
}

const employee: Employee = {
  name: "Alice",
  age: 30,
  position: "Software Engineer"
};
```

### 2. `type`

A `type` in TypeScript is used to create a type alias, which can represent a variety of types, including objects, unions, intersections, and even primitives. While `type` is often more flexible, it does not support declaration merging like `interface`.

#### Features of `type`:

* **Unions & Intersections**: `type` can define union and intersection types, making it very versatile.
* **No Declaration Merging**: Unlike `interface`, `type` cannot be declared multiple times with the same name.
* **Supports More Types**: You can use `type` to define primitive types, tuples, and even complex compositions.

#### Example of `type`:

```ts
type Status = "active" | "inactive";  // Union type

type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Bob",
  age: 25
};
```

---

## Key Differences Between `interface` and `type`

| Feature                        | `interface`                                           | `type`                                         |
| ------------------------------ | ----------------------------------------------------- | ---------------------------------------------- |
| **Declaration Merging**        | ✅ Yes (can declare the same interface multiple times) | ❌ No                                           |
| **Extending**                  | ✅ Can extend other interfaces                         | ✅ Can use intersections (`&`) to combine types |
| **Union Types**                | ❌ Not supported directly                              | ✅ Yes                                          |
| **Intersection Types**         | ❌ Not supported directly                              | ✅ Yes                                          |
| **Supports Primitives/Tuples** | ❌ No                                                  | ✅ Yes                                          |
| **Implementation by Classes**  | ✅ Yes                                                 | ✅ Yes (less common)                            |

---

## When to Use `interface` vs `type`

* **Use `interface`** when:

  * You need to define the shape of **objects** and plan to extend or merge them.
  * You're working with **classes** and want to implement a structured interface.
  * You need to create reusable and extendable object structures.

* **Use `type`** when:

  * You need **unions** or **intersections** (e.g., `A | B`, `A & B`).
  * You need to define **primitives**, **tuples**, or more complex types.
  * You are working with **aliases** for more complex types like function signatures or generics.

---

## Conclusion

While both `interface` and `type` can be used to define object shapes in TypeScript, they serve different purposes. **Interfaces** are great when you need to define a clear structure for your objects, especially when dealing with class-based designs. **Types**, on the other hand, offer more flexibility, allowing you to work with unions, intersections, and even primitive values.

In most cases, you'll find that both `interface` and `type` can be used interchangeably, but understanding their differences will help you write cleaner and more maintainable code.

---

## Contribute

If you have any suggestions or improvements, feel free to open a **Pull Request** or submit an **Issue**. Your contributions are always welcome!

---

# TypeScript: Union & Intersection Types

## Introduction

This repository provides an overview of **union** and **intersection** types in TypeScript, two powerful features that let you express flexible and composable type relationships. Understanding these concepts will help you write more robust and maintainable code.

---

## 1. Union Types: “One of Many”

A **union** type describes a value that can be one of several types. Use the pipe (`|`) operator to define unions.

### Why Use Union Types?

* Model values that can vary in shape or meaning (e.g., API responses).
* Accept multiple input types in functions while retaining type safety.

### Example: HTTP Response Status

```ts
// Define a union of allowed status codes
export type HttpStatus = 200 | 201 | 400 | 401 | 404 | 500;

export function isSuccess(status: HttpStatus): boolean {
  return status >= 200 && status < 300;
}

const code1: HttpStatus = 200;  // ✅ Valid
const code2: HttpStatus = 418;  // ❌ Error: 418 not assignable
```

### Example: Success or Error Result

```ts
// Generic result which is either data or an error
export type Result<T> = { data: T } | { error: string };

export function fetchUser(id: number): Result<{ name: string; age: number }> {
  if (id === 1) {
    return { data: { name: "Alice", age: 30 } };
  }
  return { error: "User not found" };
}

const res = fetchUser(2);
if ("data" in res) {
  console.log(res.data.name);  // safe access
} else {
  console.error(res.error);
}
```

---

## 2. Intersection Types: “All of the Above”

An **intersection** type combines multiple types into one, requiring a value to satisfy all constituent types. Use the ampersand (`&`) operator.

### Why Use Intersection Types?

* Compose complex object shapes from simpler pieces.
* Mix in multiple behavioral contracts (e.g., data + metadata + methods).

### Example: Composing Interfaces

```ts
// Define two interfaces
export interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  id: number;
  name: string;
}

// Intersection of both
export type UserEntity = UserProfile & Timestamps;

const user: UserEntity = {
  id: 42,
  name: "Bob",
  createdAt: new Date("2025-01-01"),
  updatedAt: new Date("2025-05-08"),
};
```

### Example: Mixing in Permissions

```ts
export type Readable = { read(): void };
export type Writable = { write(content: string): void };

// Intersection requires both read and write
export type FileHandle = Readable & Writable;

export class TextFile implements FileHandle {
  read() { console.log("reading…"); }
  write(content: string) { console.log("writing:", content); }
}
```

---

## When to Use Which?

\| Scenario                                 | Use Union (`A | B`)        | Use Intersection (`A & B`)       |
\|------------------------------------------|---------------------------------|----------------------------------|
\| Value can be one of many distinct shapes | ✅ API response (`Success | Error`) |                                  |
\| Combining multiple concerns              |                                 | ✅ Data shape + metadata + methods|
\| Accepting different input types          | ✅ fn(x: string | number)  |                                  |
\| Enforcing multiple capabilities          |                                 | ✅ Mix in logging, permissions    |

---

## Quick Tips

1. **Type Narrowing**: Use `in`, `typeof`, or `instanceof` checks to narrow union types before accessing properties.
2. **Optional Values**: Model optional values as `T | undefined`.
3. **Intersecting Overlapping Properties**: When intersecting types with the same property, the property types must be compatible.

---

## Conclusion

Union and intersection types elevate TypeScript beyond “typed JavaScript” into a language that models real-world complexities. By mastering these constructs, you can handle varied data shapes and compose rich type hierarchies effortlessly.

Have you used unions or intersections in your TypeScript projects? Share your experiences or questions in the issues or pull requests!

---

## Contribute

Contributions, issues, and feature requests are welcome! Feel free to check the \[issues page] for open tasks.

