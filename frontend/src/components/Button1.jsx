

const PrimaryButton = (props) => {
    return (
        <button className={props.clases + "  bg-green-500 hover:bg-green-800 text-white font-black py-2 px-4 rounded-lg mt-4 "} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default PrimaryButton;