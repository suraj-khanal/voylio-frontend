import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService";

export default function WelcomeComponent() {
    const { username } = useParams();

    const [message, setMessage] = useState(null)

    function callHelloWorldApi(){
      
      retrieveHelloWorldPathVariable('Suraj')
      .then( (response) => successResponse(response) )
      .catch ((error) => errorResponse(error))
      .finally(() => console.log('cleanup'))
    }
    function successResponse(response) {
      setMessage(response.data)
    }
    function errorResponse(error) {
      console.log(error)
    }
  
    return (
      <div className="WelcomeComponent mt-5">
        <h1>Welcome {username}</h1>
        <div>
          Your Login Histories <Link to="/loginhistory">Go Here</Link>

          <div className="mt-4">
           <button className="btn btn-info" onClick={callHelloWorldApi} >
              Call Hello World</button>
          </div>

          <div className="text-secondary fw-bold mt-3">
            {message}
          </div>
          
        </div>
      </div>
    );
  }
  