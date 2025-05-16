import React from 'react'

export const Pagination = ({ perPage, total, currentPage, setCurrentPage }) => {

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
                        <span className='material-symbols-outlined'>chevron_left</span>
                    </a>
                </li>
                {
                    pageNumbers.map(noPage => (
                        <li key={noPage} onClick={() => onSpecificPage(noPage)} className={`page-item ${noPage === currentPage ? 'active-pagination' : ''}`} >
                            <span className="page-link">{noPage}</span>
                        </li>
                    ))

                }
                <li onClick={onNextPage} className={`page-item ${currentPage >= pageNumbers.length ? 'disabled' : ''}`}>
                    <a className="page-link" aria-label="Next" >
                        <span className='material-symbols-outlined'>chevron_right</span>
                    </a>
                </li>
            </ul>
        </nav>

    </>);
}
