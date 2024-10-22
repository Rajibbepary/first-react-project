import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Booksmarks = ({bookmarks}) => {
    return (
        <div className="md:w-2/3">
            <h1 className="text-2xl">Bookmarks: {bookmarks.length}</h1>

            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Booksmarks.propTypes = {
    bookmarks:PropTypes.array
}

export default Booksmarks;