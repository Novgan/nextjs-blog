import React, {PropsWithChildren} from 'react'
import Layout from '../../components/Layout'
import styled from "styled-components";
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {addSinglePostRequest} from "../../utils/redux/reducer";
import classes from "../addPost.module.css";
import Router from 'next/router';
import {requiredField} from '../../utils/validator/postValidator'


const Container = styled.div`
  margin: 0 auto;
  margin-top: 50px;;
  max-width: 60%;
  min-height: 200px;
  display: flax;
  justify-content:center;
  min-height: 300px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px #fff inset,
              -1px -1px 2px #fff inset;
  border-radius: 3px/6px;        
`

const AddPostContainer: React.FunctionComponent = (props:PropsWithChildren<any>) => {
    return <div>
        <New {...props}/>
    </div>
}

export const New = (props: PropsWithChildren<any>) => {
    const onSubmit = (formData: any): void => {
        debugger
        props.addSinglePostRequest(formData.title, formData.body)
        Router.replace('/')
    }

    return <Layout title="New">
        <Container>
            <ReduxForm onSubmit={onSubmit}/>
        </Container>
    </Layout>

}
export const Form = (props: any) => {
    return <form className={classes.wrapper} onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[requiredField]} className={classes.textArea} component={'input'} name={'title'} placeholder={'Enter title...'}/>
        </div>
        <div>
            <Field validate={[requiredField]} className={classes.textArea + " " + classes.body} component={'textarea'} name={'body'} placeholder={'Enter text...'}/>
        </div>
        <div>
            <button className={classes.btn}>
                Post
            </button>
        </div>
    </form>
}

const ReduxForm = reduxForm({
    form: 'title'
})(Form)


export default connect(null, {addSinglePostRequest})(AddPostContainer)
