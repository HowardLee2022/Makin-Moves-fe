import styles from "./styles.module.css";
import { useNavigate } from 'react-router-dom';

const Home = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate();

  const joinRoom = () => {
    if (room && username) {
      socket.emit("join_room", { username, room });
      navigate('/chat', { replace: true });
    }else{
      alert("username or room name is null")
    }
    // Redirect to /chat
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.h1}>{`LET'S TALK MAKIN' MOVES `}</h1>
        <input
          className={styles.input}
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        />

        <select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option>-- Select Room --</option>
          <option value="VIETNAM">VIETNAM</option>
          <option value="PEURTO RICO">PEURTO RICO</option>
          <option value="express">LONDON</option>
          <option value="LONDON">BALI</option>
        </select>

        <button
          className="btn btn-secondary"
          style={{ width: "100%" }}
          onClick={joinRoom}
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Home;
