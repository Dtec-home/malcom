import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-800 text-white p-4">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Malcom Theological Seminary
        </Link>
        <div className="space-x-6">
          <Link href="/about">About</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/faculty">Faculty</Link>
        </div>
      </nav>
    </header>
  );
}
