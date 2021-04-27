import './Listing.css';

const List = (props) => {
    const { item } = props;
    return (
        <div className="col-md-3" key={item.id}>
            <div className="language-box">
                <div className="img-area">
                    <img src={item.image} alt={item.languageNameEnglish} />
                </div>
                <h3>{item.languageNameEnglish}</h3>
                <span>{item.languageNameNative}</span>
            </div>
        </div>
    )
}

export default List;