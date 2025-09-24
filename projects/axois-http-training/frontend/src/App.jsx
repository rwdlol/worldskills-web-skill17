import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users", {
        method: "POST",
        headers: { Authorization: "rwd" },
        withCredentials: true,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {users.map((user, i) => (
        <p key={i}>
          {i}. {user.firstname + " " + user.lastname} -{" "}
          <strong>{user.company}</strong>
        </p>
      ))}
    </div>
  );
}

export default App;
