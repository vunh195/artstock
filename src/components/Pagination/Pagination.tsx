import React from 'react';
import './Pagination.styled';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Wrapper } from './Pagination.styled';
import { IPropsPagination } from './Pagination.entities';

/**
 * @author
 * @function Pagination
 **/

export const Pagination = ({
  currentPage,
  onSetCurrentPage,
  totalPages,
  onHandleCurrentPage,
}: IPropsPagination) => {
  const [wherePoint, setWherePoint] = React.useState(
    currentPage === 0 ? 1 : currentPage === totalPages ? 3 : 2,
  );
  React.useEffect(() => {
    if (currentPage > totalPages) {
      if (onSetCurrentPage) onSetCurrentPage(0);
      setWherePoint(1);
      onHandleCurrentPage(0);
    }
  }, [totalPages]);
  React.useEffect(() => {
    if (currentPage === 0) {
      if (onSetCurrentPage) onSetCurrentPage(0);
      setWherePoint(1);
    }
  }, [currentPage]);
  return (
    <Wrapper>
      {Math.ceil(totalPages) > 2 ? (
        <div className="mycustom-pagination">
          <div className="left-control">
            <div
              className={` ${
                currentPage === 0 ? 'opacity-50' : 'cursor-pointer'
              }`}
              onClick={() => {
                if (onSetCurrentPage)
                  onSetCurrentPage(Math.max(currentPage - 1, 0));

                if (currentPage <= 1) setWherePoint(1);
                else setWherePoint(2);
              }}
            >
              <KeyboardArrowLeftIcon />
            </div>
          </div>
          <div className="mycustom-page">
            {currentPage - wherePoint > 0 ? (
              <>
                <div
                  className={currentPage === 0 ? 'page-active page' : 'page'}
                  onClick={() => {
                    if (onSetCurrentPage) onSetCurrentPage(0);
                    onHandleCurrentPage(0);
                    // setWherePoint(1)
                    setWherePoint(1);
                  }}
                >
                  <span className="page">1</span>
                </div>
                <span className="">...</span>
              </>
            ) : null}
            {currentPage - wherePoint > -1 && (
              <div
                className=""
                onClick={() => {
                  if (onSetCurrentPage)
                    onSetCurrentPage(currentPage - wherePoint);
                  onHandleCurrentPage(currentPage - wherePoint);
                  // setWherePoint(1)
                  if (currentPage <= 3) setWherePoint(1);
                  else setWherePoint(2);
                }}
              >
                <span className="page">{currentPage + 1 - wherePoint}</span>
              </div>
            )}
            <div
              className={wherePoint === 1 ? 'page-active page' : 'page'}
              onClick={() => {
                if (onSetCurrentPage)
                  onSetCurrentPage(currentPage + 1 - wherePoint);
                onHandleCurrentPage(currentPage + 1 - wherePoint);
                if (currentPage <= 2) setWherePoint(1);
                else setWherePoint(2);
                // setWherePoint(1)
              }}
            >
              <span className="">{currentPage + 2 - wherePoint}</span>
            </div>
            <div
              className={wherePoint === 2 ? 'page-active page' : 'page'}
              onClick={() => {
                if (onSetCurrentPage)
                  onSetCurrentPage(currentPage + 2 - wherePoint);
                onHandleCurrentPage(currentPage + 2 - wherePoint);
                setWherePoint(2);
              }}
            >
              <span className="">{currentPage + 3 - wherePoint}</span>
            </div>
            <div
              className={wherePoint === 3 ? 'page-active page' : 'page'}
              onClick={() => {
                if (onSetCurrentPage)
                  onSetCurrentPage(currentPage + 3 - wherePoint);
                onHandleCurrentPage(currentPage + 3 - wherePoint);
                // setWherePoint(3)
                if (currentPage >= Math.ceil(totalPages) - 3) setWherePoint(3);
                else setWherePoint(2);
              }}
            >
              <span className="">{currentPage + 4 - wherePoint}</span>
            </div>
            {currentPage - wherePoint < Math.ceil(totalPages) - 4 && (
              <div
                className="page"
                onClick={() => {
                  onSetCurrentPage(currentPage + 4 - wherePoint);
                  onHandleCurrentPage(currentPage + 4 - wherePoint);
                  // setWherePoint(3)
                  if (currentPage >= Math.ceil(totalPages) - 4)
                    setWherePoint(3);
                  else setWherePoint(2);
                }}
              >
                <span className="">{currentPage + 5 - wherePoint}</span>
              </div>
            )}
            {currentPage - wherePoint < Math.ceil(totalPages) - 5 ? (
              <>
                <span className="mr-3 ">...</span>
                <div
                  className={'page'}
                  onClick={() => {
                    onSetCurrentPage(Math.ceil(totalPages) - 1);
                    onHandleCurrentPage(Math.ceil(totalPages) - 1);
                    // setWherePoint(3)
                    setWherePoint(3);
                  }}
                >
                  <span className="">{Math.ceil(totalPages)}</span>
                </div>
              </>
            ) : null}
          </div>
          <div className="right-control ">
            <div
              className={`${
                currentPage === Math.ceil(totalPages) - 1
                  ? 'opacity-50'
                  : 'cursor-pointer'
              }`}
              onClick={() => {
                onSetCurrentPage(
                  Math.min(currentPage + 1, Math.ceil(totalPages) - 1),
                );

                // setWherePoint((old) => Math.min(old + 1, 3))
                if (currentPage >= Math.ceil(totalPages) - 2) setWherePoint(3);
                else setWherePoint(2);
              }}
            >
              <KeyboardArrowRightIcon />
            </div>
          </div>
        </div>
      ) : Math.ceil(totalPages) === 2 ? (
        <div className="mycustom-pagination ">
          <div className="mycustom-page">
            <div
              className={wherePoint === 1 ? 'page-active page' : 'page'}
              onClick={() => {
                onSetCurrentPage(0);
                onHandleCurrentPage(0);
                setWherePoint(1);
              }}
            >
              <span className="">{currentPage + 2 - wherePoint}</span>
            </div>

            <div
              className={wherePoint === 2 ? 'page-active page' : 'page'}
              onClick={() => {
                onSetCurrentPage(1);
                onHandleCurrentPage(1);
                setWherePoint(2);
              }}
            >
              <span className="">{currentPage + 3 - wherePoint}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className=""></div>
      )}
    </Wrapper>
  );
};
