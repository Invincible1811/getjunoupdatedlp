"use client";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function DatenschutzModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-8" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#1A1208]">Datenschutzerklärung</h2>
          <button onClick={onClose} className="text-[#6B5F4A] hover:text-[#1A1208] text-2xl leading-none">&times;</button>
        </div>
        <div className="text-[15px] text-[#6B5F4A] leading-relaxed space-y-3">
          <p><strong>Datenschutz</strong></p>
          <p>Diese Website erhebt keine personenbezogenen Daten, außer bei freiwilliger Angabe im Early-Access-Formular.</p>
          <p><strong>Erhobene Daten</strong></p>
          <p>Bei der Anmeldung zum Early Access wird Ihre E-Mail-Adresse gespeichert, um Sie über den Start von JUNO zu informieren.</p>
          <p><strong>Weitergabe von Daten</strong></p>
          <p>Ihre Daten werden nicht an Dritte weitergegeben.</p>
          <p className="text-[13px] text-[#999]">Diese Website dient zu Informationszwecken im Rahmen eines Universitätsprojekts.</p>
        </div>
      </div>
    </div>
  );
}
