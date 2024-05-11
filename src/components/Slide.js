import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Slide = ({ config, onClose }) => {
    return <div className="overlay">
        <div className="content" style={{
            height: '80%',
            width: '80%',
            color: 'black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <div style={{
                fontWeight: 'bold'
            }}>{config.headerText}</div>
            <div>{config.bodyText}</div>
            <div>{config.resultText}</div>
            <Button onClick={() => {
                config.onClose?.()
                onClose()
            }}>Close</Button>
        </div>
    </div >
}
export default Slide