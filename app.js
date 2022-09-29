function getAge() {
  let val = document.getElementById("dob").value;
  calcAge(val);
}

function calcAge(dob) {
  const dobFull = new Date(dob);
  const newDate = new Date();

  if (newDate - dobFull < 0) {
    window.alert("Please Choose Correct Date...");
  } else {
    let dobDate = dobFull.getDate();
    let dobMonth = dobFull.getMonth() + 1;
    let dobYear = dobFull.getFullYear();

    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let currentDate = newDate.getDate();
    let currentMonth = newDate.getMonth() + 1;
    let currentYear = newDate.getFullYear();

    // check date
    if (dobDate > currentDate) {
      currentDate = currentDate + months[currentMonth - 1];
      currentMonth = currentMonth - 1;
    } else {
      currentDate = currentDate - dobDate;
    }

    // check month
    if (dobMonth > currentMonth) {
      currentMonth = currentMonth + 12;
      currentYear = currentYear - 1;
    } else {
      currentMonth = currentMonth - dobMonth;
    }

    // subtract
    const y = currentYear > dobYear ? currentYear - dobYear : 0; // Year
    const m = currentMonth > dobMonth ? currentMonth - dobMonth : currentMonth; // Month
    const d = currentDate > 12 ? currentDate - dobDate : currentDate; // Date

    const list = [
      [day, d],
      [month, m],
      [year, y],
    ];

    // if (m == 0 && d == 0) {
    //   console.log("happy birthday");
    // }

    list.map((value) => {
      displayAge(value[0], value[1]);
    });
  }
}

function displayAge(target, value) {
  target.innerText = value;
}

let inp = document.getElementById("dob");
let year = document.getElementById("years");
let month = document.getElementById("months");
let day = document.getElementById("days");

inp.addEventListener("input", () => {
  getAge();
});
