import 'bootstrap/dist/css/bootstrap.min.css';

const Slide = ({ config }) => {
    return <div style={{
        color: '#505050',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        width: '80%',
        padding: '10px 50px 50px 50px'
    }}>
        <h1 style={{
            fontWeight: 'bold'
        }}>{config.headerText}</h1>
        <div>{config.bodyText}</div>
        <div style={{
            fontWeight: 'bold'
        }}>{config.resultText}</div>
    </div>
}
export default Slide