// =========================================================================
// 1° PASSO: SELECIONAR OS ELEMENTOS DO HTML E GUARDAR NAS VARIÁVEIS (const)
// =========================================================================

// Aqui o querySelector vai no HTML procurar os botões através das CLASSES (.)
const btnHome = document.querySelector(".btn-home");     // Guarda o botão Home
const btnfsemester = document.querySelector(".btn-fsemester"); // Guarda o botão 
const btnssemester = document.querySelector(".btn-ssemester"); // Guarda o botão 
const btntsemester = document.querySelector(".btn-tsemester"); // Guarda o botão 
const btnftsemester = document.querySelector(".btn-ftsemester"); // Guarda o botão 

// Aqui o querySelector vai no HTML procurar as seções de texto através dos IDs (#)
const abaHome = document.querySelector("#aba-home");       // Guarda a seção 
const abaFsemester = document.querySelector("#aba-fsemester");     // Guarda a seção
const abassemester = document.querySelector("#aba-ssemester"); // Guarda a seção do Contato
const abatsemester = document.querySelector("#aba-tsemester"); // Guarda a seção do Contato
const abaftsemester = document.querySelector("#aba-ftsemester"); // Guarda a seção do Contato

// =========================================================================
// 2° PASSO: ADICIONAR OS MONITORES DE EVENTO (addEventListener)
// =========================================================================

// -------------------------------------------------------------------------
// MONITOR DO BOTÃO HOME
// -------------------------------------------------------------------------
// Adicionamos alguém para ficar prestando atenção no clique do "btnHome"
btnHome.addEventListener("click", function() {
  // Quando o usuário clicar, esta função anônima é disparada automaticamente:
  
  // 1. Apagamos as outras abas tirando a classe "active" delas.
  // Como o CSS esconde quem não tem "active", as abas Sobre e Contato somem!
  abaFsemester.classList.remove("active");
  abassemester.classList.remove("active");
  abatsemester.classList.remove("active");
  abaftsemester.classList.remove("active");
  
  // 2. Acendemos a aba que queremos ver adicionando a classe "active" nela.
  // O CSS lê que a abaHome agora tem "active" e faz ela aparecer na tela.
  abaHome.classList.add("active");
});


// -------------------------------------------------------------------------
// MONITOR DO BOTÃO SOBRE MIM
// -------------------------------------------------------------------------
// Adicionamos alguém para ficar prestando atenção no clique do "btnSobre"
btnfsemester.addEventListener("click", function() {
  // Quando o usuário clicar no botão Sobre Mim:
  
  // 1. Apagamos as abas Home e Contato removendo a classe "active" delas.
  abaHome.classList.remove("active");
  abassemester.classList.remove("active");
  abatsemester.classList.remove("active");
  abaftsemester.classList.remove("active");
  
  // 2. Acendemos a aba do Sobre adicionando a classe "active" nela.
  abaFsemester.classList.add("active");
});


// -------------------------------------------------------------------------
// MONITOR DO BOTÃO CONTATO
// -------------------------------------------------------------------------
// Adicionamos alguém para ficar prestando atenção no clique do "btnContato"
btnssemester.addEventListener("click", function() {
  // Quando o usuário clicar no botão Contato:
  
  // 1. Apagamos as abas Home e Sobre removendo a classe "active" delas.
  abaHome.classList.remove("active");
  abaFsemester.classList.remove("active");
  abatsemester.classList.remove("active");
  abaftsemester.classList.remove("active");
  
  // 2. Acendemos a aba do Contato adicionando a classe "active" nela.
  abassemester.classList.add("active");
});


// -------------------------------------------------------------------------
// MONITOR DO BOTÃO CONTATO
// -------------------------------------------------------------------------
// Adicionamos alguém para ficar prestando atenção no clique do "btnContato"
btntsemester.addEventListener("click", function() {
  // Quando o usuário clicar no botão Contato:
  
  // 1. Apagamos as abas Home e Sobre removendo a classe "active" delas.
  abaHome.classList.remove("active");
  abaFsemester.classList.remove("active");
  abassemester.classList.remove("active");
  abaftsemester.classList.remove("active");
  
  // 2. Acendemos a aba do Contato adicionando a classe "active" nela.
  abatsemester.classList.add("active");
});


// -------------------------------------------------------------------------
// MONITOR DO BOTÃO CONTATO
// -------------------------------------------------------------------------
// Adicionamos alguém para ficar prestando atenção no clique do "btnContato"
btnftsemester.addEventListener("click", function() {
  // Quando o usuário clicar no botão Contato:
  
  // 1. Apagamos as abas Home e Sobre removendo a classe "active" delas.
  abaHome.classList.remove("active");
  abaFsemester.classList.remove("active");
  abassemester.classList.remove("active");
  abatsemester.classList.remove("active");
  
  // 2. Acendemos a aba do Contato adicionando a classe "active" nela.
  abaftsemester.classList.add("active");
});



function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");

    menu.classList.toggle("show");
}
