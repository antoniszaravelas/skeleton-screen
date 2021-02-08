import React from 'react';
import './Skeleton.css';

const SkeletonElement = ({type}) => {
    const classes = `skeleton ${type}`
    return ( 
        <div className={classes}></div>
     );
}
 
export default SkeletonElement;


//  because it depends on the class the type im gonna do of skeleton, title, article, thumbnail etc