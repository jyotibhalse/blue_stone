// import React from 'react';
// import { Formik } from 'formik';
// import axios from 'axios';
// // import Smallhead from "../header/smallhead";
// import { Col, Row } from 'react-bootstrap';
// import './form.css';
// import * as Yup from 'yup';

// const userSchema = Yup.object().shape({
//   username: Yup.string().required(),
//   email: Yup.string().email().required(),
//   password: Yup.string().required(),
// });

// const Basic = () => {
  
//   const handleSubmit = async (values, { setSubmitting, resetForm }) => {
//     try {
//       await axios.post('http://localhost:4000/api/Users', values);
//       alert('Form submitted successfully!');
//       resetForm();
//     } catch (error) {
      
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       {/* <Smallhead /> */}
//       <br />
//       <div className='container for_m1 '>
//         <Formik
//           initialValues={{
//             username: '',
//             email: '',
//             password: '',
//           }}
//           validationSchema={userSchema}
//           onSubmit={handleSubmit}
//         >
//           {({
//             values,
//             errors,
//             touched,
//             handleChange,
//             handleBlur,
//             handleSubmit,
//             isSubmitting,
//           }) => (
//             <form onSubmit={handleSubmit}>
//               <h1>Student Registration</h1>
//               <Row className='for_m2'>
//                 <Col>
//                   <label className='mx-2'>Username</label>
//                   <input
//                     style={{ width: '220px', height: '40px' }}
//                     type='text'
//                     name='username'
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.username}
//                   />
//                   {errors.username && touched.username && <span className='d-block small text-danger'>{errors.username}</span>}
//                 </Col>
//                 <hr />
//                 <Col>
//                   <label className='mx-3'>Email</label>
//                   <input
//                     style={{ width: '220px', height: '40px' }}
//                     type='email'
//                     name='email'
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.email}
//                   />
//                   {errors.email && touched.email && <span className='d-block small text-danger'>{errors.email}</span>}
//                 </Col>
//                 <hr />
//                 <Col>
//                   <label className='mx-3'>Password</label>
//                   <input
//                     style={{ width: '220px', height: '40px' }}
//                     type='password'
//                     name='password'
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.password}
//                   />
//                   {errors.password && touched.password && <span className='d-block small text-danger'>{errors.password}</span>}
//                 </Col>
//                 <hr />
//                 <Col>
//                   <button
//                     className='mx-4'
//                     style={{ width: '80px', height: '40px' }}
//                     type='submit'
//                     disabled={isSubmitting}
//                   >
//                     Submit
//                   </button>
//                 </Col>
//               </Row>
//             </form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default Basic;












import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import './form.css';
import * as Yup from 'yup';

const userSchema = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const Basic = () => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('http://localhost:4000/api/Users', values);
      if (response.status === 200) {
        alert('User created successfully');
        resetForm();
      } else if (response.status === 400) {
        alert('User with this email already exists');
      } else {
        alert('Error creating user');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <div>
      <br />
      <div className='container for_m1 '>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
          }}
          validationSchema={userSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <h1>Student Registration</h1>
              <Row className='for_m2'>
                <Col>
                  <label className='mx-2'>Username</label>
                  <input
                    style={{ width: '220px', height: '40px' }}
                    type='text'
                    name='username'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                  {errors.username && touched.username && <span className='d-block small text-danger'>{errors.username}</span>}
                </Col>
                <hr />
                <Col>
                  <label className='mx-3'>Email</label>
                  <input
                    style={{ width: '220px', height: '40px' }}
                    type='email'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && <span className='d-block small text-danger'>{errors.email}</span>}
                </Col>
                <hr />
                <Col>
                  <label className='mx-3'>Password</label>
                  <input
                    style={{ width: '220px', height: '40px' }}
                    type='password'
                    name='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && <span className='d-block small text-danger'>{errors.password}</span>}
                </Col>
                <hr />
                <Col>
                  <button
                    className='mx-4'
                    style={{ width: '80px', height: '40px' }}
                    type='submit'
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </Col>
              </Row>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Basic;
