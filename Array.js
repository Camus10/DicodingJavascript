/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// TODO
let evenNumber = [];
let counter;
for(counter = 1; counter <= 100; counter++){
	if(counter % 2 == 0){
    	evenNumber.push(counter);
    }
}

/**
 * Hiraukan kode di bawah ini
 */

module.exports = evenNumber;
