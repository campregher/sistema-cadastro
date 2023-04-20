import './logo.css'

import { FaWaveSquare } from "react-icons/fa";

function Logo (className="Logo"){
    return(
        <div className='logo-container'>
            <FaWaveSquare className='img-logo'/>
            <p className='text-logo'>Drop <strong>2B</strong></p>
        
        </div>
        
        
    )
}

export default Logo


