const students =[
    { name: "Ali", grade: 88 },

    { name: "Fatima", grade: 92 },

    { name: "John", grade: 75 },

    { name: "Sara", grade: 95 },

    { name: "David", grade: 68 }   
];

let html = "<ul>";

for( let student=0; student < students.length; student++){
    html += `<li> Name: ${students[student].name}, Grade: ${students[student].grade} </li>`;
    }

html += "</ul>";

document.getElementById("js-students-info").innerHTML = html;












