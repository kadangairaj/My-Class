const api ="https://65e425d13070132b3b244613.mockapi.io/student"

const studContainer = document.getElementById("student-data");
const studentFrom = document.getElementById("student-from");
// const input_name =document.querySelector("#input-name");
// const input_batch =document.querySelector("#input-batch");
// const input_age =document.querySelector("#input-age");
// let name;
// let batch;
// let age;
//get api

async function sData(id){
    try {
        const res = await fetch(`${api}/${id}`,{
            method:"GET",
        });
        const data = await res.json();
        // disply all students info in UI
        mapAllstudents(data);
    } catch (error) {
        console.log(error)
    }
}

async function addNewsData(payload){
    try {
        const res = await fetch(api,{
            method:"POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        // appendNewstudend(data);
        // clearFrom();
    } catch (error) {
        alert("error")
    }
}


async function editStu(payload, id) {
    try {
        const res = await fetch(`${api}/${id}`,{
            method: "PUT",
            body: JSON.stringify(payload),
            headers:{
                "Content-Type": "application/json",
            }, 
        });
        const data = await res.json();
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}

async function deleteSut(id) {
    try {
        const res = await fetch(`${api}/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json", 
            },
        });
        const data = await res.json();
        console.log(data);
    } catch (error) {
        
    }
}
sData("");
// addNewsData("",);
// editStu(changeName, "6", );
// deleteSut("6")


function appendNewstudend(student) {
    const mainDiv = document.createElement("div");
    mainDiv.className ="card";
    mainDiv.innerHTML += `
    <h2>${student.name}</h2>
    <p>Batch <span>${student.batch}</span></p>
    <p>Age <span>${student.age}</span></p>
    <div class="action-btn-group">
    <button id="edit-btn" class="btn">Edit</button>
    <button id="delete-btn" class="btn">Delete</button>
    </div>
    `;
    studContainer.append(mainDiv);
}
studentFrom.innerHTML += `
<from>
<h2>Student From</h2>
<input
type="text"
name="name"
required
value=""
placeholder="Enter Student Name"
class="input-text"
id="input-name"/>


<input
type="text"
name="batch"
required
value=""
placeholder="Enter Student Batch"
class="input-text"
id="input-batch"/>


<input
type="text"
name="age"
required
value=""
placeholder="Enter Student Age"
class="input-text"
id="input-age"/>
<button type="submit" id="add-btn" class="btn">Add Student</button>
</from>
`;

function mapAllstudents(students) {
    students.map((value)=>{
        appendNewstudend(value);
    });
}


// // function clearFrom() {
// //     name ="";
// //     batch = "";
// //     age = "";
// }

function getrUserInputvaluse() {
   const name = document.querySelector("#input-name").value;
   const batch = document.querySelector("#input-batch").value;
    const age = document.querySelector("#input-age").value;
    return {name, batch, age  };
}

studentFrom.addEventListener("submit", (e) =>{
    e.preventDefault();
    // const payload = getrUserInputvaluse();
    // addNewsData(payload);
    console.log(getrUserInputvaluse());
    
});
