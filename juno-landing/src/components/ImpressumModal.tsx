"use client";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ImpressumModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-8" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#1A1208]">Impressum</h2>
          <button onClick={onClose} className="text-[#6B5F4A] hover:text-[#1A1208] text-2xl leading-none">&times;</button>
        </div>
        <div className="text-[15px] text-[#6B5F4A] leading-relaxed space-y-3">
          <p><strong>Angaben gemäß § 5 TMG</strong></p>
          <p>JUNO – Universitätsprojekt</p>
          <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />Das JUNO-Team</p>
          <p className="text-[13px] text-[#999]">Diese Website dient zu Informationszwecken im Rahmen eines Universitätsprojekts.</p>
        </div>
      </div>
    </div>
  );
}
