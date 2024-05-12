import { LockFill } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

const Action = ({ locked, text, onClick }) => {
    const lockMargin = locked ? '30px' : '0px';
    return <div>
        < Button style={{
            cursor: 'pointer',
            minWidth: '250px',
            padding: '10px',
            margin: "5px",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px'
        }}
            title={text} onClick={onClick}
            disabled={locked}>
            <span style={{ marginLeft: lockMargin }}>{text}</span>
            {locked && <LockFill style={{
                margin: '5px'
            }} color="dark-grey" />}
        </Button>

    </div >
}

export default Action