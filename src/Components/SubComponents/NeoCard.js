import React from 'react'

export default function NeoCard(props) {
    return (
        
            <img
              className="neo"
                src={props.url}
                style={{ maxWidth: "80%", height: "auto" }}
                alt=""
              />
    )
}
