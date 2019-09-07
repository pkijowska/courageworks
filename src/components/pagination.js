import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {

//taking props from work
  const { itemsCount, pageSize, currentPage } = props;


  const pagesCount = Math.ceil(itemsCount / pageSize);
  //don't show anything if the page count is 1
  if (pagesCount === 1) return null;
  //will give us a range array [1, 2, 3] starting from one till pagesCount
  const pages = _.range(1, pagesCount + 1);

  console.log(pages);
  return  (
    <nav>
    <ul className="pagination">
    {pages.map(page => (
      <li key={page} className={ page===currentPage ? 'page-item active' : 'page-item'}>
        <a className="page-link" onClick={() => props.onPageChange(page)}>{page}</a>
          </li>
    ))}


      </ul>
    </nav>
  );
}

export default Pagination;
