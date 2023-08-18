import React from 'react'
import Navigation from './navigation'

const Header = () => (
    <header className='w-screen tablet:h-1/6 phone:h-1/6 mb-0 bg-custom-navy text-white'>
        <div className='max-w-6xl container mx-auto'>
            <Navigation />
        </div>
    </header>
)

export default Header