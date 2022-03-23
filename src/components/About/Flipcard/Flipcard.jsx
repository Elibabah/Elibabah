import "/Flipcard.css"

export const Flipcard = () => {
    return (
        <div className="Flipcard">

            <div className="card"></div>
            <div className="front">
                <h1 className="A">A</h1>
            </div>
            <div className="back">
                <h1 className="B">B</h1>
            </div>
        </div>
    )
}