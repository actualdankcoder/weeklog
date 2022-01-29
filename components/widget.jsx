import Status from "./status.jsx";
import { useState, useEffect } from "react";
function Widget() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({
      "username": "Loading#1234",
      "userid": 488688724948025340,
      "is_bot": false,
      "avatar_url": "https://cdn.discordapp.com/embed/avatars/0.png",
      "presence": {
          "exists": true,
          "name": "Nothing",
          "type": "Playing",
          "type_enum": 0,
          "created_at": 1643458572.61628,
          "state": "Workspace: Wonderful",
          "details": "Editing funny.jsx",
          "large_image": {
              "exists": true,
              "text": "Editing a JSX file",
              "image": "565944802462531603"
          },
          "small_image": {
              "exists": true,
              "text": "Visual Studio Code",
              "image": "565945770067623946"
          }
      }
  });
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://api.discordplug.gq/api/488688724948025357", { mode: "cors" })
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <Status data={items} presence={items.presence}/>
    } else if (!isLoaded) {
      return <Status data={items} presence={items.presence}/>
    } else {
      return (
        <Status data={items} presence={items.presence}/>
      );
    }
}
export default Widget;