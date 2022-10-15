import type { NextPage } from 'next'
import axios from 'axios'
import { Video } from "../types"
import VideoCard from '../components/VideoCard'
import PhotoCard from '../components/PhotoCard'
import NoResults from '../components/NoResults'

interface IProps {
  videos: Video[]
}

const Home = ({videos}: IProps) => {                 
    console.log(videos);

  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos?.length ? (
        videos.map((video: Video) => (
          <VideoCard post={video}  key={video._id}/>
        ))
        // )  || (videos.map((photo: Video) => (
        //   <PhotoCard post={photo} key={photo._id}/>
        // ))
      ) : (
        <NoResults text={'No Videos'} />
      )}
    </div>
  )
}

export const getServerSideProps = async () => {
  const {data} = await axios.get(`http://localhost:3000/api/post`);  //NextJS uses filebase routing


  return { 
    props: {
      videos: data,   //pass data to the page, photos: data
    }
  }
}
            
export default Home
