let res = "" //calculador de respostas
let nometemp = document.getElementById('nome-temp') // nome do template
let descesp = document.getElementById("desc-especifica") // dewcrição do templte
let tquiz = document.getElementById("ti-quiz") // titulo do quiz
let page = document.getElementById("pag-p") //iframe do template

//src da outras versões
let ver1 = document.getElementById("ver1")
let ver2 = document.getElementById("ver2")
let ver3 = document.getElementById("ver3")

//nome das outras versões
let nom1 = document.getElementById("nom1")
let nom2 = document.getElementById("nom2")
let nom3 = document.getElementById("nom3")

// seção de fuga
let fuga = document.getElementById("escape") // bloco de fuga
let versoes = document.getElementById('versoes') // grid das verções

// mensagem da versão principal
let zapp = document.getElementById("zapp")

// mensagem do zap das outras verções
let chama1 = document.getElementById("chama1")
let chama2 = document.getElementById("chama2")
let chama3 = document.getElementById("chama3")

// Chamar perguntas e resultado
function quizpage(sumir, aparecer) {
    let suma = document.getElementById(sumir)
    let venha = document.getElementById(aparecer)
    suma.style.display = 'none'
    venha.style.display = 'grid'
}


// Calcular e mostrar o resultado
function resul(val) {
    res += val
    console.log(res)
    //conhecer redes / simples e direto 11
    if (res == 11){
       nometemp.innerText = 'Link Pulse'
       page.src = 'https://quinho-g.github.io/junior/' 
       descesp.innerText = 'Ideal para organizar suas redes sociais de forma clara e profissional.'
       zapp.href = 'https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Link%20Pulse.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim.'

       nom1.innerText = 'Social Clean'
       ver1.src = 'https://quinho-g.github.io/empreendedor/'
       chama1.href = "https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Social%20Clean.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim."

       nom2.innerText = 'Link Core'
       ver2.src = 'https://quinho-g.github.io/raiz/'
       chama2.href = "https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Link%20Core.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim."
       
       nom3.innerText = 'Base Links'
       ver3.src = 'https://quinho-g.github.io/ani1/'
       chama3.href = "https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Base%20Links.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim."
       
       tquiz.innerText = "Esse é o modelo que mais combina com você!"
      }



    //enteder melhor quem eu sou / simples e direto 21
    if (res == 21){
       nometemp.innerText = 'Profile Clean'
       page.src = 'https://quinho-g.github.io/Reis/'
       descesp.innerText = 'Ideal para se apresentar de forma direta antes de levar para suas redes.'
       zapp.href = 'https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Profile%20Clean.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim.'

       nom1.innerText = 'Identity'
       ver1.src = 'https://quinho-g.github.io/identidade/'
       chama1.href = "https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Identity.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim."

       nom2.innerText = 'About Me'
       ver2.src = 'https://quinho-g.github.io/fotos/'
       chama2.href = "https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20About%20Me.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim."

       nom3.innerText = 'Base Links'
       ver3.src = 'https://quinho-g.github.io/ani1/'
       chama3.href = "https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Base%20Links.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim."
       
       tquiz.innerText = "Esse é o modelo que mais combina com você!"
      }


    //interagir comigo / simples e direto 31
    if (res == 31){
       nometemp.innerText = 'Direct Contact'
       page.src = 'https://quinho-g.github.io/mensagem2/'
       descesp.innerText = 'Ideal para quem quer facilitar o contato direto por e-mail.'
       zapp.href = 'https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Direct%20Contact.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim.'
       
       nom1.innerText = 'Connect Clean'
       ver1.src = 'https://quinho-g.github.io/mensagem5/'
       chama1.href = "https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Connect%20Clean.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim."

       nom2.innerText = 'Reach'
       ver2.src = 'https://quinho-g.github.io/mensagem3/'
       chama2.href = "https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Reach.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim."

       nom3.innerText = 'Contact Base'
       ver3.src = 'https://quinho-g.github.io/mensagem1/'
       chama3.href = "https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Contact%20Base.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim."
       
       tquiz.innerText = "Esse é o modelo que mais combina com você!"
      }


    //conhecer redes / diferente e interativo 12
    if (res == 12){
       nometemp.innerText = 'Base Links'
       page.src = 'https://quinho-g.github.io/ani1/' 
       descesp.innerText = 'Um jeito mais dinâmico e moderno de apresentar suas redes sociais.'
       zapp.href = 'https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Base%20Links.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim.'

       nom1.innerText = 'Social Clean'
       ver1.src = 'https://quinho-g.github.io/empreendedor/'
       chama1.href = "https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Social%20Clean.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim."

       nom2.innerText = 'Link Pulse'
       ver2.src = 'https://quinho-g.github.io/junior/'
       chama2.href = "https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Link%20Pulse.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim."

       nom3.innerText = 'Link Core'
       ver3.src = 'https://quinho-g.github.io/raiz/'
       chama3.href = "https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Link%20Core.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim."
       
       tquiz.innerText = "Esse é o modelo que mais combina com você!"
      }



    //enteder melhor quem eu sou / diferente e interativo 22
    if (res == 22){
       nometemp.innerText = 'Story Flow'
       page.src = 'https://quinho-g.github.io/quiz2/'
       descesp.innerText = 'Ideal para quem quer se apresentar de forma mais envolvente e interativa.'
       zapp.href = 'https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Story%20Flow.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim.'
       
       nom1.innerText = 'About Me'
       ver1.src = 'https://quinho-g.github.io/fotos/'
       chama1.href = "https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20About%20Me.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim."

       nom2.innerText = 'Profile Clean'
       ver2.src = 'https://quinho-g.github.io/Reis/'
       chama2.href = "https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Profile%20Clean.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim."

       nom3.innerText = 'Identity'
       ver3.src = 'https://quinho-g.github.io/identidade/'
       chama3.href = "https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Identity.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim."
       
       tquiz.innerText = "Esse é o modelo que mais combina com você!"
      }


    //interagir comigo / diferente e interativo 32
    if (res == 32){
       nometemp.innerText = 'Connect Clean'
       page.src = 'https://quinho-g.github.io/mensagem5/' 
       descesp.innerText = 'Template interativo focado em gerar contato e resposta.'
       zapp.href = 'https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Connect%20Clean.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim.'


       nom1.innerText = 'Reach'
       ver1.src = 'https://quinho-g.github.io/mensagem3/'
       chama1.href = "https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Reach.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim."

       nom2.innerText = 'Direct Contact'
       ver2.src = 'https://quinho-g.github.io/mensagem2/'
       chama2.href = "https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Direct%20Contact.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim."

       nom3.innerText = 'Contact Base'
       ver3.src = 'https://quinho-g.github.io/mensagem1/'
       chama3.href = "https://wa.me/5519991217911?text=Oi!%20Fiz%20o%20quiz%20no%20seu%20site%20e%20me%20interessei%20pelo%20template%20Contact%20Base.%20Gostaria%20de%20adaptar%20esse%20modelo%20pra%20mim."
       
       tquiz.innerText = "Esse é o modelo que mais combina com você!"
      }

} 
 
