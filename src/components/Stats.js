const Stats = ({ temp, factor, unlockTier }) => {

    return <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '10px'
    }}>
        <div style={{
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            border: '3px solid #ccc',
            backgroundColor: '#8ca9f6',
            borderRadius: '3px'
        }}>
            {unlockTier == -1 && <div>{`Are you Heterozygous or Homozygous for the PTC bitter tasting gene TAS2R38?`}</div>}
            {unlockTier >= 0 && unlockTier < 6 && <div>{`Solution Temperature: ${temp}ºC`}</div>}
            {unlockTier > 1 && unlockTier < 6 && <div>{`Replication Factor: ${factor.toLocaleString()}x`}</div>}
            {unlockTier == 7 && <div>Congratulations!</div>}
        </div>
    </div>
}

export default Stats