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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