//chamr as outras versões
function chamaver() {
    versoes.style.display = 'grid'
    fuga.style.display = 'flex'
}




/* 
Texto prontos 

Link Pulse 
Esse é o modelo que você escolheu 👇
https://linkpulsetemp.netlify.app/

Para a adaptação da sua página, vou precisar das seguintes informações.
1- Nome e sobrenome
2- Profissão
3- Texto descritivo breve (Caso não tenha podemos montar um para você)
4- Links das redes socias
5- Links adicionais (Cursos, e-books, grupos, etc)
6- 3 coisas que gosta de fazer 
7- Imagem para capa

Para escolher a cor base da página, entre nesse link 👇
https://www.figma.com/pt-br/circulo-cromatico/
Depois me passe o código HEX da cor que escolheu!





Social Clean 
Esse é o modelo que você escolheu 👇
https://socialcleantemp.netlify.app/

Para a adaptação da sua página, vou precisar das seguintes informações.
1- Nome e sobrenome
2- Texto descritivo breve (Caso não tenha podemos montar um para você)
3- Links das redes socias
4- Links adicionais (Cursos, e-books, grupos, etc)
5- 3 coisas que gosta de fazer 
6- Imagem para capa em destaque
7- Imagem de logo ou segunda imagem para a capa

Para escolher a cor base da página, entre nesse link 👇
https://www.figma.com/pt-br/circulo-cromatico/
Depois me passe o código HEX da cor que escolheu!





Link Core 
Esse é o modelo que você escolheu 👇
https://linkcoretemp.netlify.app/

Para a adaptação da sua página, vou precisar das seguintes informações.
1- Nome e sobrenome
2- Texto descritivo breve (Caso não tenha podemos montar um para você)
3- Links das redes socias
4- Links adicionais (Cursos, e-books, grupos, etc)
5- 3 coisas que gosta de fazer 
6- Imagem para capa em destaque
7- Depoimentos de amigos (Com nome e foto)

Para escolher a cor base da página, entre nesse link 👇
https://www.figma.com/pt-br/circulo-cromatico/
Depois me passe o código HEX da cor que escolheu!





Base Links 
Esse é o modelo que você escolheu 👇
https://baselinkstemp.netlify.app/

Para a adaptação da sua página, vou precisar das seguintes informações.
1- Nome e sobrenome
2- Texto descritivo breve (Caso não tenha podemos montar um para você)
3- Links das redes socias
4- Links adicionais (Cursos, e-books, grupos, etc)
5- 3 coisas que gosta de fazer 
6- Imagem para capa em destaque
7- Fotos de seus melhores momentos com titulo

Para escolher a cor base da página, entre nesse link 👇
https://www.figma.com/pt-br/circulo-cromatico/
Depois me passe o código HEX da cor que escolheu!





Profile Clean
Esse é o modelo que você escolheu 👇
https://profilecleantemp.netlify.app/

Para a adaptação da sua página, vou precisar das seguintes informações.
1- Nome e sobrenome
2- Texto descritivo breve (Caso não tenha podemos montar um para você)
3- Profissão
4- Links das redes socias
5- Links adicionais (Cursos, e-books, grupos, etc)
6- 3 coisas que gosta de fazer 
7- Imagem para capa em destaque
8- Imagem para biografia
9- Biografia
10- Fotos de viagens com nome do local
11- Depoimentos de amigos com fotos e @ do instagram

Para escolher a cor base da página, entre nesse link 👇
https://www.figma.com/pt-br/circulo-cromatico/
Depois me passe o código HEX da cor que escolheu!




Identity
Esse é o modelo que você escolheu 👇
https://identitytemp.netlify.app/

Para a adaptação da sua página, vou precisar das seguintes informações.
1- Nome e sobrenome
2- Texto descritivo breve (Caso não tenha podemos montar um para você)
3- Profissão
4- Links das redes socias
5- Links adicionais (Cursos, e-books, grupos, etc)
6- 3 coisas que gosta de fazer 
7- Imagem para capa em destaque
8- Seus objetivos
9- Suas qualidades
10- Seus defeitos
11- Depoimentos do seus amigos sobre você

Para escolher a cor base da página, entre nesse link 👇
https://www.figma.com/pt-br/circulo-cromatico/
Depois me passe o código HEX da cor que escolheu!



About Me
Esse é o modelo que você escolheu 👇
https://aboutmetemp.netlify.app/

Para a adaptação da sua página, vou precisar das seguintes informações.
1- Nome e sobrenome
2- Texto descritivo breve (Caso não tenha podemos montar um para você)
4- Links das redes socias
5- 3 coisas que gosta de fazer 
6- 1° Imagem para a capa
7- 2° imagem para a capa
8- Imagem principal para a biografia
9- 2° imagem para a biografia
10- Biografia
11- 3 conquistas
12- Recordações e viagens com foto e nome (Mande todas as fotos de cada viagem ou recordações)
13- Imagem para questionario
14- Perguntas frequentes sobre você com respostas

Para escolher a cor base da página, entre nesse link 👇
https://www.figma.com/pt-br/circulo-cromatico/
Depois me passe o código HEX da cor que escolheu!




Direct Contact 
Esse é o modelo que você escolheu 👇
https://directcontacttemp.netlify.app/

Para a adaptação da sua página, vou precisar das seguintes informações.
1- Nome e sobrenome
2- Profissão
3- Texto descritivo breve (Caso não tenha podemos montar um para você)
4- Links das redes socias
5- Links adicionais
6- 3 coisas sobre você para a capa
7- Imagem para a capa
8- 2 coisas que você faz ou sobre seu conteúdo
9- E-mail para contato

Para escolher a cor base da página, entre nesse link 👇
https://www.figma.com/pt-br/circulo-cromatico/
Depois me passe o código HEX da cor que escolheu!


Connect Clean
Esse é o modelo que você escolheu 👇
https://connectcleantemp.netlify.app/

Para a adaptação da sua página, vou precisar das seguintes informações.
1- Nome e sobrenome
2- Profissão
3- Texto descritivo breve (Caso não tenha podemos montar um para você)
4- Links das redes socias
5- Links adicionais
6- 3 coisas sobre você para a capa
7- Imagem para a capa
8- 2 coisas que você faz ou sobre seu conteúdo
9- E-mail para contato

Para escolher a cor base da página, entre nesse link 👇
https://www.figma.com/pt-br/circulo-cromatico/
Depois me passe o código HEX da cor que escolheu!



Reach
Esse é o modelo que você escolheu 👇
https://reachtemp.netlify.app/

Para a adaptação da sua página, vou precisar das seguintes informações.
1- Nome e sobrenome
2- Profissão
3- Texto descritivo breve (Caso não tenha podemos montar um para você)
4- Links das redes socias
5- Links adicionais
6- Imagem para a capa
8- 2 coisas que você faz ou sobre seu conteúdo
9- E-mail para contato
10- Fotos de seus melhores momentos

Para escolher a cor base da página, entre nesse link 👇
https://www.figma.com/pt-br/circulo-cromatico/
Depois me passe o código HEX da cor que escolheu!



Contact Base 
Esse é o modelo que você escolheu 👇
https://contactbasetemp.netlify.app/

Para a adaptação da sua página, vou precisar das seguintes informações.
1- Nome e sobrenome
2- Texto descritivo breve (Caso não tenha podemos montar um para você)
3- Links das redes socias
4- Links adicionais
5- Imagem para a capa
6- 3 coisas sobre você 
7- E-mail para contato
8- Motivo desejado para o contato

Para escolher a cor base da página, entre nesse link 👇
https://www.figma.com/pt-br/circulo-cromatico/
Depois me passe o código HEX da cor que escolheu!




Story Flow
Esse é o modelo que você escolheu 👇
https://storyflowtemp.netlify.app/

Para a adaptação da sua página, vou precisar das seguintes informações.
1- Nome e sobrenome
2- Texto descritivo breve (Caso não tenha podemos montar um para você)
3- 2 coisas sobre você para a capa
4- Imagem para a capa
5- Links das redes socias
6- Links adicionais
7- Imagem para a capa
8- 2 coisas que você gosta de fazer
9- Perguntas que você deseja colocar no quiz, com respostas

Para escolher a cor base da página, entre nesse link 👇
https://www.figma.com/pt-br/circulo-cromatico/
Depois me passe o código HEX da cor que escolheu!




Presense
Esse é o modelo que você escolheu 👇
https://presensetemp.netlify.app/

Para a adaptação da sua página, vou precisar das seguintes informações.
1- Nome e sobrenome
2- Frase descritiva sobre você
3- 2 imagens para a capa sobre você para a capa
4- Links das redes socias
5- Links adicionais
6- 3 coisas que você gosta de fazer
7- Biografia 
8- Imagem para biografia
9- Fotos sobre o seu trabalho
10- 4 texrtos sobre você
11- Imagem para colocar na seção ""sobre mim"
12- Fotos de seus melhores momentos com titulo

Para escolher a cor base da página, entre nesse link 👇
https://www.figma.com/pt-br/circulo-cromatico/
Depois me passe o código HEX da cor que escolheu!
*/


