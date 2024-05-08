/* Buatlah sebuah program yang menerima list of string atau string array sebagai input dan tampilkan kata pertama yang terpanjang dari string-string yang ada di dalam list atau array tersebut.

Contoh: 
Jika input adalah ["halo dunia", "makan nasi goreng", "ini rumahnya budi"], maka outputnya adalah "makan". 

Perhatikan bahwa string "makan" memiliki panjang 5, sedangkan "halo" memiliki panjang 4 dan "ini" memiliki panjang 3. */
const dummyArr = ['halo dunia', 'makan nasi goreng', 'ini rumahnya budi'];

function checkLongestFirstWords(arrayInput) {
    let tmpFirstWord = [];
    let longestWord = '';

    // Check Every Index
    arrayInput.forEach(function (each) {
        tmpFirstWord.push(each.split(' ')[0]);
    });

    longestWord = tmpFirstWord.sort((a, b) => b.length - a.length)[0];

    return longestWord;
}

console.log(checkLongestFirstWords(dummyArr));
console.log(
    `Kata terpanjang dari array ${dummyArr.join(
        ','
    )} adalah ${checkLongestFirstWords(dummyArr)}`
);

// console.log(dummyArr);
