import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Slide = ({ active, onClose }) => {
    var config;
    switch (active) {
        case 'water':
            config = {
                "buttonText": "Add water"
            }
            break;
        case 'template':
            config = {
                "buttonText": "Add template DNA"
            }
            break;
        case 'chelex':
            config = {
                "buttonText": "Add Chelex"
            }
            break;
        case 'buffer':
            config = {
                "buttonText": "Add Buffer"
            }
            break;
        case 'polymerase':
            config = {
                "buttonText": "Add Taq Polymerase"
            }
            break;
        case 'dntp':
            config = {
                "buttonText": "Add dNTP's"
            }
            break;
        case 'primer':
            config = {
                "buttonText": "Add TAS2R38 Primer"
            }
            break;
        case 'haeiii':
            config = {
                "buttonText": "Add HaeIII"
            }
            break;
        case 'electrophoresis':
            config = {
                "buttonText": "Proceed to gel electrophoresis!"
            }
            break;
        case '64':
            config = {
                "buttonText": "Cool to 64ºC"
            }
            break;
        case '72':
            config = {
                "buttonText": "Set temp to 72ºC"
            }
            break;
        case '94':
            config = {
                "buttonText": "Heat to 94ºC"
            }
            break;
        default:
            config = {
                "buttonText": "Error!"
            }
            break;
    }

    return <div className="overlay">
        <div className="content" style={{
            height: '80%',
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