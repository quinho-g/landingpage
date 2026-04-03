
let titulo = document.getElementById('ti')
let tex = document.getElementById('tex')
let con = 0
function prox() {
    con++
    if(con == 0){
        titulo.innerText = 'Ambiente limpo'
        tex.innerHTML = 'Ambiente sempre organizado e higienizado diariamente, garantindo conforto e segurança para todos os alunos durante os treinos.'
    }if(con == 1){
        titulo.innerText = 'Máquinas de qualidade'
        tex.innerHTML = 'Equipamentos modernos e bem cuidados, pensados para oferecer treinos completos, seguros e eficientes para qualquer nível.'   
    }if(con == 2){
        titulo.innerText = 'Acompanhamento'
        tex.innerHTML = 'Instrutores presentes e prontos para ajudar, corrigindo exercícios e auxiliando alunos a alcançarem melhores resultados.'   
    }if(con == 3){
        titulo.innerText = 'Ambiente familiar'
        tex.innerHTML = 'Clima de academia de bairro, acolhedor e motivador, onde todos se sentem à vontade para treinar e evoluir juntos.'  
        con = -1
    }

}

