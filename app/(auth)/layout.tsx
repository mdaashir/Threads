import {ClerkProvider} from '@clerk/nextjs';
import {dark} from '@clerk/themes';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import React from 'react';

import '../globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Threads',
    description:
        'Threads app that skyrocketed to 100 million sign-ups in less than 5 days, and dethroned giants like Twitter, ChatGPT, and TikTok to become the fastest-growing app ever!',
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <ClerkProvider appearance={{baseTheme: dark}}>
            <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>{children}</body>
            </html>
        </ClerkProvider>
    );
}
