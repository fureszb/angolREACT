export default function MondatokLenyiloAblak(props) {
    const sentenceParts = props.mondat.aktMondatFelosztas();
    const dropdownOptions = props.mondat.aktMondatDropdown();

    return (
    <div>
        <h6>
            {sentenceParts[0]}
            <select>
                {dropdownOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {sentenceParts[1]}
        </h6>
        <button oneclick="kovetkezo"></button>
    </div>
    );
}