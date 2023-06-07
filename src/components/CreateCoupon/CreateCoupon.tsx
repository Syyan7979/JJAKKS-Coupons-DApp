import React, { Component, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import {  Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';

import './styles.css'

import { nanoid } from 'nanoid'

const { TextArea } = Input;

const { RangePicker } = DatePicker;



const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const CreateCoupon = () => {

    

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
            >

<Form.Item label="Merchant">
                <Cascader
                    placeholder="Category / Partner Store"
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
                <Input placeholder='Create a new coupon code'/>
                </Form.Item>

                <Form.Item label="Coupon ID">
                <Input value={nanoid(16)} disabled/>
                </Form.Item>

                <Form.Item label="Coupon Description">
                <TextArea rows={4} />
                </Form.Item>

                <Form.Item label="Valid Until">
                <DatePicker placeholder='YYYY-MM-DD'/>
                </Form.Item>




                <Form.Item label="Coupon Supply">
                <InputNumber />
                </Form.Item>


                <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined rev={undefined} />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>


                <Form.Item>
                <Button>Create Coupon</Button>
                </Form.Item>
            </Form>
        
        </div>
    )
}

export default CreateCoupon;