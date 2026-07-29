import Link from "next/link";

export default function Page() {
  return (
    <nav className="flex justify-between items-center gap-6 p-4 md:p-6 bg-white rounded-xl shadow-lg mx-auto">
      <Link href="/" className="text-lg md:text-xl font-semibold text-gray-900">
        Home
      </Link>

      <div className="flex items-center gap-3">
        <Link
          href="/about"
          className="text-gray-800 font-medium px-3 py-1 rounded-full hover:bg-gray-100"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-gray-800 font-medium px-3 py-1 rounded-full hover:bg-gray-100"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
