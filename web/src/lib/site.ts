/** Replace placeholders before deploy / demo video. */
export const site = {
  name: "Andres Sanchez Alzate",
  title: "Andres Sanchez Alzate — Portfolio",
  tagline: "Developer · Project manager · Aspiring entrepreneur",
  education:
    "Advanced College Diploma in Computer Programming and Analysis (T177), George Brown College, Toronto",
  /** French baccalauréat (secondary) — for Academic + Résumé + bio */
  baccalaureat:
    "Baccalauréat — Liceo Francés de Pereira, Pereira, Colombia",
  languages: "Native Spanish · C2 French · C1 English",
  /** Set when you have a profile; footer / résumé hide the link when this is null */
  linkedInUrl: null as string | null,
  githubUrl: "https://github.com/asanchezalzate13",
  /** Used with FormSubmit (https://formsubmit.co) — first form submit triggers activation email */
  contactEmail: "as.alzate1@gmail.com",
  phone: "+1 437 673 1317",
  address: "186 Jarvis St, Toronto, ON M5B 2B7",
  /** Tatamá Colombian Coffee — storefront / brand site */
  tatamaUrl: "https://tatamacolombiancoffee.com",
} as const;
