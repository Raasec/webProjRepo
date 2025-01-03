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
