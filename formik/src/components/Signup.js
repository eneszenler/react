import React from 'react'
import { Formik, useFormik } from 'formik';
import validationSchema from './Validations'


function Signup() {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            email: 'yusufeneszenler@gmail.com',
            password: "",
            passwordConfirm: "",
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema,
    });

    console.log(errors);
    return (
        <div>
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                {errors.email && touched.email &&
                    (<div className='error'>{errors.email}</div>)}

                <br />
                <br />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                {errors.password && touched.password &&
                    (<div className='error'>{errors.password}</div>)}

                <br />
                <br />

                <label htmlFor="passwordConfirm">Password Confirm</label>
                <input
                    type="password"
                    name="passwordConfirm"
                    value={values.passwordConfirm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                {errors.passwordConfirm && touched.passwordConfirm &&
                    (<div className='error'>{errors.passwordConfirm}</div>)}

                <br />
                <br />

                <button type="submit">Submit</button>

                <br />
                <br />

                <code>{JSON.stringify(values)}</code>
            </form>
        </div>
    )
}

export default Signup
