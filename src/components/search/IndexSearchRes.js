import React from 'react'
import PostSearchRes from './PostSearchRes'

export default function IndexSearchRes(props) {
    return (
        <div>
            <li key={props.netflixid}>
                <img src={props.res.image} />
                <button>Watched</button>
                <PostSearchRes 
                    indexPlaylists={props.allPlaylists} 
                    currUser={props.currentUser} 
                    videoData={props.res}
                    refPlaylists = {props.refreshPlaylists}
                />
            </li>
        </div>
    )
}
