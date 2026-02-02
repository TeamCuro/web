import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-secondary-200">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Curo Pay"
              width={160}
              height={67}
              className="h-12 w-auto"
              priority
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
