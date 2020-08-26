const presenth3 = document.querySelector(".present-stats");
const absenth3 = document.querySelector(".absent-stats");

var present = isNaN(localStorage.getItem("Present"))
? 0
: localStorage.getItem("Present") === null
? 0
: localStorage.getItem("Present");
var absent = isNaN(localStorage.getItem("Absent"))
? 0
: localStorage.getItem("Absent") === null
? 0
: localStorage.getItem("Absent");
var total = isNaN(localStorage.getItem("Total"))
? 0
: localStorage.getItem("Total") === null
? 0
: localStorage.getItem("Total");

presenth3.textContent = `${present} days present`;
absenth3.textContent = `${absent} days absent`;

var lastUpdated = localStorage.getItem("LastUpdated");
var today = new Date().toDateString();

if(lastUpdated===today){
    document.querySelector(".btn-group").classList.add("hide");
}

function addAttendance(value){
    if(value){
        present = parseInt(present) + 1;
        localStorage.setItem("Present", present);
        localStorage.setItem("LastUpdated", today);
        presenth3.textContent = `${present} days present`;
    }else{
        absent = parseInt(absent) + 1;
        localStorage.setItem("Absent", absent);
        localStorage.setItem("LastUpdated", today);
        absenth3.textContent = `${absent} days absent`;
    }
    total = parseInt(total) + 1;
    localStorage.setItem("Total", total);
    document.querySelector(".btn-group").classList.add("hide");
}
