// Inicializando o EmailJS com sua Public Key
emailjs.init("QJq2YdhSujtvvHzaZ"); // Substitua 'QJq2YdhSujtvvHzaZ' pelo seu User ID

// Adicionando um ouvinte de evento para o envio do formulário
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const formData = new FormData(this); // Obtém os dados do formulário

    // Envia os dados para o EmailJS com o seu service ID e template ID
    emailjs.sendForm("your_service_id", "your_template_id", formData) // Substitua pelos seus IDs
        .then(function(response) {
            alert("Message sent successfully!");
            console.log("Success:", response);
        }, function(error) {
            alert("Error sending message.");
            console.log("Error:", error);
        });
});
