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
