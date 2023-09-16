'use client'
import { ThemeProvider, serverStyleTags } from 'naxui-manager'
import React from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], display: 'swap', })


export default function StyledJsxRegistry({ children }: { children: React.ReactNode }) {
    let inserted = false
    useServerInsertedHTML(() => {
        if (inserted) return
        inserted = true
        return serverStyleTags()
    })

    return <ThemeProvider
        defaultTheme='default-dark'
        defaultFontFamily={inter.style.fontFamily}

    > {children} </ThemeProvider>
}