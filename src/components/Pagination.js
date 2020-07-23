import React from 'react';
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from 'mdbreact';

const buildPageItem = (inner, callback) => (
  <MDBPageItem onClick={callback}>
    <MDBPageNav>{inner}</MDBPageNav>
  </MDBPageItem>
);

export default props => {
  const { current, pagesCount } = props;
  const previous = current > 1 ? buildPageItem(current - 1, () => props.setPage(current - 1)) : '';
  const previousSecond = current > 2 ? buildPageItem(current - 2, () => props.setPage(current - 2)) : '';
  const next = current < pagesCount ? buildPageItem(current + 1, () => props.setPage(current + 1)) : '';
  const nextSecond = current < pagesCount - 1 ? buildPageItem(current + 2, () => props.setPage(current + 2)) : '';

  return (
    <MDBRow>
      <MDBCol>
        <MDBPagination className="mb-5">
          <MDBPageItem disabled={current === 1} onClick={() => props.setPage(1)}>
            <MDBPageNav className="page-link" aria-label="First">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">First</span>
            </MDBPageNav>
          </MDBPageItem>
          {previousSecond}
          {previous}
          <MDBPageItem active>
            <MDBPageNav>
              {current} <span className="sr-only">(current)</span>
            </MDBPageNav>
          </MDBPageItem>
          {next}
          {nextSecond}
          <MDBPageItem disabled={current === pagesCount} onClick={() => props.setPage(pagesCount)}>
            <MDBPageNav className="page-link" aria-label="Last">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Last</span>
            </MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
      </MDBCol>
    </MDBRow>
  );
};
