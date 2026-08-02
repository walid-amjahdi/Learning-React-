import '../Styles/Entry.css'

export function Entry(props)
{
    return (
        <>
            <div className="Entry">
                <img src={props.img.src}           
                alt={props.img.alt}
                className="place-img" />
                <div className="Entry-content">
                    <h4>{props.country}</h4>
                    <h2>{props.title}</h2>
                    <p>{props.dates}</p>
                    <p>{props.text}</p>
                </div>
            </div>
        </>
    )
}