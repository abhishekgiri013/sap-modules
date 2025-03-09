"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SapModuleDetails({ params }) {
  const router = useRouter();
  const { id } = params; // Get module ID from URL
  const [module, setModule] = useState(null);

  useEffect(() => {
    if (!id) return;
    
    fetch(`/api/modules/${id}`)
      .then((res) => res.json())
      .then((data) => setModule(data.data))
      .catch((error) => console.error("Error fetching module details:", error));
  }, [id]);

  if (!module) {
    return <p className="p-6 text-center text-gray-500 text-lg">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {/* Module Title */}
      <h1 className="text-4xl font-bold text-gray-800 border-b pb-2">{module.title}</h1>

      {/* Description */}
      <p className="mt-4 text-lg text-gray-600">{module.description}</p>

      {/* Features Section */}
      {module.features?.length > 0 && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-700">Features:</h3>
          <ul className="mt-2 space-y-2">
            {module.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                ✅ {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* PDF Links Section */}
      {module.pdfLinks?.length > 0 && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-2xl font-semibold text-blue-700">Resources:</h3>
          <ul className="mt-2 space-y-2">
            {module.pdfLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center gap-2"
                >
                  📄 PDF {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Back Button */}
      <button
        onClick={() => router.push("/sap-modules")}
        className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-2 rounded-lg shadow-md transition-all"
      >
        ← Back to Modules
      </button>
    </div>
  );
}
