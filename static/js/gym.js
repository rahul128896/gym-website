function home(){
    document.getElementById("homes").style.color="rgb(20, 251, 20)";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";
    document.getElementById("trainer").style.color="white";


}

function program(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="rgb(20, 251, 20)";
    document.getElementById("trainer").style.color="white";


}
function plan(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="rgb(20, 251, 20)";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";
    document.getElementById("trainer").style.color="white";


}
function blog(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="rgb(20, 251, 20)";
    document.getElementById("programs").style.color="white";
    document.getElementById("trainer").style.color="white";


}
function trainer(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="white";
    document.getElementById("blogs").style.color="rgb(20, 251, 20)";
    document.getElementById("programs").style.color="white";
    document.getElementById("trainer").style.color="white";
}
function contact(){
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("contacts").style.color="rgb(20, 251, 20)";
    document.getElementById("blogs").style.color="white";
    document.getElementById("programs").style.color="white";
    document.getElementById("trainer").style.color="white";


}
function submitContactForm() {
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;

    // Validate input fields
    if (!name || !number) {
        alert("Please fill in all fields.");
        return;
    }

    // Prepare the data to be sent to the server
    var data = {
        name: name,
        number: number
    };

    // Send the data to the Flask server using AJAX (POST request)
    $.ajax({
        url: '/',  
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
            // Handle successful response
            alert(response.message);
            // Optionally, clear the form fields after submission
            document.getElementById("name").value = "";
            document.getElementById("number").value = "";
        },
        error: function(xhr, status, error) {
            
            alert("There was an error submitting the form. Please try again.");
        }
    });
}