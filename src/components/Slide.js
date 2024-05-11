import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Slide = ({ config, onClose }) => {
    return <div className="overlay">
        <div className="content" style={{
            height: '20%',
            width: '80%',
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end'
        }}>
            <Button onClick={onClose}>{config.buttonText}</Button>
        </div>
    </div>
}
export default Slide