export type Locale = "de" | "en";

export const translations = {
  nav: {
    why: { de: "Warum JUNO", en: "Why JUNO" },
    features: { de: "Funktionen", en: "Features" },
    earlyAccess: { de: "Early Access", en: "Early Access" },
    cta: { de: "Early Access sichern", en: "Get Early Access" },
  },
  hero: {
    heading: {
      de: "Dein Alltag als Hebamme –\nendlich planbar.",
      en: "Your everyday as a midwife –\nfinally plannable.",
    },
    subtitle: {
      de: "JUNO organisiert Termine, Kommunikation und Routen für dich – und spart dir jeden Monat Stunden an Chaos.",
      en: "JUNO organizes appointments, communication, and routes for you – saving you hours of chaos every month.",
    },
    cta: { de: "Jetzt Early Access sichern", en: "Get Early Access Now" },
    ctaSub: {
      de: "Kostenlos testen · Mitgestalten · Kein Risiko",
      en: "Try for free · Shape the product · No risk",
    },
    quote: {
      de: '\u201eSpart mir locker 16 Stunden im Monat\u201c',
      en: '\u201cSaves me easily 16 hours a month\u201d',
    },
    quoteCite: { de: "— Helena, 32", en: "— Helena, 32" },
  },
  problem: {
    label: { de: "Die Realität", en: "The Reality" },
    heading: { de: "Kommt dir das bekannt vor?", en: "Does this sound familiar?" },
    items: [
      {
        de: "Terminänderungen bringen deinen ganzen Plan durcheinander",
        en: "Schedule changes disrupt your entire plan",
      },
      {
        de: "Deine Routen kosten dich unnötig Zeit und Nerven",
        en: "Your routes cost you unnecessary time and stress",
      },
      {
        de: "Du jonglierst Kalender, Notizen und Infos gleichzeitig",
        en: "You juggle calendars, notes, and info simultaneously",
      },
      {
        de: "Am Ende des Tages bleibt zu viel Organisation – und zu wenig Zeit",
        en: "At the end of the day, too much is left to organize – and too little time remains",
      },
    ],
  },
  solution: {
    label: { de: "Die Lösung", en: "The Solution" },
    heading: {
      de: "Weniger Chaos.\nMehr Zeit für das, was zählt.",
      en: "Less chaos.\nMore time for what matters.",
    },
    intro: {
      de: "JUNO übernimmt genau die Dinge, die dich täglich Energie kosten – damit du dich auf deine Familien konzentrieren kannst.",
      en: "JUNO takes over exactly the things that drain your energy every day – so you can focus on your families.",
    },
    blocks: [
      {
        num: { de: "01 · Tagesplanung", en: "01 · Daily Planning" },
        title: {
          de: "Ein Tag, der sich endlich logisch anfühlt",
          en: "A day that finally feels logical",
        },
        desc: {
          de: "Alle Termine in einer klaren Reihenfolge – inklusive Pausen und Fahrtzeiten. Kein manuelles Zusammenpuzzeln zwischen Kalender, Notizen und WhatsApp.",
          en: "All appointments in a clear order – including breaks and travel times. No more manual puzzling between calendars, notes, and WhatsApp.",
        },
        promise: { de: "Struktur & Planbarkeit", en: "Structure & Clarity" },
        image: "/assets/juno/APP_mockup-screen-1.png",
        alt: { de: "JUNO Tagesübersicht", en: "JUNO Daily Overview" },
      },
      {
        num: { de: "02 · Routenplanung", en: "02 · Route Planning" },
        title: {
          de: "Deine Route plant sich mit",
          en: "Your route plans itself",
        },
        desc: {
          de: "JUNO berechnet automatisch die effizienteste Reihenfolge für deine Hausbesuche. 12 km weniger fahren – jeden Tag. Das ist Zeit, die du zurückbekommst.",
          en: "JUNO automatically calculates the most efficient order for your home visits. 12 km less driving – every day. That's time you get back.",
        },
        promise: { de: "Weniger Fahrzeit", en: "Less Drive Time" },
        image: "/assets/juno/APP_mockup-screen-2.png",
        alt: { de: "JUNO Optimierte Route", en: "JUNO Optimized Route" },
      },
      {
        num: { de: "03 · Änderungen & Verspätungen", en: "03 · Changes & Delays" },
        title: {
          de: "Läuft ein Termin länger? Kein Problem.",
          en: "Running late? No problem.",
        },
        desc: {
          de: "Ein Tipper, alle informiert. JUNO benachrichtigt automatisch alle betroffenen Familien mit der neuen Uhrzeit – du musst nichts erklären, nichts tippen, nichts koordinieren.",
          en: "One tap, everyone informed. JUNO automatically notifies all affected families with the new time – no explaining, no typing, no coordinating.",
        },
        promise: { de: "Stressreduktion bei Änderungen", en: "Less Stress with Changes" },
        image: "/assets/juno/APP_mockup-screen-3.png",
        alt: { de: "JUNO Verspätungs-Benachrichtigung", en: "JUNO Delay Notification" },
      },
    ],
  },
  earlyAccess: {
    label: { de: "Early Access", en: "Early Access" },
    heading: {
      de: "Sei dabei, wenn JUNO den Alltag verändert.",
      en: "Be there when JUNO changes everyday life.",
    },
    subtitle: {
      de: "Wir suchen Hebammen, die JUNO mitgestalten wollen. Dein Feedback formt das Produkt – und du bekommst als Erste Zugang.",
      en: "We're looking for midwives who want to help shape JUNO. Your feedback forms the product – and you get access first.",
    },
    cta: { de: "Jetzt Early Access sichern", en: "Get Early Access Now" },
    ctaSub: {
      de: "Kostenlos testen · Mitgestalten · Kein Risiko",
      en: "Try for free · Shape the product · No risk",
    },
    tourTitle: { de: "Tour complete!", en: "Tour complete!" },
    tourDate: { de: "16. April 2026", en: "April 16, 2026" },
    tourVisits: { de: "Besuche", en: "Visits" },
    tourDrive: { de: "Fahrzeit", en: "Drive time" },
    tourDistance: { de: "Kilometer", en: "Distance" },
    tourWork: { de: "Arbeitszeit", en: "Work time" },
    testimonials: [
      {
        quote: {
          de: "Spart mir locker 16 Stunden im Monat – das ist Zeit, die ich mit meiner Familie verbringe.",
          en: "Saves me easily 16 hours a month – that's time I spend with my family.",
        },
        cite: {
          de: "Helena, 32 – Freiberufliche Hebamme",
          en: "Helena, 32 – Freelance Midwife",
        },
      },
      {
        quote: {
          de: "Endlich muss ich nicht mehr für jede Verspätung fünf Nachrichten schreiben.",
          en: "Finally I don't have to write five messages for every delay anymore.",
        },
        cite: {
          de: "Sara, 28 – Hebamme, 3 Tage Hausbesuche/Woche",
          en: "Sara, 28 – Midwife, 3 days home visits/week",
        },
      },
    ],
  },
  ourStory: {
    name: { de: "Anna", en: "Anna" },
    role: { de: "Forschung", en: "Research" },
    heading: { de: "Unsere Geschichte", en: "Our Story" },
    section1Title: {
      de: "Wie alles begann",
      en: "How it all started",
    },
    section1Text: {
      de: "JUNO entstand aus einem echten Problem: Hebammen verbringen zu viel Zeit mit Organisation statt mit ihren Familien. Anna, selbst aus dem Gesundheitsbereich, hat das hautnah erlebt.",
      en: "JUNO was born from a real problem: midwives spend too much time organizing instead of being with their families. Anna, coming from the healthcare field herself, experienced this firsthand.",
    },
    section2Title: {
      de: "Unsere Mission",
      en: "Our Mission",
    },
    section2Text: {
      de: "Wir wollen Hebammen den Rücken freihalten – mit einer App, die den Arbeitsalltag so organisiert, dass mehr Zeit für das Wesentliche bleibt: die Betreuung von Müttern und Familien.",
      en: "We want to free midwives from administrative burden – with an app that organizes daily work so there's more time for what matters most: caring for mothers and families.",
    },
    section3Title: {
      de: "Warum JUNO anders ist",
      en: "Why JUNO is different",
    },
    section3Text: {
      de: "JUNO wird nicht im stillen Kämmerlein entwickelt, sondern gemeinsam mit Hebammen. Jedes Feature basiert auf echtem Feedback – damit die App wirklich zum Alltag passt.",
      en: "JUNO isn't developed behind closed doors, but together with midwives. Every feature is based on real feedback – so the app truly fits everyday life.",
    },
  },
  ourTeam: {
    heading: { de: "Unser Team", en: "Our Team" },
    subtitle: { de: "Die Menschen hinter JUNO", en: "The people behind JUNO" },
    roles: {
      Jannik: { de: "Produkt", en: "Product" },
      Anna: { de: "Forschung", en: "Research" },
      Sandra: { de: "Scrum Master", en: "Scrum Master" },
      Julian: { de: "Entwickler", en: "Developer" },
      Can: { de: "Entwickler", en: "Developer" },
      Daniel: { de: "Entwickler", en: "Developer" },
      Bernard: { de: "Entwickler", en: "Developer" },
      Tarek: { de: "Entwickler", en: "Developer" },
    } as Record<string, { de: string; en: string }>,
  },
  features: {
    heading: { de: "Was JUNO für dich tut.", en: "What JUNO does for you." },
    subtitle: {
      de: "JUNO wurde speziell für den Arbeitsalltag von Hebammen entwickelt – mit Funktionen, die dir echte Zeit zurückgeben.",
      en: "JUNO was built specifically for the daily work of midwives – with features that give you real time back.",
    },
    items: [
      {
        title: { de: "Hebammen Kalender", en: "Midwife Calendar" },
        desc: {
          de: "Hausbesuche, Schichten und Pausen – alles in einem Kalender.\nMit deiner Route verknüpft und speziell für den Arbeitsalltag von Hebammen entwickelt.",
          en: "Home visits, shifts, and breaks – all in one calendar.\nLinked to your route and specially designed for the daily work of midwives.",
        },
      },
      {
        title: { de: "Automatisierte Kommunikation", en: "Automated Communication" },
        desc: {
          de: "Sende Termine, Absagen und Verspätungen direkt aus deiner Terminplanung.\nDeine Patientinnen werden automatisch informiert – ohne zusätzlichen Kommunikationsaufwand.",
          en: "Send appointments, cancellations, and delays directly from your schedule.\nYour patients are automatically informed – without extra communication effort.",
        },
      },
      {
        title: { de: "Patientinnenübersicht", en: "Patient Overview" },
        desc: {
          de: "Alle wichtigen Informationen zu jeder Patientin auf einen Blick.\nGeburtstermine, Entlassungen, To-dos und der Fortschritt jeder Mutter sind im digitalen JUNO-Profil übersichtlich gebündelt.",
          en: "All important information about each patient at a glance.\nDue dates, discharges, to-dos, and every mother's progress are clearly bundled in the digital JUNO profile.",
        },
      },
      {
        title: { de: "Optimiere deine Routen", en: "Optimize Your Routes" },
        desc: {
          de: "Optimierte Routen für deine Hausbesuche. JUNO minimiert deine Fahrtwege und plant die beste Route basierend auf den Verfügbarkeiten deiner Patientinnen – direkt in deiner Terminplanung.",
          en: "Optimized routes for your home visits. JUNO minimizes your driving and plans the best route based on your patients' availability – directly in your schedule.",
        },
      },
      {
        title: { de: "Deine Leistungen auf einen Blick", en: "Your Services at a Glance" },
        desc: {
          de: "Hausbesuche und Kapazität in Echtzeit im Blick. Umsatz und gefahrene Kilometer werden automatisch erfasst und lassen sich mit einem Klick für die Abrechnung exportieren.",
          en: "Home visits and capacity in real time. Revenue and kilometers driven are automatically tracked and can be exported for billing with one click.",
        },
      },
      {
        title: { de: "Vertretungsplanung", en: "Substitute Planning" },
        desc: {
          de: "Vernetze dich mit Hebammen in deiner Umgebung. Finde schnell Unterstützung bei Vertretungen und tausche dich zu Fragen im Berufsalltag aus.",
          en: "Connect with midwives in your area. Quickly find support for substitutions and exchange ideas about everyday professional questions.",
        },
      },
    ],
  },
  contactForm: {
    heading: { de: "Kontaktiere uns", en: "Contact Us" },
    cardTitle: { de: "Early Access Programm", en: "Early Access Program" },
    cardSubtitle: {
      de: "Werde Teil unserer ersten Nutzergruppe und gestalte JUNO aktiv mit.",
      en: "Become part of our first user group and actively shape JUNO.",
    },
    engagementLabel: { de: "Dein Engagement", en: "Your Engagement" },
    engagementText: {
      de: "Teste JUNO im Alltag und gib uns regelmäßig Feedback – so wird die App genau auf deine Bedürfnisse zugeschnitten.",
      en: "Test JUNO in your daily routine and give us regular feedback – so the app is tailored exactly to your needs.",
    },
    benefitsLabel: { de: "Deine Vorteile", en: "Your Benefits" },
    benefitsText: {
      de: "Kostenloser Zugang während der Testphase\nDirekter Draht zum Entwicklerteam\nDeine Wünsche fließen direkt ins Produkt ein",
      en: "Free access during the test phase\nDirect line to the development team\nYour wishes flow directly into the product",
    },
    cardCta: { de: "Jetzt Early Access sichern", en: "Get Early Access Now" },
    roleLabel: { de: "Deine Rolle", en: "Your Role" },
    rolePlaceholder: { de: "Bitte auswählen", en: "Please select" },
    roleOption1: { de: "Hebamme", en: "Midwife" },
    roleOption2: { de: "Interessiert", en: "Interested" },
    namePlaceholder: { de: "Vorname", en: "First Name" },
    surnamePlaceholder: { de: "Nachname", en: "Last Name" },
    emailPlaceholder: { de: "E-Mail-Adresse", en: "Email Address" },
    messageLabel: { de: "Nachricht", en: "Message" },
    messagePlaceholder: {
      de: "Erzähl uns kurz, warum du JUNO testen möchtest…",
      en: "Tell us briefly why you'd like to test JUNO…",
    },
    submit: { de: "Absenden", en: "Submit" },
  },
  footer: {
    features: { de: "Funktionen", en: "Features" },
    access: { de: "Early Access", en: "Early Access" },
    contact: { de: "Kontakt", en: "Contact" },
    impressum: { de: "Impressum", en: "Impressum" },
    datenschutz: { de: "Datenschutzerklärung", en: "Privacy Policy" },
    copyright: {
      de: "© 2026 JUNO Digital Assistant. All rights reserved.",
      en: "© 2026 JUNO Digital Assistant. All rights reserved.",
    },
  },
} as const;
