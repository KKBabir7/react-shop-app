import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Button  from 'react-bootstrap/Button';

import React, { useState } from 'react';
import { useFormik } from 'formik'
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { Link, NavLink } from 'react-router-dom';

const Log=({colectvalue})=>{
 
  const [logvalus,setlogvalus]=useState(null)
  console.log(logvalus)
   colectvalue(logvalus)
    return(
        <>
        
        <section class="sign-d">
		<Container>
			<Row>  
				
				<Col md={{ span: 6, offset: 3 }} sm={{ span: 8, offset: 3 }} xs={12} className='form'>
						<div className="center">				
							<h2>Your Account Creator</h2> 
                    		<button type="button" class="btn btn-primary face"><i class="fa fa-facebook" aria-hidden="true"></i> &nbsp;Continue with Facebook</button>
                            <br></br><br></br>
                            <Formik 
                             initialValues={{
                                email:'',
                                password:''
                               
                             }}
                             validationSchema={ yup.object().shape({
                                 email:yup.string().email().required(),
                                 password:yup.string().min(8,'Password incorrect').required()
                               
                                 
                             })}
                             
                         onSubmit={(values,{resetForm})=>{
                             resetForm({values:''})
                             setlogvalus(values)
                             
                         }}
                            >
                         {({ errors, touched }) => (
                            <Form>
                               
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <Field type="email" name='email' class="form-control" />
                                    {errors.email && touched.email ? (
                                        <div>{errors.email}</div>
                                    ) : null}
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <Field  type="password" class="form-control" name='password' />
                                    {errors.password && touched.password ? (
                                        <div>{errors.password}</div>
                                    ) : null}
                                </div>
                                <p class="tem">  
                                
                                <Field  type="checkbox" name="termsAndConditions" /> Remember me</p>
                                {errors.termsAndConditions && touched.termsAndConditions ? (
                                        <div>{errors.termsAndConditions}</div>
                                    ) : null}
                                <div class="row ">
                                    <div class="col-md-12">
                                        <Button variant='primary' type="submit" >Log In </Button>
                                    </div>
                                </div>		
                            </Form>	     
                         )}

                            </Formik>					
						</div>
					</Col>
				</Row>
			</Container>
            </section>
        </>
    )
}

export default Log