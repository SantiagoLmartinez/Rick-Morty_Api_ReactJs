import React from "react";

const PaginationComp = ({ prev, next, onPrevious, onNext }) => {
    const handlePrevious = () => {
        onPrevious()
    }
    const handleNext = () => {
        onNext()
    }
    return (
        <nav className="d-flex justify-content-center ">
            <ul className="pagination">
                {/* <li className="page-item disabled"> */}
                {prev ?
                    <li className="page-item ">
                        <button onClick={handlePrevious} className="page-link">Previous</button>
                    </li>
                    : null}
                {next ?
                    <li className="page-item">
                        <button onClick={handleNext} className="page-link" href="#">Next</button>
                    </li>
                    : null
                }

            </ul>
        </nav>

    )
}
export default PaginationComp