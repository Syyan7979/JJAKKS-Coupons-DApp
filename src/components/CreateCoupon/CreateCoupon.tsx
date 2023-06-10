import React, { Component, useState } from 'react';
import {  Spin, message } from 'antd';

import { char2Bytes } from '@taquito/utils'
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
} from 'antd';
import dayjs, { Dayjs } from "dayjs";

import './styles.css'

import { nanoid } from 'nanoid'


import { storage } from '../../utils/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { create_couponNFT_contract } from '../../utils/operation';


const { TextArea } = Input;


const couponId: number = Math.floor((Math.random() * 10000000) + 1);;
const dateNow: number = Math.floor(Date.now() / 1000);

const CreateCoupon = () => {
  
    const [merchant, setMerchant] = useState([""]);
    const handleMerchant = (value: string[]) => {
        // 👇 Get input value from "event"
        setMerchant(value);
        console.log(merchant);
      };

    const [couponCode, setCouponCode] = useState("");
    const handleCouponCode = (value: string) => {
        const re = /^[A-Za-z][A-Za-z0-9]*$/;
        if (value === '' || re.test(value)) {
           setCouponCode(value.toUpperCase())
           console.log("couponCode " + value.toUpperCase());
        }
    }


    const [couponDesc, setCouponDesc] = useState("");
    const handleCouponDesc = (value: string) => {
        setCouponDesc(value);
        console.log("couponDesc " + couponDesc);
    }

    const [validity, setValidity] = useState(dateNow);
    const handleValidity = (value: Dayjs | null) => {
        if (value != null) {
            setValidity(value.unix());
            console.log("Validity " + validity.toString());
        }
        
    }

    const [couponSupply, setCouponSupply] = useState(1);
    const handleSupply = (value: number | null) => {
        if (value != null) {
            setCouponSupply(value);
            console.log("couponSupply " + couponSupply);
        }
    }

    const [imageFile, setImageFile] = useState<File>();
    const [downloadURL, setDownloadURL] = useState('')
    const [isUploading, setIsUploading] = useState(false)
    const [progressUpload, setProgressUpload] = useState(0)

    const handleSelectedFile = (files: any) => {
        if (files && files[0].size < 10000000) {
            setImageFile(files[0]);

            console.log(files[0]);
        } else {
            message.error("File size too large.")
        }
    }

    const handleSubmit = async () => {
        setIsUploading(true);
        if (imageFile) {
            const name = imageFile.name
            const storageRef = ref(storage, `image/${name + nanoid(8)}`)
            const uploadTask = uploadBytesResumable(storageRef, imageFile)
      
            uploadTask.on(
              'state_changed',
              (snapshot) => {
                const progress =
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      
                setProgressUpload(progress) // to show progress upload
      
                switch (snapshot.state) {
                  case 'paused':
                    console.log('Upload is paused')
                    break
                  case 'running':
                    console.log('Upload is running')
                    break
                }
              },
              (error) => {
                message.error(error.message)
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                  //url is download url of file
                  setDownloadURL(url)
                })
              },
            )

            create_couponNFT_contract(couponSupply, char2Bytes(merchant[1]), validity, char2Bytes(couponCode), couponId, char2Bytes(couponDesc), null);
            
          } else {
            message.error('File not found')
            
          }
          setIsUploading(false);

    }



    return(
        <div className='create-coupon'>
            <h1> CREATE COUPON </h1>
            
            <br/>
            <br/>

            <Form
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 12 }}
                layout="horizontal"
                style={{ maxWidth: 500 }}
                labelAlign='left'
                // onFinish={handleSubmit}
            >

                <Form.Item label="Merchant" >
                <Cascader
                    placeholder="Category / Partner Store"
                    value={merchant}
                    expandTrigger="hover"
                    onChange={handleMerchant}
                    options={[
                        {
                            value: 'restaurant',
                            label: 'Restaurant',
                            children: [
                                {
                                    value: 'burgerbyte',
                                    label: 'Burgerbyte',
                                },
                                {
                                    value: 'eatsy',
                                    label: 'Eatsy',
                                },
                                {
                                    value: 'grill-galaxy',
                                    label: 'Grill Galaxy',
                                },
                                {
                                    value: 'loco-cafe',
                                    label: 'Loco Cafe',
                                },
                                {
                                    value: 'snack-haven',
                                    label: 'Snack Haven',
                                },
                            ],
                        },
                        {
                            value: 'fashion',
                            label: 'Fashion',
                            children: [
                                {
                                    value: 'chictique',
                                    label: 'Chictique',
                                },
                                {
                                    value: 'choice',
                                    label: 'Choice',
                                },
                                {
                                    value: 'dress-domain',
                                    label: 'Dress Domain',
                                },
                                {
                                    value: 'glamour-galleria',
                                    label: 'Glamour Galleria',
                                },
                                {
                                    value: 'urban-soul',
                                    label: 'Urban Soul',
                                },
                                {
                                    value: 'wearista',
                                    label: 'Wearista',
                                },
                            ],
                        },
                        {
                            value: 'electronics',
                            label: 'Electronics',
                            children: [
                                {
                                    value: 'applix',
                                    label: 'Applix',
                                },
                                {
                                    value: 'furvio',
                                    label: 'Furvio',
                                },
                                {
                                    value: 'gadget-gateway',
                                    label: 'Gadget Gateway',
                                },
                                {
                                    value: 'gadget-genius',
                                    label: 'Gadget Genius',
                                },
                                
                                {
                                    value: 'zees',
                                    label: 'Zees',
                                },
                                {
                                    value: 'powermate',
                                    label: 'Powermate',
                                },
                                {
                                    value: 'laplabz',
                                    label: 'Laplabz',
                                },
                                {
                                    value: 'nimbus',
                                    label: 'Nimbus',
                                },
                                {
                                    value: 'tech-haus',
                                    label: 'Tech Haus',
                                },
                                {
                                    value: 'techcite',
                                    label: 'Techcite',
                                },
                            ],
                        },
                        {
                            value: 'personal-care',
                            label: 'Personal Care',
                            children: [
                                {
                                    value: 'barber-box',
                                    label: 'Barber Box',
                                },
                                {
                                    value: 'bliss-booth',
                                    label: 'Bliss Booth',
                                },
                                {
                                    value: 'elite-salon-spa',
                                    label: 'Elite Salon Spa',
                                },
                                {
                                    value: 'graceful-nails',
                                    label: 'Graceful Nails',
                                },
                                {
                                    value: 'polished-plus',
                                    label: 'Polished+',
                                },
                                {
                                    value: 'the-cut-crafters',
                                    label: 'The Cut Crafters',
                                },
                                {
                                    value: 'urbanmane',
                                    label: 'Urbanmane',
                                },
                            ],
                        },
                    ]}
                />
                </Form.Item>

                <Form.Item label="Coupon Code">
                <Input placeholder='Create a new coupon code' value={couponCode} onChange={(e) => handleCouponCode(e.target.value)}/>
                </Form.Item>

                <Form.Item label="Coupon ID">
                <Input value={couponId} disabled/>
                </Form.Item>

                <Form.Item label="Coupon Description">
                <TextArea rows={4} onChange={(e) => handleCouponDesc(e.target.value)}/>
                </Form.Item>

                <Form.Item label="Valid Until">
                <DatePicker placeholder='YYYY-MM-DD'  disabledDate={d => !d || d.isBefore(dayjs.unix(dateNow))} value={dayjs.unix(validity)} onChange={ (e) => handleValidity(e)}/>
                </Form.Item>

                <Form.Item label="Coupon Supply">
                <InputNumber value={couponSupply} min={1} onChange={(e) => handleSupply(e)}/>
                </Form.Item>


                <Form.Item label="Coupon Image" >
                    <Input type="file" onChange={(files)=> handleSelectedFile(files.target.files)}></Input>
                </Form.Item>
                

                <Form.Item >
                <Button onClick={handleSubmit} type='primary' htmlType='submit' disabled={isUploading} block> {isUploading? <Spin />: "Create Coupon"}</Button>
                </Form.Item>
            </Form>
        
        </div>
    )
}

export default CreateCoupon;
