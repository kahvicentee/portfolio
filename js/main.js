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
        aboutme1: "",
        aboutme2: "",
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
        aboutme1: "",
        aboutme2: "",
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