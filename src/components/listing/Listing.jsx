import List from './List';

const Listing = (props) => {
    const { listData } = props
    return (
        <div className="row">
            {listData.map(item => (
                <List item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Listing;