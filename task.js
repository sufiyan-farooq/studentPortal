let taskAssign = document.getElementById('task-assign');
let selectedValue = ''; 
let arr = JSON.parse(localStorage.getItem('task') )|| []

function taskmember() {
    let taskMember = JSON.parse(localStorage.getItem("user"));
    
    taskAssign.innerHTML = "";
    taskAssign.innerHTML += '<option selected disabled>Students Names</option>';

    for (var i = 0; i < taskMember.length; i++) {
        let firstName = taskMember[i].userDetail.firstname;
        let id = taskMember[i].userDetail.id;


        taskAssign.innerHTML += `<option value="${id}${firstName}">${firstName}</option>`;
    }
 
    taskAssign.addEventListener('change', function(event) {
        selectedValue = event.target.value; 
    });
}

taskmember();




// function check() {
//     let inp = document.getElementById("task");


//     var task ={
//         task : inp.value,
//         member : selectedValue,
    
//      }
//      if(inp.value === ""){
//        alert("please enter any task")

//      }else if(selectedValue===""){
//         alert("please select member")
//      }
//      else{
       
//      arr.push({taskDetail: task})
//      localStorage.setItem("task", JSON.stringify(arr));

//       }
//       console.log(inp.value,selectedValue
//       )
      

// }

let presentCount = 0;
let absentCount = 0;
function check() {


    let rollNo = JSON.parse(localStorage.getItem("user"));
    let rollNumber = document.getElementById("task").value.trim();
    let found = false;

    rollNo.forEach((item) => {
        if (rollNumber === item.userDetail.city) {
            found = true;
            let studentAttendance = document.getElementById('student_attendance');

            // Create a new row with student details and attendance checkboxes
            let newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${item.userDetail.firstname}</td>
                <td>${item.userDetail.lastName}</td>
                <td>${item.userDetail.city}</td>
                <td class="checkbox-group">
                    <label>
                        <input type="radio" name="attendance_${item.userDetail.rollNo}" value="present" onchange="logAttendance('${item.userDetail.firstname}', 'present')">
                        <span class="checkmark"></span> Present
                    </label>
                    <label>
                        <input type="radio" name="attendance_${item.userDetail.rollNo}" value="absent" onchange="logAttendance('${item.userDetail.firstname}', 'absent')">
                        <span class="checkmark"></span> Absent
                    </label>
                </td>
            `;

            studentAttendance.appendChild(newRow);
        }
    });

    if (!found) {
        console.log('No matching roll number found');
    }

    // Clear input field after checking
    document.getElementById("task").value = "";
}

function logAttendance(studentName, status) {
    if (status === 'present') {
        presentCount++;
        document.getElementById('presentList').innerHTML += `<li>${studentName}</li>`;
    } else if (status === 'absent') {
        absentCount++;
        document.getElementById('absentList').innerHTML += `<li>${studentName}</li>`;
    }

    document.getElementById('totalPresent').innerText = presentCount;
    document.getElementById('totalAbsent').innerText = absentCount;

    console.log(`${studentName} is ${status}`);

    // Show the modal
    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
}