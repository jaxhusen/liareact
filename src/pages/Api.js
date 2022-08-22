import React from "react";

function Api({api}) { /* hämtar props från Api filen */
    console.log(api.name)

    return (
        <div>
                <article>
                <p>Index: {api.index}</p>
                <p>name:{api.name}</p>
                <p>city:{api.city}</p>
                </article>
        </div>
    )
}
export default Api
