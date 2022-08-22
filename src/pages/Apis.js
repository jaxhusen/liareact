//GET ALL API
import React, { useState, useEffect } from 'react';
import Api from './Api';


function Apis() {
    const [apis, setApis] = useState([]);

    
    useEffect(() => {
        const fetchData = async () => {
            // hämtar API och sparar i apis
            try {
                const response = await fetch('https://randomuser.me/api/?results=50');
                const data = await response.json();
                setApis(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }

    fetchData();
    }, [apis])
    console.log(apis);

    return (
        <div>
            {
                apis.map(api => <Api key={api.index} api={api} />)
            }
        </div>
    )
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
    





    
    {
            apis.map(api => <Api key={api.id} api={api} />)
            }
    







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