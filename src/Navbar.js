import React, {useState, useEffect} from 'react'

function Navbar() {
    
    // TITLE SIZING SECTION (for responsiveness)
    const [title, setTitle] = useState(
        (window.innerWidth < 935) ? "THE ODYSSEY": 
        (window.innerWidth < 1450) ? "THE ODYSSEY: An Epic Tale":
        "THE ODYSSEY: An Epic Tale of the Greek King Odysseus"
        )

    function titleChange() {
        setTitle(
            (window.innerWidth < 935) ? "THE ODYSSEY": 
            (window.innerWidth < 1450) ? "THE ODYSSEY: An Epic Tale":
            "THE ODYSSEY: An Epic Tale of the Greek King Odysseus"
            )
    }

    useEffect(() => {
        window.addEventListener('resize', titleChange)
        return (
            () => window.removeEventListener('resize', titleChange)
        )
    })
    
    
    return(
        <div>
            <h1>{title}</h1>
        </div>
        
    )
}

export default Navbar