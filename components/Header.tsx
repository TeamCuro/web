export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-secondary-200">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-center">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            {/* Logo Placeholder */}
            <div className="h-10 w-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold text-secondary-900">Curo</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
