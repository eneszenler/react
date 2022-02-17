import React from 'react'
import * as yup from 'yup';


const Validations = yup.object().shape({
    email: yup.string().email("Lütfen Geçerli Bir Mail Adresi Giriniz!").required("Zorunlu Alan"),
    password: yup.string().min(5, "Şifre Minimum 5 Karakterden Oluşmalıdır!").required("Zounlu Alan"),
    passwordConfirm: yup.string().oneOf([yup.ref("password")], "Asıl Şifre ile Aynı Olmalı").required("Zorunlu Alan"),
});


export default Validations
