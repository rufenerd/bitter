import 'bootstrap/dist/css/bootstrap.min.css';

const Slide = ({ config }) => {
    return <div className="unselectable"
        style={{
            color: '#505050',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            width: '100%',
            padding: '10px 20px 30px 30px',
            fontSize: '22px'
        }}>
        <h1 style={{
            fontWeight: 'bold',
        }}>{config.headerText}</h1>
        <div className="unselectable" >{config.bodyText}</div>
        <div className="unselectable" style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <img src={config.image} height={config.imageHeight || "400px"} width="auto" />
        </div>
        <div className="unselectable" style={{
            fontWeight: 'bold',
        }}>{config.resultText}</div>
    </div >
}
export default Slide