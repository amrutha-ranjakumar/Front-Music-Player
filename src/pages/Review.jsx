import React from 'react';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Review({music}) {
    const [open, setOpen] = useState(false);

    
    return (
        <> <div className="d-flex align-items-center">
                <div>
                <button className='btn btn-warning' style={{ marginTop: "-60px", marginLeft: "260px" }} onClick={() => setOpen(!open)}>Click here to see Review</button>
                </div>
            </div>
            <Collapse in={open}>
               <div>
        <h5 className='text-center'>name<span className='text-warning'> {music.name}</span></h5>
        <h5 className='text-center'>date<span className='text-warning'> {music.date}</span></h5>
        <h5 className='text-center'>rate:<span className='text-warning'> {music.rate}</span></h5>
        <h9 style={{textAlign:"justify"}} className='text-center'>descrption:<span className='text-warning'> {music.description}</span></h9>


        <h5 className='text-center'>name<span className='text-warning'> {music.name1}</span></h5>
        <h5 className='text-center'>date<span className='text-warning'> {music.date1}</span></h5>
        <h5 className='text-center'>rate:<span className='text-warning'> {music.rate1}</span></h5>
        <h9 style={{textAlign:"justify"}} className='text-center ' >descrption:<span className='text-warning'> {music.description1}</span></h9>
        </div>
       </Collapse>
        </>
    );
}

export default Review;
