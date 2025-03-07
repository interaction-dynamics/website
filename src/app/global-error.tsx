'use client'
import { ThemeProvider } from '@/components/theme-provider'

import { useEffect } from 'react'
import { Home, AlertTriangle, RefreshCw } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error?: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    if (error) {
      console.error(error)
    }
  }, [error])

  return (
    <html>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-b ">
            <div className="w-full max-w-md space-y-8 text-center">
              {/* Simple illustration that works without external styles */}
              <div className="relative h-48 mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-32 h-32 bg-red-100 dark:bg-red-900/20 rounded-full"
                    style={{ animation: 'pulse 2s infinite' }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <AlertTriangle className="w-16 h-16 text-red-600 dark:text-red-400" />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 dark:text-white">
                  System Malfunction
                </h1>
                <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  The application encountered a critical error
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  We&apos;re experiencing technical difficulties with the entire
                  application. Please try refreshing the page or come back
                  later.
                </p>
                {error?.digest && (
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    Reference ID: {error.digest}
                  </p>
                )}
              </div>

              <div className="pt-6 space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => reset()}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    <RefreshCw size={18} />
                    <span>Restart Application</span>
                  </button>
                  <button
                    onClick={() => (window.location.href = '/')}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <Home size={18} />
                    <span>Home</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <style jsx global>{`
            @keyframes pulse {
              0%,
              100% {
                opacity: 1;
              }
              50% {
                opacity: 0.5;
              }
            }
            body {
              margin: 0;
              font-family:
                -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                'Helvetica Neue', Arial, sans-serif;
            }
          `}</style>
        </ThemeProvider>
      </body>
    </html>
  )
}
