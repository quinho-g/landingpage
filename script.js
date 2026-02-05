let nom = document.getElementById('n-desc')
let desc = document.getElementById('desc')
let ddd = document.getElementById('ddd')
let c = 0
function fun() {
   c++
   if (c == 0 ) {
      nom.innerText = '1- Entendimento do seu negócio'
      desc.innerText = 'Primeiro eu entendo como é o seu negócio, seu público e o que você quer divulgar. A partir disso, a página é criada de forma personalizada, pensada para o seu estilo e objetivo.'
      ddd.innerText = 'Continuar'
   }
   if (c == 1 ) {
      nom.innerText = '2- Envio das informações'
      desc.innerText = 'Você me envia tudo o que quiser colocar na página: links, fotos, textos, redes sociais, contatos, etc. Se não tiver tudo pronto, eu te ajudo a organizar.'
   }
      if (c == 2 ) {
      nom.innerText = '3- Criação da página'
      desc.innerText = 'Com base no modelo escolhido e nas suas informações, eu crio sua página de forma personalizada, organizada e visualmente bonita.'
   }
      if (c == 3 ) {
      nom.innerText = '4- Revisão e ajustes'
      desc.innerText = 'Te envio a página para você revisar. Aqui você pode pedir ajustes de texto, links, cores ou detalhes visuais.'
   }
      if (c == 4) {
      nom.innerText = '5- Aprovação'
      desc.innerText = 'Depois que você aprovar a página, seguimos para a etapa final.'
   }
      if (c == 5 ) {
      nom.innerText = '6- Publicação e pagamento'
      desc.innerText = 'Após a aprovação, é realizado o pagamento e a página é publicada. A manutenção mensal já está inclusa e cobre atualizações de informações, ajustes simples e a manutenção do site online e funcionando corretamente.'
      ddd.innerText = 'Voltar ao inicio'
      c = -1
   }
}
