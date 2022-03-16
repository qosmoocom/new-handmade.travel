/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { getConfig } from '../../../store/reducer/usersReducer';
import styled from 'styled-components';
import { AiFillDelete } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
function AllTours() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  //   get All tour
  const getAllTours = async () => {
    const api = `/api/tour/all`;
    setLoading(true);
    try {
      const res = await Axios.get(api, getConfig());
      const data = await res.data;
      if (data) setTours(data);
      setTimeout(() => {
        setLoading(false);
      }, 200);
    } catch (error) {}
  };

  //   delete tour
  const deleteTour = async (tour) => {
    const api = `/api/tour/${tour._id}`;
    const api2 = `/api/style/${tour._id}`;
    try {
      const res = await Axios.delete(api, getConfig());
      await Axios.delete(api2);
      const data = await res.data;
      if (data) {
        await getAllTours();
      }
    } catch (error) {}
  };

  //   componentDidMount
  useEffect(() => {
    getAllTours();
  }, []);

  return (
    <Wrapper>
      <div className="title">
        <p>AllTours</p>{' '}
        <div className="update-btn">
          <GrUpdate
            className="icon"
            onClick={getAllTours}
            style={{
              transform: loading ? `rotate(45deg)` : null,
            }}
          />
        </div>
      </div>
      {/* tours */}
      <table className="table table-sm table-danger table-hover">
        <thead>
          <tr>
            <th scope="col" style={{ width: '5%' }}>
              #
            </th>
            <th scope="col" style={{ width: '30%' }}>
              tour name
            </th>
            <th scope="col" style={{ width: '30%' }}>
              tour id
            </th>
            <th scope="col" style={{ width: '30%' }}>
              tour lang
            </th>
            <th scope="col" style={{ width: '5%' }}>
              control
            </th>
          </tr>
        </thead>
        {!loading && (
          <tbody>
            {tours.map((tour, index) => {
              return (
                <tr key={tour._id}>
                  <td scope="row" style={{ width: '5%' }}>
                    {index + 1}
                  </td>
                  <td scope="row" style={{ width: '30%' }}>
                    {tour.tourName}
                  </td>
                  <td scope="row" style={{ width: '30%' }}>
                    {tour.tour_id}
                  </td>
                  <td scope="row" style={{ width: '30%' }}>
                    {tour.language}
                  </td>
                  <td scope="row" style={{ width: '5%' }}>
                    <AiFillDelete
                      className="delete-tour"
                      onClick={async () => await deleteTour(tour)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
        {loading && (
          <div className="loading">
            <p>Loading...</p>
          </div>
        )}
      </table>
    </Wrapper>
  );
}

export default AllTours;

const Wrapper = styled.div`
  .title {
    display: flex;
    align-items: center;
  }
  .update-btn {
    padding-bottom: 17px;
    padding-left: 20px;
    .icon {
      cursor: pointer;
    }
  }
  tbody {
    border-top: none !important;
  }
  .loading {
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none !important;
  }

  .delete-tour {
    cursor: pointer;
  }
`;
