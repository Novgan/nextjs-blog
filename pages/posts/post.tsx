import React, {ReactElement, useEffect} from "react";
import {connect} from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Layout from "../../components/Layout";
import styled from "styled-components";
import {selectPost} from "../../utils/redux/reducer";
import {mapStateToPropsType, propsType} from "../../interfaces/reducerType";

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


const Post = (props: propsType): ReactElement => {
    useEffect(() => {
        props.selectPost(props.postId)
    }, []);
    if (props.body === null && props.title === null) {
        return <div>
            Something goes wrong
        </div>
    } else {
        return <Layout title="Posts">
            <Container>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.singlePost.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.singlePost.body}
                            </Typography>
                        </CardContent>
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
        </Layout>
    }
}

const mapStateToProps = (state: mapStateToPropsType): object => ({
    postId: state.mainReducer.postId,
    singlePost: state.mainReducer.singlePost
})

export default connect(mapStateToProps, {selectPost})(Post)
