const studentInfo = {
    name: "Steve",
    email: "steve@steve.com"
};

const customizeObject = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(studentInfo),
};

function submitData(name,email){
    return fetch("http://localhost:3000/users", customizeObject)
    .then(function(response){
        return response.json();
    })
    .then(function(customizeObject){
        document.body.innerHTML = customizeObject.id
    })
    .catch(function(error){
        alert("Unauthorized Access");
        document.body.innerHTML = error;
    })
    }