import React from 'react'
import { Sidebar } from '@/components'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-slate-100 h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
            <div className="flex">
                <Sidebar />
                <main className="flex-1 text-slate-900">
                    { children }
                </main>
            </div>
        </div>
    )
}
