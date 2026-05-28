    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

        // Inicializar EmailJS
        emailjs.init("b8ce7r3tC1g8Zpwth");

        // Obtener formulario
        const form = document.getElementById("contact-form");

        // Evento submit
        form.addEventListener("submit", function (event) {

            // Evita que la página se recargue
            event.preventDefault();

            // Enviar formulario
            emailjs.sendForm(
                "service_yitcxyg",
                "template_xuwamum",
                this
            )

            .then(() => {

                alert("Mensaje enviado correctamente 😄");

                // Limpiar formulario
                form.reset();

            })

            .catch((error) => {

                alert("Error al enviar el mensaje 😢");

                console.log(error);

            });

        });
