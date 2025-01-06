/***************************************************
 * Change Language
 ***************************************************/
let currentLanguage = "de";

function updateTexts(language) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const translationKey = el.getAttribute("data-i18n").split(".");
    let text = translations[language];
    translationKey.forEach((key) => {
      text = text[key];
    });
    el.textContent = text;
  });
}

const languageToggle = document.getElementById("btn-language-toggle");
const currentFlag = document.getElementById("current-flag");

languageToggle.addEventListener("click", () => {
  const newLanguage = currentLanguage === "de" ? "en" : "de";

  currentLanguage = newLanguage;

  currentFlag.src = `assets/flag-${newLanguage}.svg`;
  languageToggle.setAttribute("data-lang", newLanguage);
  updateTexts(newLanguage);
});

// Load default language de on start
document.addEventListener("DOMContentLoaded", () => {
  updateTexts(currentLanguage);
});

/***************************************************
 * THEME TOGGLE
 ***************************************************/
const themeToggleBtn = document.getElementById("btn-theme-toggle");

themeToggleBtn.addEventListener("click", () => {
  const htmlEl = document.documentElement;

  if (htmlEl.classList.contains("theme-light")) {
    htmlEl.classList.remove("theme-light");
    htmlEl.classList.add("theme-dark");
    themeToggleBtn.querySelector("img").src = "assets/moon.svg";
  } else {
    htmlEl.classList.remove("theme-dark");
    htmlEl.classList.add("theme-light");
    themeToggleBtn.querySelector("img").src = "assets/sun.svg";
  }
});

let aboutLinks = document.getElementsByClassName("about__links");
let aboutContents = document.getElementsByClassName("about__contents");

function openContentTab(contentName) {
  for (aboutLink of aboutLinks) {
    aboutLink.classList.remove("about__links--active");
  }

  for (aboutContent of aboutContents) {
    aboutContent.classList.remove("about__contents--active");
  }

  event.currentTarget.classList.add("about__links--active");

  document.getElementById(contentName).classList.add("about__contents--active");
}

/***************************************************
 * Translations
 ***************************************************/

const translations = {
  en: {
    hero: {
      nav: {
        home: "Home",
        about: "About Me",
        projects: "Projects",
        contact: "Contact",
      },
      content: {
        title: "Full Stack Developer",
        greeting1: "Hi, I'm Mike ",
        greeting2: "From Germany",
      },
    },
    about: {
      title: "About Me",
      articles: {
        past: {
          title: "Past",
          text: "In the past, I served as a soldier. During this phase of my life, I acquired numerous soft skills that shaped me into the determined, responsible, team-oriented, and resilient person I am today.",
        },
        present: {
          title: "Present",
          text: "I am currently working towards entering the software industry. To achieve this, I am deepening my knowledge and continuously acquiring new skills. Additionally, I am working on exciting projects that can either already be viewed or will soon be available in the 'Projects' section.",
        },
        future: {
          title: "Future",
          text: "For the future, I plan to leverage my drive and dedication to develop into a versatile and experienced Senior Developer.",
        },
      },
      content: {
        education: {
          wbsTitle: "WBS Coding School",
          wbsContent: "Certified Full Stack Web Developer",
        },
        experience: {
          experienceTitle: "None",
          experienceContent: "Currently looking for a job",
        },
      },
    },
    projects: {
      title: "My Projects",
      detailButton: "Open Project",
    },
    contact: {
      title: "Contact Me",
      nameLabel: "Name:",
      emailLabel: "Email:",
      messageLabel: "Message:",
      submit: "Send",
    },
  },
  de: {
    hero: {
      nav: {
        home: "Start",
        about: "Über mich",
        projects: "Projekte",
        contact: "Kontakt",
      },
      content: {
        title: "Full Stack Developer",
        greeting1: "Hi, Ich Bin Mike",
        greeting2: "Aus Deutschland",
      },
    },
    about: {
      title: "Über Mich",
      articles: {
        past: {
          title: "Vergangenheit",
          text: "In meiner Vergangenheit war ich Zeitsoldat. In diesem Lebensabschnitt habe ich zahlreiche Soft Skills erworben, die mich zu einem willensstarken, verantwortungsbewussten, teamfähigen und stressresistenten Menschen geformt haben.",
        },
        present: {
          title: "Gegenwart",
          text: "Derzeit arbeite ich daran, in die Softwarebranche einzusteigen. Dafür vertiefe ich meine Kenntnisse und lerne kontinuierlich neue Fertigkeiten. Zudem arbeite ich an spannenden Projekten, die man sich entweder bereits jetzt oder in Kürze im Abschnitt 'Projekte' ansehen kann.",
        },
        future: {
          title: "Future",
          text: "Für die Zukunft plane ich, meinen Leistungswillen einzusetzen, um mich zu einem vielseitigen und erfahrenen Senior Developer weiterzuentwickeln.",
        },
      },
      content: {
        education: {
          wbsTitle: "WBS Coding School",
          wbsContent: "Zertifizierter Full-Stack Web Developer",
        },
        experience: {
          experienceTitle: "Keine",
          experienceContent: "Aktuell auf Jobsuche",
        },
      },
    },
    projects: {
      title: "Meine Projekte",
      detailButton: "Zum Projekt",
    },
    contact: {
      title: "Kontakt",
      nameLabel: "Name:",
      emailLabel: "E-Mail:",
      messageLabel: "Nachricht:",
      submit: "Senden",
    },
  },
};
