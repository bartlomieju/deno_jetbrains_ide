import { assert } from "jsr:@std/assert";
import chalk from "npm:chalk";
import express from "npm:express";

const msg = chalk.red("Hello from Deno");

assert(true);
assert(false);

function withNoBody() {

}

function acceptsNumber(a: number) {
    return a + 2;
}

acceptsNumber("doesn't accept string")