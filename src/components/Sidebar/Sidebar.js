import React from 'react'
import '../../App.css'
import SidebarData from './SidebarData'

const Sidebar = () => {
    return (
        <>
            <div class='sidebar'>
                <h2>Sidebar</h2>
                <ul>
                    {SidebarData.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Sidebar