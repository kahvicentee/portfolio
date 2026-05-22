let linkCert = "https://kahvicentee.github.io/portfolio/assets/documents/"

const certificates = [
    {
        about: {
            en: "Programming Fundamentals",
            pt: "Fundamentos da Programação"
        },
        title: {
            en: "Learn to Program",
            pt: "Aprenda a Programar"
        },
        platform: "FIAP",
        year: "60h | 2026",
        button: {
            en: "See certificate",
            pt: "Ver certificado"
        }, 
        certificate: "learnProgram.png"
    },
    {
        about: {
            en: "Programming Language",
            pt: "Linguagem de Programação"
        },
        title: {
            en: "Python",
            pt: "Python"
        },
        platform: "FIAP",
        year: "80h | 2026",
        button: {
            en: "See certificate",
            pt: "Ver certificado"
        },
        certificate: ""
    },
    {
        about: {
            en: "Microsoft Office",
            pt: "Pacote Office"
        },
        title: {
            en: "Microsoft Excel 2016 - Basic",
            pt: "Microsoft Excel 2016 - Básico"
        }, 
        platform: "Fundação Bradesco - Escola Virtual",
        year: "15h | 2026",
        button: {
            en: "See certificate",
            pt: "Ver certificado"
        },
        certificate: "excelBasic.pdf"
    },
    {
        about: {
            en: "Programming Language",
            pt: "Linguagem de Programação"
        },
        title: {
            en: "Python Essentials 1",
            pt: "Fundamentos do Python 1"
        },
        platform: "CISCO Networking Academy",
        year: "30h | 2026",
        button: {
            en: "See certificate",
            pt: "Ver certificado"
        }, 
        certificate: "pythonEssentials.pdf"
    }
]

const containerCert = document.getElementById('cards-certificates');

function renderCertificates() {
    containerCert.innerHTML = "";

    certificates.forEach(certificate => {
        const cardCert = document.createElement('div');
        cardCert.classList.add("card-certificate");

        cardCert.innerHTML = `
            <div class="certificate">
                <button>${certificate.about[currentLang]}</button>
                <h1>${certificate.title[currentLang]}</h1>
                <p>${certificate.platform}</p>
                <hr />
                
                <div class="certificate-button">
                    <p>${certificate.year}</p>
                    <a href="${linkCert + certificate.certificate}" target="_blank">
                        ${certificate.button[currentLang]}
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `

        containerCert.appendChild(cardCert)
    })
}

document.addEventListener("languageChanged", (e) => {
    currentLang = e.detail;
    renderCertificates();
})

renderCertificates();