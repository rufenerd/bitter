import logo from '../logo.svg';

const Intro = ({ onEnterClick }) => {
    return <div onClick={onEnterClick} style={{
        cursor: 'pointer',
    }} >
        <img src={logo} className="App-logo" alt="logo" />
        <div
            className='text'
            style={{
                textDecoration: 'underline',
                color: '#505050',
            }}
            href="#"
        >
            Discover the bitter truth...
        </div>
    </div>
}

export default Intro