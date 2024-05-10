import logo from '../logo.svg';

const Intro = ({ onEnterClick }) => {
    return <div>
        <img src={logo} className="App-logo" alt="logo" />

        <div
            className='text'
            style={{
                cursor: 'pointer',
                textDecoration: 'underline'
            }}
            href="#"
            onClick={onEnterClick}>
            Discover the bitter truth...
        </div>
    </div>
}

export default Intro