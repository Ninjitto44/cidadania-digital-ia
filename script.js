// Função para o Modo Escuro
const btnDarkMode = document.getElementById('toggle-dark-mode');

btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Função para validar o Quiz
function verificarResposta(isCorrect) {
    const resultado = document.getElementById('resultado-quiz');
    
    if (isCorrect) {
        resultado.textContent = "Correto! Sempre desconfie e cheque em fontes confiáveis antes de compartilhar.";
        resultado.style.color = "#4caf50"; // Verde
    } else {
        resultado.textContent = "Incorreto. Atualmente, a IA consegue criar vídeos falsos muito realistas de pessoas públicas.";
        resultado.style.color = "#f44336"; // Vermelho
    }
}
