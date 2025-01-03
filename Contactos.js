document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".infoButton");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            document.querySelectorAll(".card").forEach(card => {
                const info = card.querySelector(".hidden-info");

                if (card !== button.closest(".card")) {
                    info.style.display = "none";
                }
            });

            const card = button.closest(".card");
            const info = card.querySelector(".hidden-info");

            if (info.style.display === "block") {
                info.style.display = "none";
            } else {
                info.style.display = "block";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact_form");
    const successMessage = document.getElementById("success_message");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        successMessage.textContent = "A sua mensagem foi enviada com sucesso!";
        successMessage.classList.remove("hidden");

        form.reset();
    });
});
