import {useLocation, useParams} from 'react-router-dom'
import CodeCard from '../components/CodeCard/CodeCard'
import styles from "./ProfilePage.module.css";

const ProfilePage = (props) => {
  const location = useLocation()
  const {profileId} = useParams()
  
  return (
    <>
      <h1>Welcome to {location.state.profile.name}'s Profile Page!</h1>
      <div className={styles.container}>
        {location.state.posts.map(post => 
          post.author._id === profileId && 
            <CodeCard 
              key={post._id}
              post={post}
              title={post.title}
              author={post.author.name}
              user={props.user}
            />
        )}
      </div>
    </>
  );
}

export default ProfilePage