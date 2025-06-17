import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import EmotionRegistry from '@/app/providers/EmotionRegistry';

const geistSans = Geist({
    variable: "--font-geist-sans",
    weight: ['400', '700'],
    subsets: ["latin"],
    display: 'swap',
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    weight: ['400', '700'],
    subsets: ["latin"],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Test Cars",
    description: "Test task",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-200`}
        >
            <EmotionRegistry>
                {children}
            </EmotionRegistry>
        </body>
        </html>
    );
}
