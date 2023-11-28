import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../Button';
import TextInput from '../TextInput';
import { useRouter } from 'next/router';
import { postData, putData } from '../../utils/fetchData';
import { toast } from 'react-toastify';

export default function FormSignin() {
    const router = useRouter();
    const { keyword } = router.query;
    const [otp, setOtp] = useState('');
    const [form, setForm] = useState({
        email: '',
        password: '',
        fristName: '',
        lastName: '',
        role: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            if (keyword === 'otp') {
                putData('api/v1/active', {
                    otp: otp,
                    email: form.email,
                }).then((res) => {
                    if (res.data) {
                        toast.success('berhasil aktipkan akun', {
                            position: 'top-right',
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        router.push('/signin');
                    }
                });
            } else {
                postData('api/v1/auth/siginup', form).then((res) => {
                    if (res.data) {
                        toast.success('berhasil signup', {
                            position: 'top-right',
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        router.push({ pathname: '/signup', query: { keyword: 'otp' } });
                    }
                });
            }
        } catch (error) {
            error(toast)
        }
    };

    return (
        <form className='form-login d-flex flex-column mt-4 mt-md-0'>
            {keyword === 'otp' ? (
                <TextInput
                    label={'otp'}
                    type={'text'}
                    value={otp}
                    name='otp'
                    placeholder='Enter opt here'
                    onChange={(e) => {
                        setOtp(e.target.value);
                    }}
                />
            ) : (
                <>
                    <TextInput
                        label={'First Name'}
                        type={'text'}
                        value={form.fristName}
                        name='fristName'
                        placeholder='First name here'
                        onChange={handleChange}
                    />
                    <TextInput
                        label={'Last Name'}
                        type={'text'}
                        name='lastName'
                        value={form.lastName}
                        placeholder='First name here'
                        onChange={handleChange}
                    />

                    <TextInput
                        label={'Email'}
                        type={'email'}
                        name='email'
                        value={form.email}
                        placeholder={'Marzkyy@mrzyy.com'}
                        onChange={handleChange}
                    />

                    <TextInput
                        label={'Password (6 characters)'}
                        type={'password'}
                        value={form.password}
                        name='password'
                        placeholder='Type your password'
                        onChange={handleChange}
                    />

                    <TextInput
                        label={'Role'}
                        type={'text'}
                        value={form.role}
                        name='role'
                        placeholder='ex: Product Designer'
                        onChange={handleChange}
                    />
                </>
            )}

            <div className='d-grid mt-2'>
                <Button variant={'btn-green'} action={() => handleSubmit()}>
                    {keyword === 'code' ? 'Verification' : 'Sign Up'}
                </Button>
            </div>
        </form>
    );
}