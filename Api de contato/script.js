function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_wo4cj08";
const templateID = "template_xp6w3cq";

emailjs
    .send(serviceID, templateID, params)
    .then(
        (res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("your message your sucessfuly");
        }
    )
    .cath((err) => console.log(err));
}

