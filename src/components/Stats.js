const Stats = ({ temp, factor, unlockTier }) => {

    return <div style={{
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        border: '2px solid grey',
        backgroundColor: '#aaa'
    }}>
        {unlockTier == -1 && <div style={{
            padding: '10px'
        }}>{`Are you Heterozygous or Homozygous for the PTC bitter tasting gene TAS2R38?`}</div>}
        {unlockTier >= 0 && <div style={{
            padding: '10px'
        }}>{`Solution Temperature: ${temp}ºC`}</div>}
        {unlockTier > 1 && unlockTier < 7 && <div style={{
            padding: '10px'
        }}>{`Replication Factor: ${factor}x`}</div>}
    </div>
}

export default Stats