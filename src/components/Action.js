const Action = ({ text, onClick }) => {
    return <div
        onClick={onClick}
        style={{
            cursor: 'pointer',
            width: '200px',
            height: '200px',
            marginLeft: '10px',
            marginRight: '10px',
            borderRadius: '50%',
            backgroundColor: 'grey',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}><span>{text}</span></div>
}

export default Action