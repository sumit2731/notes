
class Person {
    name: string
}
interface Validator<T extends Person> {
    (c: T): { [error: string]: any };
}
