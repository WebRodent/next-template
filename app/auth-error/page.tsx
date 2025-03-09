'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const [errorMessage, setErrorMessage] = useState('')
  
  useEffect(() => {
    const error = searchParams.get('error')
    
    if (error === 'missing_credentials') {
      setErrorMessage('Supabase credentials are not configured. Please add them to your .env.local file.')
    } else {
      setErrorMessage('An authentication error occurred.')
    }
  }, [searchParams])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">Authentication Error</h1>
          <p className="mt-2 text-gray-600">{errorMessage}</p>
        </div>
        
        {searchParams.get('error') === 'missing_credentials' && (
          <div className="bg-gray-50 p-4 rounded-md text-sm">
            <p className="font-medium">Template Setup Instructions:</p>
            <ol className="mt-2 ml-4 list-decimal space-y-2">
              <li>Copy <code className="bg-gray-100 px-1">.env.local.example</code> to <code className="bg-gray-100 px-1">.env.local</code></li>
              <li>Add your Supabase URL and anon key to the .env.local file</li>
              <li>Restart the development server</li>
            </ol>
          </div>
        )}
        
        <div className="flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 