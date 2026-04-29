let currentLang = "en";

const projects = [
    {
        title: {
            en: "TaskFlow",
            pt: "TaskFlow (Lista de Tarefas)"
        },
        description: {
            en: "This project was developed as a task management application, with the goal of helping users organize their daily activities in a simple and efficient way. Key features include task creation, editing and deletion, dynamic state updates, and a responsive interface. The project focuses on component-based architecture, state management, and clean code practices.",
            pt: "Este projeto foi desenvolvido como uma aplicação de gerenciamento de tarefas, com o foco em ajudar usuários a organizarem suas tarefas diárias de forma simples e eficiente. Entre as funcionalidades estão, criar, editar e apagar tarefas, atualização dinâmica de estado e uma interface responsiva. O projeto foca em arquitetura baseada em componentes, gerenciamento de estados e boas práticas de código."
        },
        image: "assets/images/taskFlow.png",
        link: "",
        code: "https://github.com/kahvicentee/projetoListaDeTarefas.git",
        post: "",
        techs: ["react", "sass", "node"]
    },
    {
        title: {
            en: "Calculator App",
            pt: "Calculadora"
        },
        description: {
            en: "This project was developed as a Frontend Mentor challenge, with the goal of building a fully functional and responsive calculator. Key features include theme switching (multiple visual modes), full support for both keyboard and button inputs, and a custom-built calculation logic implemented without using eval(), ensuring better control, security, and code quality.",
            pt: "Esse projeto foi desenvolvido como um desafio do Frontend Mentor, com o objetivo de criar uma calculadora totalmente funcional e responsiva. Nele, é possível fazer a troca de tema (múltiplias opções de layout), possui suporte completo ao teclado e lógica própria sem uso de eval(), garantindo assim, um melhor controle, segurança e qualidade do código."
        },
        image: "assets/images/calculatorApp.png",
        link: "https://kahvicentee.github.io/calculatorApp/",
        code: "https://github.com/kahvicentee/calculatorApp.git",
        post: "https://www.linkedin.com/posts/karinasvicente_acabei-de-finalizar-mais-um-projeto-ugcPost-7452365593493823488-mbBY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFFoQvYB67XQbhhBWs7mpms6pNNhjPdcz4k",
        techs: ["html5", "css3-alt", "js"]
    },
    {
        title: {
            en: "Age Calculator App",
            pt: "Calculadora De Idade",
        },
        description: {
            en: "This project also was developed as a Frontend Mentor challenge, wit the goal of building a responsive and accurate age calculator based on user input. Key features include form validation with real-time error feedback, precise date calculations considering months and leap years, and a clean, accessible interface.",
            pt: "Este projeto também foi desenvolvido como um desafio do Frontend Mentor, com o objetivo de criar uma calculadora de idade responsiva e precisa a partir dos dados inseridos pelo usuário. Entre as principais funcionalidades estão a validação de formulário com feedback de erros, cálculos de datas precisas, além de uma interface limpa e acessível."
        },
        image: "assets/images/ageCalculatorApp.png",
        link: "https://kahvicentee.github.io/ageCalculatorApp/",
        code: "https://github.com/kahvicentee/ageCalculatorApp.git",
        post: "",
        techs: ["html5", "css3-alt", "js"]
    }
];

const container = document.getElementById('cards-projects');

function renderProjects() {
    container.innerHTML = "";

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("card-proj");

        card.innerHTML = `
            <div class="project">
                <img src="${project.image}" alt="">

                <div class="overlay">
                    <div class="project-link">
                        <a href="${project.link}" title="Link" target="_blank"><i class="fa-solid fa-globe"></i></a>
                        <a href="${project.code}" title="Github" target="_blank"><i class="fa-brands fa-github icon"></i></a>
                        ${(project.post != "") 
                            ? `<a href="${project.post}" title="Post LinkedIn" target="_blank"><i class="fa-brands fa-linkedin-in icon"></i></a>`
                            : ""
                        }
                    </div>
                </div>
            </div>

            <h2>${project.title[currentLang]}</h2>
            <p>${project.description[currentLang]}</p>
                            
            <div class="techs"></div>
        `;

        const techsCard = card.querySelector(".techs");

        project.techs.forEach(tech => {
            const icon = document.createElement("i");
            icon.className = `fa-brands fa-${tech}`;
            techsCard.appendChild(icon);
        })

        container.appendChild(card);
    })
}

document.addEventListener("languageChanged", (e) => {
    currentLang = e.detail;
    renderProjects();
});

renderProjects();