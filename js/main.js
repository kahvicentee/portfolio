const translations = {
    en: {
        hello: "Hello, I'm",
        role: "Full-Stack Web Developer",
        resume: "Download Resume",
        things: "Things I love",
        textjs: "JavaScript is my favorite Programming Language and where everything started for me. I enjoy building things that actually work in the browser and bringing ideas to life.",
        textbackend: "Even though I'm a full-stack developer, back-end is where I feel most at home. I enjoy working on the logic behind applications and making sure everything runs the way it should.",
        contlearn: "Continuous Learning",
        textcl: "Learning is something I truly love. I'm always exploring new programming languages and improvind my skills to keep growing my knowledge.",
        aboutme: "About Me",
        aboutme1: "Hi, I'm Karina Vicente, a developer focused on full-stack development. My journey in tech started 2 years ago, but it quickly became something I take seriously. I've been consistently studying, practicing, and building projects to turn knowledge into real skills.",
        aboutme2: "I enjoy working on the logic behind applications - understanding how things connect, how systems behave, and how to turn ideas into something functional. I'm not just interested in making things work, but in understanding why they work. Right now, I'm focused on improving through real projects and pushing myself to grow every day as a developer.",
        skillsets: "My Skillsets",
        projects: "Projects",
        address: "São Paulo - SP, Brazil"
    },
    pt: {
        hello: "Olá, eu me chamo",
        role: "Desenvolvedora Web Full-Stack",
        resume: "Baixar Currículo",
        things: "Coisas que eu amo",
        textjs: "JavaScript é a minha linguagem favorita e foi por onde tudo começou para mim na programação. Gosto de criar coisas que realmente funcionam no navegador e ver as ideias saindo do papel.",
        textbackend: "Apesar de atuar como desenvolvedora full-stack, é no back-end que eu me encontrei. Gosto de trabalhar com a lógica por trás das aplicações e estruturar tudo para que funcione bem de verdade.",
        contlearn: "Aprendizado Contínuo",
        textcl: "Aprender é algo que eu realmente amo. Estou sempre buscando conhecer novas linguagens e aprimorar minhas habilidades para ampliar cada vez mais o meu conhecimento.",
        aboutme: "Sobre Mim",
        aboutme1: "Oi, eu me chamo Karina Vicente, uma desenvolvedora focada em desenvolvimento full-stack. Minha jornada na tecnologia começou há 2 anos, mas rapidamente se tornou algo que levo a sério. Desde então, venho estudando, praticando e desenvolvendo projetos de forma consistente para transformar meu conhecimento em habilidades reais.",
        aboutme2: "Gosto de trabalhar com a lógica por trás das aplicações - entender como as coisas se conectam, como os sistemas se comportam e como transformar ideias em algo funcional. Não me interessa apenas fazer as coisas funcionarem, mas entender o porquê delas funcionarem. Atualmente, estou focada em evoluir através de projetos reais e em me desenvolver todos os dias como uma verdadeira profissional.",
        skillsets: "Minhas habilidades",
        projects: "Projetos",
        address: "São Paulo - SP, Brasil"
    }
}

function changeLanguage(lang) {
    $("[data-lang]").each(function() {
        const key = $(this).data("lang");
        $(this).text(translations[lang][key]);
    });

    $("#language-selected").text(lang.toUpperCase());
}

$(function() {
    $(".en").click(function() {
        changeLanguage("en");
    });

    $(".pt").click(function() {
        changeLanguage("pt");
    });

    $(".es").click(function() {
        changeLanguage("es");
    });
});