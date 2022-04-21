$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const banner = document.getElementById('banner');
const titulo = document.querySelector('.titulo');
const descricao = document.querySelector('.descricao');

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
const img8 = document.getElementById("img8");
const img9 = document.getElementById("img9");
const img10 = document.getElementById("img10");


img1.addEventListener('click', function(){
    banner.style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)), url(img/umbrella-bg.jpg)"
    banner.style.backgroundSize = "cover"
    titulo.innerText = 'The Umbrella Academy'
    descricao.innerText = 'Com a morte do pai, irmãos com poderes extraordinários se reencontram e descobrem surpreendentes segredos de família – além de uma ameaça iminente à humanidade.'
})

img2.addEventListener('click', function(){
    banner.style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)), url(img/star-bg.jpg)"
    banner.style.backgroundSize = "cover"
    titulo.innerText = 'Star Wars:A Ascensão Skywalker (2019)'
    descricao.innerText = 'Com o retorno do Imperador Palpatine, todos voltam a temer seu poder e, com isso, a Resistência toma a frente da batalha que ditará os rumos da galáxia.'
})

img3.addEventListener('click', function(){
    banner.style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)), url(img/pokemon-bg.jpg)"
    banner.style.backgroundSize = "cover"
    titulo.innerText = 'Pokémon'
    descricao.innerText = 'Explore o mundo de Pokémon com Ash e seu parceiro Pikachu em busca do sonho do menino de ser um mestre Pokémon.'
})

img4.addEventListener('click', function(){
    banner.style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)), url(img/capitao-bg.jpg)"
    banner.style.backgroundSize = "cover"
    titulo.innerText = 'Capitão América: Guerra Civil (2016)'
    descricao.innerText = 'Depois do ataque de Ultron, os políticos decidem controlar os Vingadores, já que suas ações afetam toda a humanidade. A decisão coloca o Capitão América em rota de colisão com o Homem de Ferro.'
})

img5.addEventListener('click', function(){
    banner.style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)), url(img/hobbit-bg.jpg)"
    banner.style.backgroundSize = "cover"
    titulo.innerText = 'O Hobbit: A Batalha dos Cinco Exércitos'
    descricao.innerText = 'O dragão Smaug lança sua fúria ardente contra a Cidade do Lago que fica próxima da montanha de Erebor. Bard consegue derrotá-lo, mas, rapidamente, sem a ameaça do dragão, inicia-se uma batalha pelo controle de Erebor e sua riqueza.'
})


img6.addEventListener('click', function(){
    banner.style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)), url('img/breaking-bg.jpg')"
    banner.style.backgroundSize = "cover"
    titulo.innerText = 'Breaking Bad'
    descricao.innerText = 'Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.'
})

img7.addEventListener('click', function(){
    banner.style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)), url(img/house-bg.jpg)"
    banner.style.backgroundSize = "cover"
    titulo.innerText = 'Dr House'
    descricao.innerText = 'Um médico dissidente e anti-social, que se especializou em medicina de diagnóstico. Faz o que for preciso para resolver casos intrigantes que estão no seu caminho, usando a sua equipe de médicos e sua inteligência.'
})

img8.addEventListener('click', function(){
    banner.style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)), url(img/sobrenatural-bg.jpg)"
    banner.style.backgroundSize = "cover"
    titulo.innerText = 'Sobrenatural'
    descricao.innerText = 'Os irmãos Dean e Sam vasculham o país em busca de atividades paranormais, brigando com demônios, fantasmas e monstros no caminho.'
})

img9.addEventListener('click', function(){
    banner.style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)), url(img/smallville-bg.jpg)"
    banner.style.backgroundSize = "cover"
    titulo.innerText = 'Smallville: As Aventuras do Superboy'
    descricao.innerText = 'Com a morte do pai, irmãos com poderes extraordinários se reencontram e descobrem surpreendentes segredos de família – além de uma ameaça iminente à humanidade.Antes da vida como Super-Homem, o jovem Clark Kent encara os problemas da adolescência enquanto aprende a controlar seus poderes e usá-los para proteger a cidade de Smallville.'
})

img10.addEventListener('click', function(){
    banner.style.background = "linear-gradient(rgba(0,0,0,.50), rgba(0,0,0,.50)), url(img/vingadores-bg.jpg)"
    banner.style.backgroundSize = "cover"
    titulo.innerText = 'Vingadores: Guerra Infinita'
    descricao.innerText = 'Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.'
})