import Image from 'next/image'
import { IoBrowsersOutline, IoCalculator, IoHeartOutline, IoLogoNodejs } from 'react-icons/io5'
import { CgPokemon } from 'react-icons/cg'
import { SidebarMenuItem } from '@/components'


const menuItems = [
    { 
        path: '/dashboard/main', 
        icon: <IoBrowsersOutline size={24} />, 
        title: 'Dashboard', 
        subTitle: 'View Dashboard'
    },
    { 
        path: '/dashboard/counter', 
        icon: <IoCalculator size={24} />, 
        title: 'Counter', 
        subTitle: 'Counter Client Side'
    },
    { 
        path: '/dashboard/pokemons', 
        icon: <CgPokemon size={24} />, 
        title: 'Pokemons', 
        subTitle: 'Generación Estática'
    },
    { 
        path: '/dashboard/favorites', 
        icon: <IoHeartOutline size={24} />, 
        title: 'Favoritos', 
        subTitle: 'Global state'
    },
]


export const Sidebar = () => {
    return (
        <aside 
            id="menu"
            style={{ width: '300px' }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen sticky top-0 overflow-y-auto"
            >
            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center gap-1 text-lg md:text-2xl font-bold text-white">
                    <IoLogoNodejs />
                    <span>Dash</span>
                    <span className="text-blue-500">8</span>.
                </h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image
                            className="rounded-full w-8 h-8"
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                            width={32}
                            height={32}
                            alt="User image"
                            title="User image"
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Tonatiuj Sánchez
                    </span>
                </a>
            </div>
            <div id="nav" className="w-full px-6">
                {
                    menuItems.map(item => (
                        <SidebarMenuItem
                            key={item.path}
                            { ...item }
                        />
                    ))
                }
            </div>
        </aside>
    )
}
