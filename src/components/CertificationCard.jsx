import React from "react";

export default function CertificationCard({ title, pdfSrc, thumbnail, onOpen }) {
  return (
    <div
      className="border rounded-xl shadow-md hover:shadow-lg transition cursor-pointer bg-white"
      onClick={onOpen}
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl"
      />

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
        <p className="text-maroon text-sm mt-1">Click to view PDF</p>
      </div>
    </div>
  );
}