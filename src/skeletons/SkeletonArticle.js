import React from 'react';
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';


const SkeletonArticle = ({theme}) => {
    const themeClass = theme || 'light'; 
    // if they pass in the dark is gonna be overwritten or its gonna be light!
    return ( 
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-article">
                <SkeletonElement type = 'title'/>
                <SkeletonElement type= 'text'/>
                <SkeletonElement type= 'text'/>
                <SkeletonElement type= 'text'/>
            </div>
            <Shimmer/>
        </div>
     );
}
 
export default SkeletonArticle;