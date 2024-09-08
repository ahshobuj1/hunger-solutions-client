import PropTypes from 'prop-types'; // ES6

const Pagination = ({page, currentPage, setCurrentPage}) => {
    return (
        <>
            <button
                onClick={() => setCurrentPage(page)}
                className={`join-item btn btn-sm ${
                    currentPage === page ? 'btn-secondary' : ''
                }`}>
                {page + 1}
            </button>
        </>
    );
};

export default Pagination;

Pagination.propTypes = {
    setCurrentPage: PropTypes.func,
    currentPage: PropTypes.number,
    page: PropTypes.number,
};
