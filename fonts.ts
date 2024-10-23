import { Public_Sans, Space_Mono } from 'next/font/google';

export const publicSans = Public_Sans({
    subsets: ['latin'],
    variable: '--font-public-sans',
});

export const spaceMono = Space_Mono({
    subsets: ['latin'],
    style: 'italic',
    variable: '--font-space-mono',
    weight: ['400', '700'],
});