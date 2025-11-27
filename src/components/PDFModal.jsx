import React from "react";

export default function PDFModal({ open, onClose, pdfSrc, title }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-[90%] md:w-[70%] h-[85%] relative">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b bg-gray-100 rounded-t-xl">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-700 hover:text-maroon transition text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* PDF Viewer */}
        <iframe
          src={pdfSrc}
          title="PDF Viewer"
          className="w-full h-full rounded-b-xl"
        ></iframe>
      </div>
    </div>
  );
}