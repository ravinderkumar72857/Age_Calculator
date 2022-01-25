const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function calculateAge() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);

    let birthMonth, birthDate, birthYear;
    let birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth(),
        year: inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let currentDate = today.getDate();

    leapChecker(currentYear);
    if (
        birthDetails.year > currentYear || (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
    ) {
        alert("NOT born Yet!!!!!!!!!!!");
        displayResult("-", "-", "-");
        return;
    }

    birthYear = currentYear - birthDetails.year;
    if (currentMonth >= birthDetails.month) {
        birthMonth = currentMonth - birthDetails.month;
    }
    else {
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;

    }
    if (currentDate >= birthDetails.date) {
        birthDate = currentDate - birthDetails.date;
    }
    else {
        birthMonth--;
        let days = months[currentMonth ];
        birthDate = days + currentDate - birthDetails.date;
        if (birthMonth < 0) {
            birthMonth = 11;
            birthYear--;
        }
    }
    console.log(currentMonth);
    
    displayResult(birthYear, birthMonth, birthDate);
}
function displayResult(byear, bmonth, bdate) {
    document.getElementById("years").textContent = byear;
    document.getElementById("months").textContent = bmonth;
    document.getElementById("days").textContent = bdate;
}

function leapChecker(year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
    }
    else {
        months[1] = 28;
    }
    // console.log(year,months[1]);
}