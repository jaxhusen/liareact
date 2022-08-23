//GET ALL API
import React, { useState, useEffect } from 'react';
import Api from './Api'; 
import Styling from './Apis.module.css'


function Apis() {
    const [apis, setApis] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            // hämtar API och sparar i apis
            try {
                const response = await fetch('https://randomuser.me/api/?results=50');
                const data = await response.json();
                setApis(data.results);
                console.log(data); //"array" med objekt
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);
    //console.log(apis); //array ( med objekt i)




    return (
        <div id={Styling.parentArticle}>
            {
                apis.map(api => <Api key={api.index} api={api} />)
            }
        </div>
    );
}
export default Apis

/*     const fetchData = async () => {
        // hämtar API och sparar i apiList
        try {
            const response = await fetch('https://randomuser.me/api/?results=50');
            const data = await response.json();
            setApiList(data);
            console.log(apiList);

        } catch (error) {
            console.log(error);
        }
    } 
    




    let apiList = apis.map(  (api) => {
    return (
                       <article key={api.index}>
                           <h2>{api.name}</h2>
                           <h2>{api.city}</h2>
                       </article>
                   )
               }) 
    return <div>{apiList}</div>;
        }
    export default Apis




    
   


            apis.map(api => <Api key={api.index} api={api} />)
    







            return (
        <div>
          {
          apis.map((api, index) => {
            return (
              <div key={index}>
                <h2>Index: {index}</h2>
                <h2>name:{api.first}{api.last}</h2>
                <h2>city:{api.city}</h2>
                
              </div>
            );
          })
          }
        </div>
      );
    }
export default Apis;





return (
    <div>
        {
            apis.map(api => <Api key={api.index} api={api} />)
        }
    </div>
)
    }
export default Apis
    */