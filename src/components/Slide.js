import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Slide = ({ config }) => {
    return <div >
        <div style={{

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
        </div>
    </div >
}
export default Slide