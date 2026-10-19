import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const App = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Firstname is Required'),
    lastName : Yup.string().required('Lastname is Required'),
    age: Yup.number().max(100, 'Why you still dey alive').min(20,'You are still young'),
    email: Yup.string().required('Email is Required').email('Email is not Valid'),
    password: Yup.string().required('Password is Required').min(8, 'Password is weak')
  })

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values, {resetForm}) => {
        console.log(values);
        resetForm()

    }
  })





  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          {formik.touched.firstName && formik.errors.firstName ? <p style={{color: 'red', fontSize: '12px'}}>{formik.errors.firstName}</p> : null}
          <label htmlFor="firstName">Firstname</label>
          <br />
          <input type="text"
            name='firstName'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value= {formik.values.firstName}
          />
        </div>
        <div>
          {formik.touched.lastName && formik.errors.lastName ? <p style={{color: 'red', fontSize: '12px'}}>{formik.errors.lastName}</p> : null}
          <label htmlFor="lastName">Lastname</label>
          <br />
          <input type="text" 
            name='lastName'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value= {formik.values.lastName}

          />
        </div>
        <div>
          {formik.touched.age && formik.errors.age ? <p style={{color: 'red', fontSize: '12px'}}>{formik.errors.age}</p> : null}
          <label htmlFor="age">Age</label>
          <br />
          <input type="number" 
            name='age'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value= {formik.values.age}

          />
        </div>
        <div>
          {formik.touched.email && formik.errors.email ? <p style={{color: 'red', fontSize: '12px'}}>{formik.errors.email}</p> : null}
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" 
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value= {formik.values.email}

          />
        </div>
        <div>
          {formik.touched.password && formik.errors.password ? <p style={{color: 'red', fontSize: '12px'}}>{formik.errors.password}</p> : null}
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" 
            name='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value= {formik.values.password}
          />
        </div>
          <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App