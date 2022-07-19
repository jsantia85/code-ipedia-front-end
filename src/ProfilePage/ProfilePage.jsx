import {useLocation, useParams} from 'react-router-dom'
import CodeCard from '../components/CodeCard/CodeCard'
import styles from "./ProfilePage.module.css";
import { Link } from 'react-router-dom';

const ProfilePage = (props) => {
  const location = useLocation()
  const {profileId} = useParams()
  console.log(location)
  console.log('props.posts',props.posts)
  // console.log(props.)
  return (
    <>
      <h1>Welcome to {location.state.profile.name}'s Profile Page!</h1>
      <div className={styles.container}>
      {props.posts.map(post => 
        <Link to={`/index/${post._id}`} key={post._id} className={styles.text} state={post}>
          {post.author._id === profileId && 
            <CodeCard 
              key={post._id}
              post={post}
              title={post.title}
              author={post.author.name}
              user={props.user}
            />
          }
        </Link>
        )}
      </div>
    </>
  );
}

export default ProfilePage