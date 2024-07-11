// let metin = "Kocaeli'de yaşıyorum.";

//? charAt() belirtilen indeks numarasındaki string ifadeyi döndürür.
// let inMetin = metin.charAt(1);
// console.log(inMetin);

//? charCodeAt() unicode karakter kodunu döndürür.
// let inMetin2 = metin.charCodeAt(2);
// console.log(inMetin2);

//? concat() methodu 2 farklı string ifadeyi birleştirmeye yarar.
// let list1 = ["fiat", "renault", "porsche", "citroen", "peugeot"];
// let list2 = ["lambo", "ferrari"];
// let lists = list1.concat(list2);
// console.log(lists);

//? endsWith() içine aldığı değerin sonda olup olmadığını kontrol eder. Boolen olarak döndürür.
// let list = "Kocaeli'de yaşıyorum.";
// let lists = list.endsWith(".");
// console.log(lists);

//? startsWith() içine aldığı değerin başta olup olmadığını kontrol eder.
// let list = "Kocaeli'de yaşıyorum.";
// let lists = list.startsWith("K");
// console.log(lists);

//? fromCharCode() unicode numarasının karşılığını verir
let list = 72;
let character = String.fromCharCode(list);
console.log(character);

