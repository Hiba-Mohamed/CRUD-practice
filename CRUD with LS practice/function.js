document.getElementById("update").style.display = "none";

function validateForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    



    if (name == "") {
        alert("Nurse's name is required");
        return false;
    }
    if (age == "") {
        alert("age is required");
        return false;
    }
    else if (address == "") {
        alert("address is required");
        return false;
    }

    if (email == "") {
        alert("Break relief is required");
        return false;
    }
   
    return true;

}

function showData() {
    var nurseList;
    if (localStorage.getItem("nurseList") == null) {
        nurseList = [];
    }
    else {
        nurseList = JSON.parse(localStorage.getItem("nurseList"));
    }
    var html = "";
    nurseList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html +=
            '<td><button onclick="deleteData(' + index + ')"class="btn btn-danger">Delete</button><button onclick="updateData(' + index + ')" class = "btn btn-warning m-2">Edit</button>';
        html += "</tr>";

    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

// loads all data when document or page loaded

document.onload = showData();

// function to add data to local storage

function addData() {
    // if form is validated
    if (validateForm() == true) {
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;

        var nurseList;
        if (localStorage.getItem("nurseList") == null) {
            nurseList = [];
        }
        else {
            nurseList = JSON.parse(localStorage.getItem("nurseList"));
        }

        nurseList.push
            (
                {
                    name: name,
                    age: age,
                    address: address,
                    email: email,
                }
            );
        localStorage.setItem("nurseList", JSON.stringify(nurseList));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";
    }

}

// function to delete Data from local storage

function deleteData(index) {
    var nurseList;
    if (localStorage.getItem("nurseList") == null) {
        nurseList = [];
    }
    else {
        nurseList = JSON.parse(localStorage.getItem("nurseList"));
    }
    
    nurseList.splice(index, 1);
    localStorage.setItem("nurseList", JSON.stringify(nurseList));
    showData();
}

// function to update/edit date in local storage

function updateData(index)
{
    // submit button will hide and update button will show for updating of data in local storage
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "block";

    var nurseList;
    if(localStorage.getItem("nurseList") == null)
    {
        nurseList = [];
    }
    else
    {
        nurseList = JSON.parse(localStorage.getItem("nurseList"));
    }
    
    document.getElementById("name").value = nurseList [index].name;
    document.getElementById("age").value = nurseList [index].age;
    document.getElementById("address").value = nurseList [index].address;
    document.getElementById("email").value = nurseList [index].email;

    document.querySelector("#update").onclick = function ()
    {
        if(validateForm() == true)
        {
            nurseList[index].name = document.getElementById("name").value;
            nurseList[index].age = document.getElementById("age").value;
            nurseList[index].address = document.getElementById("address").value;
            nurseList[index].email = document.getElementById("email").value;

            localStorage.setItem("nurseList", JSON.stringify (nurseList));

            showData();

             document.getElementById("name").value = "";
             document.getElementById("age").value = "";
             document.getElementById("address").value = "";
             document.getElementById("email").value = "";

            //  update button will hide and submit button shows 

            document.getElementById("submit").style.display = "block";
            document.getElementById("update").style.display = "none";
        }


        }

    
}