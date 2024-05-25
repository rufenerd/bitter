const Stats = ({ temp, factor, unlockTier, onReferencesClick }) => {
    const readyForPcr = unlockTier > 1 && unlockTier < 6

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
            backgroundColor: unlockTier == 7 ? '#89FC00' : (readyForPcr ? '#F68CA9' : '#8ca9f6'),
            borderRadius: '3px'
        }}>
            {unlockTier >= 0 && unlockTier < 6 && <div>{`Solution Temperature: ${temp}ºC`}</div>}
            {readyForPcr && <div>{`Replication Factor: ${factor.toLocaleString()}x`}</div>}
            {unlockTier == 7 && <div>You've won... science!<br /><a href="#" onClick={onReferencesClick}>Thanks and References</a></div>}
        </div>
    </div >
}

export default Stats