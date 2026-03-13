"use client";

import { useEffect, useRef } from "react";

interface DatenschutzModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DatenschutzModal({ isOpen, onClose }: DatenschutzModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-50 m-0 h-full w-full max-h-full max-w-full bg-black/60 backdrop-blur-sm p-0 open:flex items-center justify-center"
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div className="relative bg-white rounded-xl max-w-[700px] w-[90%] max-h-[80vh] overflow-y-auto mx-auto my-auto p-8 md:p-10 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors text-xl font-bold"
          aria-label="Schließen"
        >
          ✕
        </button>

        <h2 className="text-[32px] md:text-[40px] font-semibold text-[#111b2b] mb-6">
          Datenschutzerklärung
        </h2>

        {/* 1. Verantwortlicher */}
        <h3 className="text-[16px] font-semibold text-[#111b2b] mb-1">
          1. Verantwortlicher
        </h3>
        <p className="text-[14px] text-[#625f68] mb-2">
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p className="text-[14px] text-[#625f68] mb-2 whitespace-pre-line">
          {`JUNO
ein studentisches Projekt an der CODE University of Applied Sciences
Donaustr. 44
12043 Berlin, Deutschland
E-Mail: info@getjuno.de`}
        </p>
        <p className="text-[14px] text-[#625f68] mb-4">
          Diese Website wird im Rahmen eines studentischen Projekts an der CODE University of Applied Sciences betrieben.
        </p>

        {/* 2. Erhebung von Daten */}
        <h3 className="text-[16px] font-semibold text-[#111b2b] mb-1">
          2. Erhebung von Daten beim Besuch der Website
        </h3>
        <p className="text-[14px] text-[#625f68] mb-2">
          Beim Aufruf dieser Website werden durch den Webserver automatisch technische Informationen erfasst. Dazu können insbesondere gehören:
        </p>
        <ul className="text-[14px] text-[#625f68] mb-2 list-disc pl-5">
          <li>IP-Adresse des zugreifenden Geräts</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>aufgerufene Seiten</li>
          <li>Browsertyp und Betriebssystem</li>
        </ul>
        <p className="text-[14px] text-[#625f68] mb-2">
          Diese Daten werden verarbeitet, um den technischen Betrieb und die Sicherheit der Website zu gewährleisten.
        </p>
        <p className="text-[14px] text-[#625f68] mb-4">
          Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
        </p>

        {/* 3. Newsletter-Anmeldung */}
        <h3 className="text-[16px] font-semibold text-[#111b2b] mb-1">
          3. Newsletter-Anmeldung
        </h3>
        <p className="text-[14px] text-[#625f68] mb-2">
          Auf unserer Website können Sie sich für unseren Newsletter anmelden. Dabei werden folgende personenbezogene Daten verarbeitet:
        </p>
        <ul className="text-[14px] text-[#625f68] mb-2 list-disc pl-5">
          <li>Vorname</li>
          <li>Nachname</li>
          <li>E-Mail-Adresse</li>
        </ul>
        <p className="text-[14px] text-[#625f68] mb-2">
          Die Daten werden verwendet, um Ihnen Informationen über das Projekt und dessen Entwicklung zuzusenden.
        </p>
        <p className="text-[14px] text-[#625f68] mb-2">
          Rechtsgrundlage der Verarbeitung ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
        </p>
        <p className="text-[14px] text-[#625f68] mb-4">
          Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, z. B. durch eine Nachricht an die oben genannte E-Mail-Adresse.
        </p>

        {/* 4. WhatsApp */}
        <h3 className="text-[16px] font-semibold text-[#111b2b] mb-1">
          4. Kommunikation über WhatsApp
        </h3>
        <p className="text-[14px] text-[#625f68] mb-2">
          Für die Kommunikation mit Interessenten nutzen wir den Messenger-Dienst WhatsApp Messenger.
        </p>
        <p className="text-[14px] text-[#625f68] mb-2">
          Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Telefonnummer sowie die Inhalte der Nachrichten verarbeitet, um Ihre Anfrage zu bearbeiten.
        </p>
        <p className="text-[14px] text-[#625f68] mb-2">
          WhatsApp wird von der Meta Platforms betrieben. Dabei kann es zur Verarbeitung von Daten auf Servern außerhalb der Europäischen Union kommen.
        </p>
        <p className="text-[14px] text-[#625f68] mb-4">
          Die Nutzung von WhatsApp erfolgt freiwillig. Alternativ können Sie uns jederzeit per E-Mail kontaktieren.
        </p>

        {/* 5. Speicherdauer */}
        <h3 className="text-[16px] font-semibold text-[#111b2b] mb-1">
          5. Speicherdauer
        </h3>
        <p className="text-[14px] text-[#625f68] mb-4">
          Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Erfüllung der jeweiligen Zwecke erforderlich ist oder bis Sie Ihre Einwilligung widerrufen.
        </p>

        {/* 6. Rechte */}
        <h3 className="text-[16px] font-semibold text-[#111b2b] mb-1">
          6. Rechte der betroffenen Personen
        </h3>
        <p className="text-[14px] text-[#625f68] mb-2">
          Sie haben das Recht:
        </p>
        <ul className="text-[14px] text-[#625f68] mb-4 list-disc pl-5">
          <li>Auskunft über Ihre gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
          <li>unrichtige Daten berichtigen zu lassen (Art. 16 DSGVO)</li>
          <li>die Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
          <li>die Verarbeitung einschränken zu lassen (Art. 18 DSGVO)</li>
          <li>der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
        </ul>

        {/* 7. Beschwerderecht */}
        <h3 className="text-[16px] font-semibold text-[#111b2b] mb-1">
          7. Beschwerderecht
        </h3>
        <p className="text-[14px] text-[#625f68] mb-2">
          Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
        </p>
        <p className="text-[14px] text-[#625f68] mb-1">
          Zuständige Behörde in Berlin ist:
        </p>
        <p className="text-[14px] text-[#625f68] whitespace-pre-line">
          {`Berliner Beauftragte für Datenschutz und Informationsfreiheit
Friedrichstraße 219
10969 Berlin
Deutschland`}
        </p>
      </div>
    </dialog>
  );
}
