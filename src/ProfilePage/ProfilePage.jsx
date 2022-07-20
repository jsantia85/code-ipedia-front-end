import {useLocation, useParams} from 'react-router-dom'
import CodeCard from '../components/CodeCard/CodeCard'
import styles from "./ProfilePage.module.css";
import { Link } from 'react-router-dom';

const ProfilePage = (props) => {
  const location = useLocation()
  const {profileId} = useParams()

  const postsBelongingToOwner = props.posts.filter((post) =>
    post.author._id === profileId
  )
  
  return (
    <>
      <h1>Welcome to {location.state.profile.name}'s Profile Page!</h1>
      <div className={styles.container}>
      {postsBelongingToOwner.map(post =>
        <Link to={`/index/${post._id}`} key={post._id} className={styles.text} state={post}>
          <CodeCard 
            key={post._id}
            post={post}
            user={props.user}
          />
      </Link>
      )}
      </div>
    </>
  );
}

export default ProfilePage