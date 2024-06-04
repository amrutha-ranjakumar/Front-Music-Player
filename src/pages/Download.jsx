import React from 'react';
import { BASE_URL } from '../services/baseurl';

function Download({ downloadedSongs }) {
  return (
    <>
   
      <h3 className='text-center' style={{marginTop:"200px"}}>DOWNLOADE SONGS</h3>
      <div className="table-responsive ms-5">
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>Audio</th>
              <th>Duration</th>
             
            </tr>
          </thead>
          <tbody>
            {downloadedSongs?.length > 0 ? (
              downloadedSongs.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td><img src={`${BASE_URL}/uploads/${item.image}`} width={'60px'} height={'50px'} alt="" /></td>
                  <td>{item.audio}</td>
                  <td>4:74</td>
                 
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No items in Recently played</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Download;
