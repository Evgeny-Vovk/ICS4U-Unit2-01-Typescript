/*
 * This is the standard index.ts starting point.
 *
 * author  Evgeny Vovk
 * version 1.0
 * since   2024-03-19
 */
import { EvgenyStack } from './EvgenyStack'

let fruits = new EvgenyStack()
fruits.push("apple")
fruits.push("banana")
fruits.push("cherry")
console.log("fruits: " + fruits.showStack())

let colours = new EvgenyStack()
colours.push("red")
colours.push("green")
colours.push("blue")
console.log("colours: " + colours.showStack())

let feelings = new EvgenyStack()
feelings.push("happy")
feelings.push("sad")
feelings.push("mad")
console.log("feelings: " + feelings.showStack())

console.log("\nDone.")
