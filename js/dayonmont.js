function myFunc() {
    var dayMonth =Number(document.getElementById('month').value);
    switch (dayMonth) {
        case 1:
            dayMonth = "January has 31 days ";
            break;
        case 2:
            dayMonth = "February has 28 days or 29 days ";
            break;
        case 3:
            dayMonth = "March has 31 days";
            break;
        case 4:
            dayMonth = "April has 30 days";
            break;
        case 5:
            dayMonth = "May can 31 days";
            break;
        case 6:
            dayMonth = "June has 30 days";
            break;
        case 7:
            dayMonth = "June has 31 days";
            break;
        case 8:
            dayMonth = "August has 31 days";
            break;
        case 9:
            dayMonth = "September has 30 days";
            break;
        case 10:
            dayMonth = "October has 31 days";
            break;
        case 11:
            dayMonth = "November has 30 days";
            break;
        case 12:
            dayMonth = "December has 31 days"
            break;
        default:
            alert("sasdfasdfasdfasdfasdf")
    }
    document.getElementById('dayOnMont').innerHTML = dayMonth;
}