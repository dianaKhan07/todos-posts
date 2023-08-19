import { useDispatch } from "react-redux"
import { fetchPostData } from "../../store/api"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { useEffect } from "react"
import { Box, Card, Typography } from "@mui/material"
import { Dna } from "react-loader-spinner"


const Posts = () => {
    const dispatch = useDispatch();

    const {list, loading} = useSelector((state: RootState) => state.posts);

    useEffect(() => {
        dispatch(fetchPostData())
    },[dispatch])

  return (
    <Box>
        {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </Box>
      ) : (
        list.map((post) => (
        <Card sx={{width: '100%', padding: '20px'}}>
            <Typography variant="h4"> {post.title}</Typography>
            <Typography variant="body1"> {post.body}</Typography>
        </Card>
       ))
      )}
    </Box>
  )
}

export default Posts
