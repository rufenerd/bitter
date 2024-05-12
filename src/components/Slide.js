import 'bootstrap/dist/css/bootstrap.min.css';

const Slide = ({ config }) => {
    return <div style={{
        color: '#505050',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        width: '80%',
        padding: '50px'
    }}>
        <div style={{
            fontWeight: 'bold'
        }}>{config.headerText}</div>
        <div>{config.bodyText}</div>
        <div>{config.resultText}</div>
    </div>
}
export default Slide