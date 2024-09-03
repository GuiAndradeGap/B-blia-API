function buscarVersiculo() {
    const versiculo = document.getElementById('versiculo').value;
    const versao = document.getElementById('versao').value;
    
    if (!versiculo) {
        alert('Por favor, insira um versículo.');
        return;
    }

    const url = `https://bible-api.com/${versiculo}?translation=${versao}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultadoDiv = document.getElementById('resultado');
            if (data.error) {
                resultadoDiv.innerHTML = `<p>Erro: ${data.error.message}</p>`;
            } else {
                resultadoDiv.innerHTML = `
                    <h2>Versículo: ${data.reference}</h2>
                    <p><strong>Texto:</strong> ${data.text}</p>
                    <p><strong>Versão:</strong> ${data.translation}</p>
                `;
            }
        })
        .catch(error => {
            console.error('Erro ao buscar o versículo:', error);
            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = `<p>Erro ao buscar o versículo. Por favor, tente novamente mais tarde.</p>`;
        });
}













    
            
            