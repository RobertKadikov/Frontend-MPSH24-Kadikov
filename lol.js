var a = 6;
var b = 8;
var c = a + b;

console.log("total :", c);

console.log("maximum :", Math.max(a, b, c)); 

const e = "Leo Di Caprio";
const f = "God bless Russia";

function max_length(str1, str2) {
    if (str1.length >= str2.length){
        console.log(str1)
    } else {
        console.log(str2)
    }
}

max_length(e, f)

const pal = 'pazak';

function palindrom(t) {
if (t.toString().split("").reverse().join("") == t.toString()) {
  console.log("Это палиндром")
} else {
  console.log("Это не палиндром")
}
}

palindrom(pal)

  

