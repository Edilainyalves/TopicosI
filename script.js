document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");
    const downloadLink = document.getElementById("download-link");

    const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    window.pagamento = (metodo) => {
        if (!validarEmail(emailInput.value)) {
            mensagem.style.color = "red";
            mensagem.innerText = "Por favor, insira um e-mail válido.";
            return;
        }

        mensagem.style.color = "green";
        mensagem.innerText = `Pagamento via ${metodo.toUpperCase()} confirmado! Clique abaixo para baixar seu eBook.`;
        downloadLink.style.display = "block";
    };
});
