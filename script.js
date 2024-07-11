// let metin = "Kocaeli'de yaşıyorum.";

//! charAt() belirtilen indeks numarasındaki string ifadeyi döndürür.
// let inMetin = metin.charAt(1);
// console.log(inMetin);

//? charCodeAt() unicode karakter kodunu döndürür.
// let inMetin2 = metin.charCodeAt(2);
// console.log(inMetin2);

//! concat() methodu 2 farklı string ifadeyi birleştirmeye yarar.
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
// let list = 72;
// let character = String.fromCharCode(list);
// console.log(character);

//! includes() dizi elemanlarını aramanı sağlar.
// let list1 = ["fiat", "renault", "porsche", "citroen", "peugeot"];
// console.log(list1);
// let lists = list1.includes("renault",6)
// console.log(lists);

//! indexOf() içindeki string ifadeyi değişkende aratır ve indeks numarasını döndürür. Yanına aldığı sayı başlangıç değeridir.
// let metin = "Kocaeli'de yaşıyorum.";
// console.log(metin.indexOf("l",4));

//?lastİndexOf() istenilen karakterin son geçtiği indexi döndürür.
// let metin = "Kocaeli'de yaşıyorum.";
// console.log(metin.lastIndexOf("o"));

//? lcoaleCompare()  iki string'i yerel dil kurallarına göre karşılaştırır ve karşılaştırmanın sonucunu döndürür.
// let metin = "Kocaeli'de yaşıyorum.";
// let metin2 = "Gelecekte Kocaeli'de yaşamayacağım.";
// let metins = metin.localeCompare(metin2);
// console.log(metins);

//! match() bu metot dizi içindeki elemlardan bizlere istediğimizi yine dizi olarak döndürür çok kullanışlıdır.
let metin = "Kocaeli'de yaşıyorum.";
let metins = metin.match(/a/g);
console.log(metins);

