import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple middleware that doesn't rely on Supabase to avoid errors in the template
export async function middleware(request: NextRequest) {
  // This middleware is a placeholder for authentication logic
  // When you have proper Supabase credentials, you can uncomment the code below
  // and implement proper authentication checks
  
  /*
  // Uncomment this code when you have Supabase credentials
  
  import { createServerClient } from '@supabase/ssr'
  import { cookies } from 'next/headers'
  
  // Get Supabase credentials
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (supabaseUrl && supabaseKey) {
    // Create Supabase client
    const cookieStore = cookies();
    const supabase = createServerClient(supabaseUrl, supabaseKey, {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
        set(name, value, options) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name, options) {
          cookieStore.set({ name, value: '', ...options });
        },
      },
    });
    
    // Check authentication if needed
    const { data: { session } } = await supabase.auth.getSession();
    
    // Example: Redirect unauthenticated users away from protected routes
    // if (!session && request.nextUrl.pathname.startsWith('/protected')) {
    //   return NextResponse.redirect(new URL('/auth', request.url));
    // }
  }
  */
  
  return NextResponse.next()
}

// Define CookieOptions interface if it's missing
interface CookieOptions {
  domain?: string
  expires?: Date
  httpOnly?: boolean
  maxAge?: number
  path?: string
  sameSite?: 'lax' | 'strict' | 'none'
  secure?: boolean
} 