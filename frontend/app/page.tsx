import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YPL.app - The Future Starter Platform',
  description: 'Innovative platform powered by YPL GRUP INC (Florida, USA)',
  keywords: ['startup', 'platform', 'innovation', 'technology'],
  authors: [{ name: 'YPL GRUP INC' }],
  openGraph: {
    title: 'YPL.app - The Future Starter Platform',
    description: 'Innovative platform powered by YPL GRUP INC',
    url: 'https://ypl.app',
    siteName: 'YPL.app',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center px-6">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
            YPL<span className="text-purple-400">.app</span>
          </h1>
        </div>

        {/* Tagline */}
        <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-4">
          The Future Starter Platform
        </h2>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-purple-300 text-sm font-medium">
            Status: Pre-launch v1.0
          </span>
        </div>

        {/* Company Info */}
        <div className="text-gray-400 space-y-2">
          <p className="text-lg">
            Powered by{' '}
            <span className="text-white font-semibold">YPL GRUP INC</span>
          </p>
          <p className="text-sm">Florida, USA</p>
        </div>

        {/* Divider */}
        <div className="my-8 w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"></div>

        {/* Contact */}
        <div className="text-gray-500 text-sm">
          <p>Contact us:</p>
          <a
            href="mailto:yplvenice@gmail.com"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            yplvenice@gmail.com
          </a>
        </div>

        {/* Coming Soon Features */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl mb-1">🤖</div>
            <p className="text-xs text-gray-500">AI Engine</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-1">🚀</div>
            <p className="text-xs text-gray-500">Fast Deploy</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-1">🌍</div>
            <p className="text-xs text-gray-500">Global Scale</p>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-16 text-gray-600 text-xs">
          © 2025 YPL GRUP INC. All rights reserved.
        </p>
      </div>
    </main>
  );
}
