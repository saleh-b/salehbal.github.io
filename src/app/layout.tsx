import { Roboto_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const font = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Saleh Balakishiyev',
    description: 'Full stack web developer',
    icons: {
        icon: '/profile-rounded.jpg',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={font.className}>{children}</body>
        </html>
    );
}
