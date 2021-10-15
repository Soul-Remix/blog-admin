import { Form, Formik } from 'formik';
import { useHistory } from 'react-router';
import { useState } from 'react';
import * as Yup from 'yup';

import TextInput from '../../components/textinput/textinput';
import TextField from '../../components/textfield/textfield';
import Loader from '../../components/loader/loader';

import './createPage.css';

const CreatePage = ({ title, description, editing, id, close }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  if (description) {
    description = description.split('\\n').join('');
  }

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('description', values.description);
      if (values.image) {
        formData.append('image', values.image);
      }
      let res;
      if (editing) {
        res = await fetch(
          `https://guarded-bayou-18266.herokuapp.com/api/v1/post/${id}`,
          {
            method: 'PATCH',
            body: formData,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        res = await fetch(
          `https://guarded-bayou-18266.herokuapp.com/api/v1/posts`,
          {
            method: 'PUT',
            body: formData,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
      const data = await res.json();
      if (res.status !== 200) {
        setError(data);
        setLoading(false);
      } else {
        setLoading(false);
        history.push(`/post/${data.post._id}`);
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return (
    <section
      className={
        editing ? 'create-container hover-container' : 'create-container'
      }
    >
      <Formik
        initialValues={{
          title: title || '',
          description: description || '',
          image: '',
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(100, 'Must be 100 characters or less')
            .required('Required'),
          description: Yup.string().required('Required'),
        })}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(formProps) => (
          <Form className="create-form" encType="multipart/form-data">
            <h2 className="create-form-header">
              {editing ? 'Edit Post' : 'Create Post'}
            </h2>
            <TextInput
              label="Title"
              name="title"
              type="text"
              placeholder="Post Title"
            />
            <label>Image</label>
            <input
              label="Image"
              name="image"
              type="file"
              placeholder="Post Image"
              onChange={(event) => {
                formProps.setFieldValue('image', event.target.files[0]);
              }}
            />
            <TextField
              label="Content"
              name="description"
              placeholder="Post Content"
            />
            {error && <p className="error create-form-p">{error.message}</p>}
            <div className="create-form-btns">
              {editing && !loading && (
                <button
                  className="create-form-btn create-form-close"
                  onClick={close}
                >
                  Close
                </button>
              )}
              {!loading && (
                <button type="submit" className="create-form-btn">
                  Submit
                </button>
              )}
            </div>
            {loading && <Loader />}
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default CreatePage;
