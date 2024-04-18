import './Header.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className="header-wrapper">
            <div className="header-name"><h1 className='remove-margin'>LETTERLOGIC</h1></div>
            <div className="what-is-this">
                <FontAwesomeIcon icon={faQuestion} />
            </div>
        </div>
    )
}

export default Header