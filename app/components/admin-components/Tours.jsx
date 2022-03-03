import Link from "next/link";
import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  .edit-tour {
    background: none !important;
    border: none;
    color: #456bbd;
    text-decoration: underline;
  }
`;
function Tours({ tours }) {
  return (
    <Wrapper>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tour Name</th>
              <th scope="col">Tour Id</th>
              <th scope="col">Tour Lang</th>
              <th scope="col">Control</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{tour.tourName}</td>
                <td>{tour.tourId}</td>
                <td>{tour.tourLang}</td>
                <td>
                  <Link href={`/tours/edit/${tour.tourId}`}>edit-tour</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
}

export default Tours;
