function atualizarCampo() {
    const filtro = document.getElementById("filtro").value;
    const campoInput = document.getElementById("campoInput");

    // Habilita o campo para entrada de texto
    if (filtro) {
        campoInput.disabled = false;
        campoInput.placeholder = `Digite o ${filtro}`;
    } else {
        campoInput.disabled = true;
        campoInput.placeholder = "Escolha uma das categorias acima";
    }
}

function verificar() {
    const filtro = document.getElementById("filtro").value;
    const valor = document.getElementById("campoInput").value.trim();

    if (!filtro) {
        alert("❌ Por favor, selecione uma categoria antes de buscar.");
        return;
    }

    if (!valor) {
        alert(`❌ Por favor, preencha o campo para buscar por ${filtro}.`);
        return;
    }

    // Mensagem de sucesso (ou lógica de busca)
    alert(`✅ Busca realizada com sucesso para o filtro "${filtro}" com valor: ${valor}`);
}

function limpar() {
    const campoInput = document.getElementById("campoInput");
    campoInput.disabled = true;
    campoInput.placeholder = "Escolha uma das categorias acima";
    document.getElementById("filtro").selectedIndex = 0;
}
