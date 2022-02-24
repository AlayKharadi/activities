var s1 = "Hello World";

console.log(typeof (s1));
console.log(s1.length);

//escap character
console.log("use the \"escape character\"")
console.log("Hello \
World")

var s2 = new String("Hello World");

console.log(typeof (s2))
console.log(s2.length)

console.log(s1 == s2)
console.log(s1 == s2)

var temp = "This is a string.";

//Slice certain part of the string
console.log(temp.slice(2, 4))
console.log(temp.slice(-4, -2))
console.log(temp.slice(2))
console.log(temp.slice(-2))

//Same as slice
//Can not take negative inputs
console.log(temp.substring())
console.log(temp.substring(2, 4))
console.log(temp.substring(2))

//Replace
console.log(temp.replace("string", "new string"))

var input = "this string is created so you can learn String";
console.log(input.replace("string", "new string"))
console.log(input.replace(/STRING/i, "new string"))
console.log(input.replace(/string/g, "new string"))

//To lower case
console.log(input.toLowerCase())
//To upper case
console.log(input.toUpperCase())

//concat
console.log(temp.concat(temp, temp, temp))
console.log(temp.concat(temp, [
    input,
    input,
    input
]))

temp = "            vfvnfjnbd                   ";
console.log(temp.trim())
console.log(temp.trimStart())
console.log(temp.trimEnd())

temp = "vnjfvndj"
console.log(temp.padStart(5, 'a'))
console.log(temp.padStart(12, 'a'))
console.log(temp.padEnd(12, 'a'))
console.log(temp.padEnd(4, 'a'))

temp = "Hello World"
console.log(temp.charAt(0))
console.log(temp.charCodeAt(5))

console.log(temp.split(" "))
console.log(temp.split(""))

var input = "this string is created so you can learn string";
console.log(input.indexOf('string'))
console.log(input.indexOf('string', 13))
console.log(input.lastIndexOf('string'))
console.log(input.lastIndexOf('string', 13))
//search can take input as regex
console.log(input.search('string'))
//you can check for regex
console.log(input.match(/string/g))

//check if only exists or not
console.log(input.includes('string'))
console.log(input.includes('is', 13))

var a = 'output'
var b = String("output")
console.log(a === b)
console.log(a.localeCompare(b))
console.log((a + 'a').localeCompare(b))
console.log((a).localeCompare(b + 'a'))

