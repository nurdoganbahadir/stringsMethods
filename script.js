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
// let metin = "Kocaeli'de yaşıyorum.";
// let metins = metin.match(/a/g);
// console.log(metins);

//? repeat() string ifadeyi istediğimiz sayıda döndürmemizi sağlar. Yeni bir string döndürür.
// let metin = "Kocaeli'de yaşıyorum.";
// let metins = metin.repeat(1)
// console.log(metins);

//! replace() bu method string ifadeleri değiştirmemizi sağlar. Yeni bir string ifade üretir  orjinali değiştirmez.
// let metin = "Kocaeli'de yaşıyorum.";
// let metins = metin.replace("a","y");
// console.log(metins);

//? search() eşleşen ilk ifadenin indeksini döner
// let metin = "Kocaeli'de yaşıyorum.";
// console.log(metin.search("y"));

//! slice() slice methodu verilen index aralığını alır ve yeni bir string olarak döndürür. Eğer diziyse dizi olarak döndürür.
// let list1 = ["fiat", "renault", "porsche", "citroen", "peugeot"];
// let list2 = list1.slice(1, 3);
// console.log(list2);

//! split() methodu istediğimiz string ifadeden itibaren stringi bölmemizi sağlar. String ifadeyi diziye dönüştürür.
// let metin = "Kocaeli'de yaşıyorum.";
// console.log(metin.split("a"));

//? substring metodu, bir string'in belirli bir kısmını çıkarıp yeni bir string olarak döndürmek için kullanılır. Bu metod, orijinal string'i değiştirmez, sadece belirtilen aralıktaki karakterleri içeren yeni bir string oluşturur.
// let metin = "Kocaeli'de yaşıyorum.";
// console.log(metin);
// let metins = metin.substring(0, 7).split();
// console.log(metins);

//! toLowerCase and toUpperCase string ifadedeki harfleri küçültmeye veya büyültmeye yarar.
// let metin = "Kocaeli'de yaşıyorum.";
// console.log(metin.toUpperCase());
// console.log(metin.toLowerCase());
// let list1 = ["fiat", "renault", "porsche", "citroen", "peugeot"];
// console.log(list1.toString().toUpperCase());

//? toString bir objeyi string ifadeye çevirmeyi sağlar.
// let list1 = ["fiat", "renault", "porsche", "citroen", "peugeot"];
// console.log(list1.toString());

//? trim baştaki ve sondaki boşlukları silmeye yarar.
let metin = "   Kocaeli'de yaşıyorum.";
let metin2 = metin.trim();
console.log(metin2);
