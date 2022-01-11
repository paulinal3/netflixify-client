import React from 'react'

export default function IndexSearchRes(props) {
    return (
        <div>
            <li key={props.key}>
                <img src={props.res.image} />
                <button>Watched</button>
                <form>
                    <label>Add to Playlist:</label>
                    <select>

                    </select>
                </form>
            </li>
        </div>
    )
}
