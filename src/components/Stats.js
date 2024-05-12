const Stats = ({ temp, factor }) => {

    return <div style={{
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        border: '2px solid black',
        marginLeft: '100px'
    }}>
        <div style={{
            padding: '10px'
        }}>{`Temperature: ${temp}ºC`}</div>
        <div style={{
            padding: '10px'
        }}>{`Replication Factor: ${factor}x`}</div>
    </div>
}

export default Stats