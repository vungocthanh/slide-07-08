function myFunc(){
    var wei = document.getElementById('weight').value;
    var hei = document.getElementById('height').value;
    var bmi = wei / ( hei * hei);
    if (bmi >= 30) {
        alert('Obese')
    }else if (bmi >= 25) {
        alert('overWeight')
    }else if (bmi >= 18.5) {
        alert('Normal')
    }else {
        alert('Underweight')
    }
}