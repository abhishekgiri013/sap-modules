"use client";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        <Link href="/" className="flex gap-2">
          <Image src="/logo.png" alt="SkillsCapital Logo" width={30} height={30} />
        <span>SkillsCapital</span>
        </Link>
        <nav className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-500">About Us</Link>
          <Link href="/sap-modules" className="text-gray-700 hover:text-blue-500">SAP Modules</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
