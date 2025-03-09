"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SapModules() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    fetch("/api/modules")
      .then((res) => res.json())
      .then((data) => setModules(data.data || []))
      .catch((error) => console.error("Error fetching modules:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8 sm:p-20">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">SAP Modules</h1>
        <p className="mt-2 text-lg text-gray-200">
          Explore various SAP modules to enhance your business operations.
        </p>
      </div>

      {modules.length > 0 ? (
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <div
              key={module._id}
              className="p-6 bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-xl hover:bg-opacity-20 transition-all"
            >
              {/* Module Title */}
              <h2 className="text-2xl font-semibold text-black">{module.title}</h2>
              <p className="mt-2 text-black">{module.description}</p>

              {/* View Details Button */}
              <Link
                href={`/sap-modules/${module._id}`}
                className="mt-4 inline-block bg-white text-blue-600 font-bold px-4 py-2 rounded-full hover:bg-gray-200 transition-all"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-200 mt-12">No SAP Modules available.</p>
      )}
    </div>
  );
}
