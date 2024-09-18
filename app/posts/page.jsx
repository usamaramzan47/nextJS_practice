"use client"

import React, { useEffect, useState } from 'react'

function Posts() {

  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/posts");
        if (response.ok) {
          const data = await response.json(); // Parse the JSON response
          setPostData(data); // Set the post data
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {
        postData?.map((item) => (
          <div className="flex flex-col bg-green-400 p-2 rounded-md space-y-2 m-2">
            <span>ID:{item.id}</span>
            <span>Title:{item.title}</span>
          </div>
        ))
      }
    </>
  )
}

export default Posts
