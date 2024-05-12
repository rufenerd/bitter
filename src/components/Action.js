import { LockFill, Check } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

const Action = ({ locked, text, onClick, included }) => {
    const lockMargin = locked || included ? '30px' : '0px';
    return <div>
        < Button variant="outline-secondary" style={{
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
            }} color="grey" />}
            {included && <Check style={{
                margin: '5px',
            }} color="grey" />}
        </Button>

    </div >
}

export default Action