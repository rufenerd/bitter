const Stats = ({ temp, factor }) => {

    return <div>
        <div>{`Temperature: ${temp}ºC`}</div>
        <div>{`Replication Factor: ${factor}x`}</div>
    </div>
}

export default Stats