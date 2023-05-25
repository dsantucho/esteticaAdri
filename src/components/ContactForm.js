
import React, { useState, useContext } from "react";
//FORMIK
import { Formik } from "formik";
//YUP => crea un esquema de validacion para los campos
import * as yup from "yup";


//esquema de validacion
const yupSchema = yup.object({
  name: yup.string().min(3).max(60).required("Name is required"),
  phone: yup.string().required("Phone is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().min(3)
});

const ContactFrom = ({ data }) => {

  const submitHandeler = async (value) => {
    console.log('submit')
    console.log(value.name)
  };
  return (
    <div  className="flex flex-col w-[340px] my-3">
      <h2 className="typo-pathway text-3xl font-normal leading-10 tracking-widest mt-3 text-typo-color">Dejanos tu mensaje</h2>
          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
              message: "",
            }}
            onSubmit={(values, { resetForm }) =>
              submitHandeler(values, resetForm)
            }
            validationSchema={yupSchema}
          >
            {({values,errors,touched,handleChange,handleSubmit,isValid,dirty,ErrorMessage}) => (
              <form className="" onSubmit={handleSubmit}>
                <div className="flex flex-col my-3">
                  <h3 className="font-normal text-lg text-typo-color mt-4">Nombre</h3>
                  <input
                    className="form-style pt-2 pb-1 bg-sc-background"
                    placeholder="Nombre"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="form-error text-xs py-1">{errors.name}</span>
                  )}
                  <h3 className="font-normal text-lg text-typo-color mt-4">Numero de celular</h3>
                  <input
                    className="form-style pt-2 pb-1 bg-sc-background"
                    placeholder="Celular"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <span className="form-error text-xs py-1">{errors.phone}</span>
                  )}

                  <h3 className="font-normal text-lg text-typo-color mt-4">Email</h3>
                  <input
                    className="form-style pt-2 pb-1 bg-sc-background"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="form-error text-xs py-1">{errors.email}</span>
                  )}
                  <h3 className="font-normal text-lg text-typo-color mt-4">Mensaje</h3>
                  <input
                    className="form-style pt-2 pb-1 bg-sc-background text-sc-typo-color"
                    placeholder="Mensaje"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                  />
                </div>
                <div className='my-3 flex  h-16 text-center bg-btn-background justify-around'>
                  <button
                    className="text-2xl uppercase text-sc-typo-color"
                    type="submit"
                    disabled={!(isValid && dirty)}>
                    Enviar Mensaje
                  </button>
                </div>

              </form>
            )}
          </Formik>
        </div>
  );
};

export default ContactFrom;