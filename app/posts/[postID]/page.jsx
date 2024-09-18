import React from 'react'

function page({ params }) {
    
    return (
        <div>
            dynamic page for posts {params.postID}
        </div>
    )
}

export default page
