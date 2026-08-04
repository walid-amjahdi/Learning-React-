import '../Styles/Entry.css'

export function Entry(props)
{
    return (
        <>
            <div className="Entry">
                <img src={props.entry.img.src}           
                alt={props.entry.img.alt}
                className="place-img" />
                <div className="Entry-content">
                    <h4>{props.country}</h4>
                    <h2>{props.entry.title}</h2>
                    <p>{props.entry.dates}</p>
                    <p>{props.entry.text}</p>
                </div>
            </div>
        </>
    )
}