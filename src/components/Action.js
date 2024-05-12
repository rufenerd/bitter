import { LockFill } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

const Action = ({ locked, text, onClick }) => {
    return <div>
        < Button style={{
            cursor: 'pointer',
            minWidth: '200px',
            padding: '10px',
            margin: "5px",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px'
        }}
            title={text} onClick={onClick}
            disabled={locked}>
            {text}
            {locked && <LockFill color="dark-grey" />}
        </Button>

    </div >
}

export default Action