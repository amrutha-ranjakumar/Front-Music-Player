// Download.js
import React from 'react';
import { BASE_URL } from '../services/baseurl';

function Download({ downloadedSongs }) {
  return (
    <>
      <div>
        <h1 style={{marginLeft:"800px"}}>Download List</h1>
        <hr />
        <div className="table-responsive p-5">
          <table className='table container'>
            <thead>
              <tr>
                <th style={{width:"800px",backgroundColor:"black"}}>#</th>
                <th style={{width:"900px",backgroundColor:"black"}}>Title</th>
                <th style={{width:"900px",backgroundColor:"black"}}>Image</th>
                <th style={{width:"900px",backgroundColor:"black"}}>Audio</th>
                <th  style={{width:"800px",backgroundColor:"black"}}>Duration</th>
              </tr>
            </thead>
            <tbody>
              {downloadedSongs?.length > 0 ? (
                downloadedSongs.map((item, index) => (
                  <tr  key={index}>
                    <td style={{width:"1200px",backgroundColor:"black"}}>{index + 1}</td>
                    <td style={{width:"1200px",backgroundColor:"black"}}>{item.title}</td>
                    <td style={{width:"1200px",backgroundColor:"black"}}><img src={`${BASE_URL}/uploads/${item.image}`} width={'50px'} height={'50px'} alt="" /></td>
                    <td style={{width:"1200px",backgroundColor:"black"}}>{item.audio}</td>
                    <td style={{width:"1200px",backgroundColor:"black"}}>4:74</td>
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
      </div> 
    
    </>
  );
}

export default Download;
