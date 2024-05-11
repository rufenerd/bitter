const Action = ({ text, onClick }) => {
    return <div
        onClick={onClick}
        style={{
            cursor: 'pointer',
            width: '150px',
            height: '150px',
            marginLeft: '10px',
            marginRight: '10px',
            borderRadius: '50%',
            backgroundColor: 'grey',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px'
        }}><span>{text}</span></div>
}

export default Action