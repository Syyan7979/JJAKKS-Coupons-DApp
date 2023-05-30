import React, { Component } from 'react';
import SampleCard from './SampleCard';
import './styles.css'
import { Space } from 'antd';

const ClaimCoupon = () => {
    return(
        <div className='claim-coupon flex-wrap'>
            <div style={{width: '100%'}}>
                <h1> MAGKE-CLAIM AKO NG COUPONS DITO</h1>
            </div>

            <div style={{width: '100%'}}>
                <p> Palitan nalang ang content ng component na ito nang naaayon sa pangangailangan</p>
            </div>

            <SampleCard title="meme 01" description='Amakabogera' image_src="https://umbrellacreative.com.au/wp-content/uploads/2020/01/hide-the-pain-harold-why-you-should-not-use-stock-photos-1024x683.jpg"/>
            <SampleCard title="meme 02" description="ganda ko'y" image_src="https://images.theconversation.com/files/38926/original/5cwx89t4-1389586191.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"/>
            <SampleCard title="meme 03" description='irarampa' image_src='https://blog.artsper.com/wp-content/uploads/2022/06/pepefroggie-770x432-2-644x362.jpg'/>
            <SampleCard title="meme 04" description="'di magpapatinag" image_src='https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg'/>
            <SampleCard title="meme 05" description='sa sasabihin' image_src='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-01/210602-doge-meme-nft-mb-1715-8afb7e.jpg'/>
            <SampleCard title="meme 06" description='ng iba' image_src='https://e3.365dm.com/19/09/2048x1152/skynews-drew-scanlon-blinking-white-guy_4786055.jpg'/>
            <SampleCard title="meme 07" description='Amakabogera' image_src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmnzzQWPF1MTGkSLPj8-kJqBzVbDXnEDfH7Q&usqp=CAU'/>
            <SampleCard title="meme 08" description='umaapaw ang karisma' image_src='https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MTk3MjAxMjM4ODI4OTU3/yao-ming-meets-the-yao-ming-meme.jpg'/>
            <SampleCard title="meme 09" description='ang tunay kong ganda' image_src='https://helios-i.mashable.com/imagery/articles/02bBNcEytrPlxf6CUAqZfYY/hero-image.fill.size_1248x702.v1623370042.png'/>
            <SampleCard title="meme 10" description='sa lahat naiiba' image_src='https://cdn.vox-cdn.com/thumbor/mFiywP9BUHDC8AIRBDYJvXdfQiA=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23265504/Spider_Man_meme.jpg'/>
        </div>
    )
}

export default ClaimCoupon;