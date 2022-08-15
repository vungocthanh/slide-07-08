var number = prompt("Enter Number Prime-Num:")
var count = 0;
var n = 2;
// if (n == 2){
//     document.write(n)
// }
for (count = 0 , n = 2  ;count <= number;count++, n++) {
    if (n % 2 != 0 || n % 3 != 0) {
        document.write(n)
    }
}




