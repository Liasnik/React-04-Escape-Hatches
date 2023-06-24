import CatFriends from './CatFriendsTask'
import styles from '../ref-DOM.module.css'
import VideoPlayer from './Play_video'

export default function Tasks() {
  return (
    <div className={styles.tasks}>
      <h1>Задачи</h1>
      <VideoPlayer />
      <CatFriends />
    </div>
  )
}
