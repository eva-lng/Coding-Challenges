/* Convert all the cases!

In this kata, you will make a function that converts between camelCase, snake_case, and kebab-case.

You must write a function that changes to a given case. It must be able to handle all three case types:

js> changeCase("snakeCase", "snake")
"snake_case"
js> changeCase("some-lisp-name", "camel")
"someLispName"
js> changeCase("map_to_all", "kebab")
"map-to-all"
js> changeCase("doHTMLRequest", "kebab")
"do-h-t-m-l-request"
js> changeCase("invalid-inPut_bad", "kebab")
undefined
js> changeCase("valid-input", "huh???")
undefined
js> changeCase("", "camel")
""

Your function must deal with invalid input as shown, though it will only be passed strings. Furthermore, all valid identifiers will be lowercase except when necessary, in other words on word boundaries in camelCase.
*/

function changeCase(identifier, targetCase) {
  let snake = false,
    camel = false,
    kebab = false;

  for (const ch of identifier) {
    if (ch === "_") snake = true;
    else if (ch === "-") kebab = true;
    else if (ch === ch.toUpperCase()) camel = true;
  }

  if (snake && (camel || kebab)) return undefined;
  if (camel && (snake || kebab)) return undefined;
  if (kebab && (snake || camel)) return undefined;

  switch (targetCase) {
    case "snake":
      return toSnake(identifier);
    case "camel":
      return snakeToCamel(toSnake(identifier));
    case "kebab":
      return snakeToKebab(toSnake(identifier));
  }
}

function toSnake(str) {
  let res = "";
  for (const ch of str) {
    if (ch === "-") res += "_";
    else if (ch === "_") res += "_";
    else if (ch === ch.toUpperCase()) res += "_" + ch.toLowerCase();
    else res += ch;
  }
  return res;
}

function snakeToKebab(str) {
  let res = "";
  for (const ch of str) {
    if (ch === "_") res += "-";
    else res += ch;
  }
  return res;
}

function snakeToCamel(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_") continue;
    else if (str[i - 1] === "_") res += str[i].toUpperCase();
    else res += str[i];
  }
  return res;
}
