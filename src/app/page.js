import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 sm:px-20">
      
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">
          Welcome to <span className="bg-white text-purple-600 px-3 py-1 rounded-lg">SkillsCapital</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Elevate your skills with expert-led SAP training and resources. Explore our diverse modules and take the next step in your career.
        </p>
        
        {/* CTA Button */}
        <Link 
          href="/sap-modules"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105"
        >
          Explore Modules →
        </Link>
      </div>

      {/* Feature Section */}
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {[
          { title: "Expert Trainers", icon: "🎓" },
          { title: "Comprehensive Content", icon: "📚" },
          { title: "Flexible Learning", icon: "⏳" },
          { title: "Industry Recognized", icon: "🏆" },
          { title: "Interactive Sessions", icon: "💡" },
          { title: "24/7 Support", icon: "🛠️" }
        ].map((feature, index) => (
          <div 
            key={index} 
            className="p-6 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <span className="text-4xl">{feature.icon}</span>
            <h3 className="text-xl font-semibold mt-3">{feature.title}</h3>
          </div>
        ))}
      </div>

      {/* Footer with Social Icons */}
      <footer className="mt-16 text-sm text-center opacity-75 flex flex-col items-center gap-4">
        <p>SkillsCapital © 2025 | <Link href="/privacy-policy" className="underline">Privacy Policy</Link> | <Link href="/terms" className="underline">Terms</Link></p>
        
        {/* Social Icons */}
        <div className="flex gap-6">
          <Link href="https://instagram.com/yourprofile" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-pink-300 transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/yourprofile" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-blue-300 transition-colors" />
          </Link>
          <Link href="https://twitter.com/yourprofile" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className="text-2xl hover:text-blue-400 transition-colors" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
