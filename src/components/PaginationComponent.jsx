import Icon from "./IconComponent";

const Pagination = ({ perPage, total, currentPage, setCurrentPage }) => {

    const pageNumbers = [];



    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
        pageNumbers.push(i)
    }


    const onPreviusPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const onSpecificPage = (n) => {
        setCurrentPage(n)
    }

    return (<>
        <nav aria-label="Page navigation" className="mt-10">
            <ul
                className="pagination flex flex-wrap gap-10"
            >
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} onClick={onPreviusPage}>
                    <a className="page-link" aria-label="Previous" >
                        <Icon name={'chevron_left'} />
                    </a>
                </li>
                {
                    pageNumbers.map(noPage => (
                        <li key={noPage} onClick={() => onSpecificPage(noPage)} className={`page-item ${noPage === currentPage ? 'active-pagination' : ''}`} >
                            <a  className="page-link">{noPage}</a>
                        </li>
                    ))

                }
                <li onClick={onNextPage} className={`page-item ${currentPage >= pageNumbers.length ? 'disabled' : ''}`}>
                    <a className="page-link" aria-label="Next" >
                        <Icon name={'chevron_right'} />
                    </a>
                </li>
            </ul>
        </nav>

    </>);
}

export default Pagination;