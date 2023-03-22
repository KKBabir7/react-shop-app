import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Button  from 'react-bootstrap/Button';

import React, { useState } from 'react';
import { useFormik } from 'formik'
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const Sign=()=>{

  
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
                                name:'',
                                email:'',
                                city:'',
                                phone:'',
                                password:'',
                                repassword:'',
                                termsAndConditions: false
                             }}
                             validationSchema={ yup.object().shape({
                                 name:yup.string().min(4,'Name Must be mimumum 4 length').required(),
                                 email:yup.string().email().required(),
                                 city:yup.string().min(11,'Numbar Must be mimumum 11 length').required(),
                                 phone:yup.string().min(11,'Numbar Must be mimumum 11 length').required(),
                                 password:yup.string().min(8,'Password Must be mimumum 8 length').required(),
                                 repassword:yup.string()
                                 .oneOf([yup.ref('password'), null], 'Passwords must match').required(),
                                 termsAndConditions:yup.bool().oneOf([true], "You must accept the terms and  conditions")
                             })}
                             
                         onSubmit={(values,{resetForm})=>{
                             resetForm({values:''})
                             console.log(values)
                         }}
                            >
                         {({ errors, touched }) => (
                            <Form>
                                <div class="form-group">
                                    <label for="exampleInputName">Full Name</label>
                                    <Field  type="text" name='name' class="form-control"  />
                                    {errors.name && touched.name ? (
                                        <div>{errors.name}</div>
                                    ) : null}
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <Field type="email" name='email' class="form-control" />
                                    {errors.email && touched.email ? (
                                        <div>{errors.email}</div>
                                    ) : null}
                                </div>
                                
                                    <div class="form-group">
                                        <label for="exampleInputbdt">City</label>
                                        <Field type="text" class="form-control" name='city'  />
                                        {errors.city && touched.city ? (
                                        <div>{errors.city}</div>
                                    ) : null}
                                    </div>
                                    

                            
                                <div class="form-group">
                                    <label for="exampleInputtelephone">Telephone</label>
                                    <Field type="text" id="full-name"  class="form-control" name='phone'  />
                                    {errors.phone && touched.phone ? (
                                        <div>{errors.phone}</div>
                                    ) : null}
                                </div>
                                
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <Field  type="password" class="form-control" name='password' />
                                    {errors.password && touched.password ? (
                                        <div>{errors.password}</div>
                                    ) : null}
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Re-enter password</label>
                                    <Field type="password" class="form-control"  name='repassword' />
                                    {errors.repassword && touched.repassword ? (
                                        <div>{errors.repassword}</div>
                                    ) : null}
                                    
                                </div>
                                <p class="tem">  
                                
                                <Field  type="checkbox" name="termsAndConditions" /> Terms & Conditions</p>
                                {errors.termsAndConditions && touched.termsAndConditions ? (
                                        <div>{errors.termsAndConditions}</div>
                                    ) : null}
                                <div className="row ">
                                    <div className="col-md-12">
                                        <Button variant='primary' type="submit" >Sign Up</Button>
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

export default Sign