import MondatokLenyiloAblak from "../komponensek/Valasztas.js";

export default function Valaszto(props){
    const cim = props.model.getcim();

    return (
        <div>
            <h5>{cim}</h5>
            <MondatokLenyiloAblak mondat={props.model} />
        </div>
    );
}