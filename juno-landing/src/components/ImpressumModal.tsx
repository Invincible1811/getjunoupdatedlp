"use client";

import { useEffect, useRef } from "react";

interface ImpressumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ImpressumModal({ isOpen, onClose }: ImpressumModalProps) {
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
          Impressum
        </h2>

        <p className="text-[14px] text-[#625f68] mb-4">
          Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
        </p>

        <h3 className="text-[16px] font-semibold text-[#111b2b] mb-1">
          Verantwortlich für den Inhalt dieser Website:
        </h3>
        <p className="text-[14px] text-[#625f68] mb-4 whitespace-pre-line">
          {`JUNO
ein studentisches Projekt an der CODE University of Applied Sciences
Donaustr. 44
12043 Berlin, Deutschland
E-Mail: info@getjuno.de`}
        </p>

        <h3 className="text-[16px] font-semibold text-[#111b2b] mb-1">
          Projektbeschreibung
        </h3>
        <p className="text-[14px] text-[#625f68] mb-2">
          Diese Website ist Teil eines studentischen Projekts im Rahmen eines Hochschulseminars an der CODE University of Applied Sciences.
        </p>
        <p className="text-[14px] text-[#625f68] mb-2">
          Im Rahmen des Projekts wird der Prozess der Entwicklung und Validierung einer Startup-Idee simuliert.
        </p>
        <p className="text-[14px] text-[#625f68] mb-4">
          Die auf dieser Website dargestellte Anwendung sowie die angebotenen Inhalte dienen ausschließlich zu Lehr- und Forschungszwecken im Rahmen des Studienprojekts. Es handelt sich nicht um ein kommerzielles Angebot und es werden keine kostenpflichtigen Dienstleistungen angeboten.
        </p>

        <h3 className="text-[16px] font-semibold text-[#111b2b] mb-1">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h3>
        <p className="text-[14px] text-[#625f68] mb-1">
          JUNO – ein studentisches Projekt an der CODE University of Applied Sciences
        </p>
        <p className="text-[14px] text-[#625f68] mb-4">
          Anschrift wie oben
        </p>

        <h3 className="text-[16px] font-semibold text-[#111b2b] mb-1">
          Haftung für Inhalte
        </h3>
        <p className="text-[14px] text-[#625f68] mb-2">
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
        </p>
        <p className="text-[14px] text-[#625f68] mb-4">
          Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich. Eine Verpflichtung zur Überwachung übermittelter oder gespeicherter fremder Informationen besteht jedoch nicht.
        </p>

        <h3 className="text-[16px] font-semibold text-[#111b2b] mb-1">
          Haftung für Links
        </h3>
        <p className="text-[14px] text-[#625f68] mb-2">
          Unsere Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
        <p className="text-[14px] text-[#625f68]">
          Zum Zeitpunkt der Verlinkung wurden die externen Seiten auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
      </div>
    </dialog>
  );
}
