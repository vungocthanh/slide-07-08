var ever;
ever = "<table border='1' >"
for (var i = 1; i <= 10; i++) {
    ever = ever + "<tr>";
    // console.log(ever);
    for (var j = 2; j <= 10; j++) {
        ever = ever + "<td>" + j + " * " + i + " = "  + i * j + "</td>";
        // document.write(j + " * "+  i + " = " + (i * j)  + "")
    }
    
}
ever = ever + "<table>"
document.write(ever)