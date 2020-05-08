import React from "react";
import Layout from '../components/Layout'
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {postsType} from "../interfaces/reducerType";
import {changePostId, deletePostAC, getPostsThunk, selectPost} from "../utils/redux/reducer";
import {connect} from "react-redux";
import Link from "next/link";


const Container = styled.div`
  margin: 0 auto;
  margin-top: 50px;;
  max-width: 60%;
  background: #F2F2F2;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px #fff inset,
              -1px -1px 2px #fff inset;
  border-radius: 3px/6px;        
`

type propsType = {
    posts: Array<postsType>
    changePostId (id: number | null):void
}

const IndexPage = (props: propsType) => {

    let postRequest = (e: number | null) => {
        props.changePostId(e)
    }

    return <Layout title="Posts">
        {props.posts.map((u: postsType) => {
            if (u.body === null && u.title === null && u.id === null) {
                return undefined
            } else {
                return <Container>
                    <Card>
                        <CardActionArea>
                            <div onClick={() => postRequest(u.id)}>
                                <Link href={`/posts/post`} as={`/post/${u.id}`}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {u.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {u.body}
                                        </Typography>
                                    </CardContent>
                                </Link>
                            </div>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Container>
            }
        })}
    </Layout>
}

class IndexPageContainer extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.props.getPostsThunk()
    }

    componentWillUnmount() {
        this.props.deletePostAC()
    }

    render() {
        return <div>
            <IndexPage changePostId={this.props.changePostId} posts={this.props.posts}/>
        </div>
    }
}

let mapStateToProps = (state: any) => ({
    posts: state.mainReducer.posts,
})

export default connect(mapStateToProps, {getPostsThunk, deletePostAC, selectPost, changePostId})(IndexPageContainer)
