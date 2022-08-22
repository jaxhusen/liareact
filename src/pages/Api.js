import React from "react";

function Api(props) { /* hämtar props från Api filen */
    console.log(props)

    return (
        <div>
                <article>
                <p>Index: {props.api.index}</p>
                <p>name:{props.api.name}</p>
                <p>city:{props.api.city}</p>
                </article>
        </div>
    )
}
export default Api