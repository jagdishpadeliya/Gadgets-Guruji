"use client"
import React from 'react'
import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import styles from "../../../../styles/Bootstrap.module.css";
import "bootstrap/dist/css/bootstrap.min.css"
import tw from 'tailwindcss'
import { pink, grey, yellow, deepPurple } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import Image from 'next/image'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, Paper } from '@mui/material';
import Head from 'next/head';
import Black1 from '../../../../public/images/iphone-14-pro-finish-select-202209-6-7inch-spaceblack.jpg'
import Black2 from '../../../../public/images/iphone-14-pro-finish-select-202209-6-7inch-spaceblack_AV1_GEO_EMEA.jpg'
import Black3 from '../../../../public/images/iphone-14-pro-finish-select-202209-6-7inch-spaceblack_AV2.jpg'
import DeepPurple1 from '../../../../public/images/iphone-14-pro-finish-select-202209-6-7inch-deeppurple.jpg'
import DeepPurple2 from '../../../../public/images/iphone-14-pro-finish-select-202209-6-7inch-deeppurple_AV1_GEO_EMEA.jpg'
import DeepPurple3 from '../../../../public/images/iphone-14-pro-finish-select-202209-6-7inch-deeppurple_AV2.jpg'
import Gold1 from '../../../../public/images/iphone-14-pro-finish-select-202209-6-7inch-gold.jpg'
import Gold2 from '../../../../public/images/iphone-14-pro-finish-select-202209-6-7inch-gold_AV1_GEO_EMEA.jpg'
import Gold3 from '../../../../public/images/iphone-14-pro-finish-select-202209-6-7inch-gold_AV2.jpg'
import Silver1 from '../../../../public/images/iphone-14-pro-finish-select-202209-6-7inch-silver.jpg'
import Silver2 from '../../../../public/images/iphone-14-pro-finish-select-202209-6-7inch-silver_AV1_GEO_EMEA.jpg'
import Silver3 from '../../../../public/images/iphone-14-pro-finish-select-202209-6-7inch-silver_AV2.jpg'
export default function BootstrapCarousel() {
    const colors = ["Space Black", "Deep Purple", "Gold", "Silver",]
    const [selectedColor, setSelectedColor] = React.useState('Deep Purple');
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [variantSelected, setVariantSelected] = React.useState(0);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setSelectedColor(colors[])
        const charCode = event.target.value.charCodeAt(0);
        const index = charCode - 'a'.charCodeAt(0);
        setSelectedColor(colors[index]);
        setPhotoIndex(index);
        setSelectedValue(event.target.value);
    };
    const controlProps = (item: string) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });
    const images = [
        [{
            id: 1,
            imageUrl: Black1,
            title: 'iPhone 14 Pro SpaceBlack',
        },
        {
            id: 2,
            imageUrl: Black2,
            title: 'iPhone 14 Pro SpaceBlack',
        }, {
            id: 3,
            imageUrl: Black3,
            title: 'iPhone 14 Pro SpaceBlack',
        }],
        [{
            id: 4,
            imageUrl: DeepPurple1,
            title: 'iPhone 14 Pro DeepPurple',
        },
        {
            id: 5,
            imageUrl: DeepPurple2,
            title: 'iPhone 14 Pro DeepPurple',
        }, {
            id: 6,
            imageUrl: DeepPurple3,
            title: 'iPhone 14 Pro DeepPurple',
        }],
        [
            {
                id: 7,
                imageUrl: Gold1,
                title: 'iPhone 14 Pro Gold',
            },
            {
                id: 8,
                imageUrl: Gold2,
                title: 'iPhone 14 Pro Gold',
            }, {
                id: 9,
                imageUrl: Gold3,
                title: 'iPhone 14 Pro Gold',
            }
        ],
        [
            {
                id: 10,
                imageUrl: Silver1,
                title: 'iPhone 14 Pro Silver',
            },
            {
                id: 11,
                imageUrl: Silver2,
                title: 'iPhone 14 Pro Silver',
            }, {
                id: 12,
                imageUrl: Silver3,
                title: 'iPhone 14 Pro Silver',
            }
        ]
    ]
    const [index, setIndex] = useState(0);
    const [photoIndex, setPhotoIndex] = useState(0);
    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <div style={{ backgroundColor: 'white', }} className='w-full px-5 py-5 sm:p-5'>
                <h1 className='mb-3'>Iphone 14 Pro</h1>
                <div className='overflow-hidden w-full flex flex-col sm:flex-row'>
                    <div className='border sm:w-3/5 rounded-3xl overflow-hidden'>
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            {images[photoIndex].map((item) => (
                                <Carousel.Item key={item.id} className={styles.itemP} interval={4000}>
                                    {/* <Image src={item.imageUrl} alt='slides' fill={true}/> */}
                                    <Image src={item.imageUrl} alt='Iphone-14-pro' />
                                    <Carousel.Caption className={styles.caption}>
                                        <h3>{item.title}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                    <div className='sm:w-2/5 px-2 sm:px-5 py-2'>
                        <h3 className='text-3xl font-serif font-bold mb-4'>Model Variants</h3>
                        <div className={`border-2 p-2 flex flex-row ${variantSelected == 0 ? 'border-blue-500' : 'border-gray-300'} rounded-lg mt-2`} onClick={() => setVariantSelected(0)}>
                            <span className='ms-2 font-bold text-gray-700'>
                                Iphone 14 Pro -
                            </span>
                            <span className='font-medium text-gray-500'>&nbsp;Price :  $999</span>
                        </div>
                        <div className={`border-2 p-2 flex flex-row ${variantSelected == 1 ? 'border-blue-500' : 'border-gray-300'} rounded-lg mt-2`} onClick={() => setVariantSelected(1)}>
                            <span className='ms-2 font-bold text-gray-700'>
                                Iphone 14 Pro Max -
                            </span>
                            <span className='font-medium text-gray-500'>&nbsp;Price :   $1099</span>
                        </div>
                        <h3 className='text-3xl font-serif font-bold my-4'>Color Variant - {selectedColor}</h3>
                        <div>
                            <Radio
                                {...controlProps('a')}
                                sx={{
                                    color: grey[100],
                                    '&.Mui-checked': {
                                        color: '#5e5568',
                                    },
                                }}
                                size='large'
                            />
                            <Radio
                                {...controlProps('b')}
                                sx={{
                                    color: grey[100],
                                    '&.Mui-checked': {
                                        color: '#f4e8ce',
                                    },
                                }}
                                size='large'
                            />
                            <Radio
                                {...controlProps('c')}
                                sx={{
                                    color: grey[100],
                                    '&.Mui-checked': {
                                        color: '#f1f3f2',
                                    },
                                }}
                                size='large'
                            />
                            <Radio
                                {...controlProps('d')}
                                sx={{
                                    color: grey[100],
                                    '&.Mui-checked': {
                                        color: '#474644',
                                    },
                                }}
                                size='large'
                            />
                        </div>
                        <div>
                            <h3 className='text-3xl font-serif font-bold my-4'>Storage</h3>
                            <div className='border p-2 flex flex-row border-blue-700 rounded-lg mt-2'>
                                <span className='ms-2 font-bold text-gray-700'>
                                    128GB -
                                </span>
                                <span className='font-medium text-gray-500'>&nbsp;Price :   {variantSelected == 0 ? '$999' : '$1099'}</span>
                            </div>
                            <div className='border p-2 flex flex-row border-blue-700 rounded-lg mt-2'>
                                <span className='ms-2 font-bold text-gray-700'>
                                    256GB -
                                </span>
                                <span className='font-medium text-gray-500'>&nbsp;Price :   {variantSelected == 0 ? '$1099' : '$1199'}</span>
                            </div>
                            <div className='border p-2 flex flex-row border-blue-700 rounded-lg mt-2'>
                                <span className='ms-2 font-bold text-gray-700'>
                                    512GB -
                                </span>
                                <span className='font-medium text-gray-500'>&nbsp;Price :   {variantSelected == 0 ? '$1299' : '$1399'}</span>
                            </div>
                            <div className='border p-2 flex flex-row border-blue-700 rounded-lg mt-2'>
                                <span className='ms-2 font-bold text-gray-700'>
                                    1TB -
                                </span>
                                <span className='font-medium text-gray-500'>&nbsp;Price :   {variantSelected == 0 ? '$1499' : '$1599'}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <span className='text-3xl font-semibold'>Iphone 14 Pro Specifications</span>
                    <div className='mt-5'>
                        <table className='table-fixed border-collapse border border-slate-500 rounded-lg'>
                            <tbody>
                                <tr>
                                    <td className='border border-slate-700 p-3'>
                                        <span className='font-bold mr-10'>
                                            Display
                                        </span>
                                        <span>6.1-inchSuper Retina XDR display with ProMotion</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='border border-slate-700 p-3'>
                                        <span className='font-bold mr-10'>
                                            Capacity
                                        </span>
                                        <span>128GB, 256GB, 512GB, 1TB</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='border border-slate-700 p-3'>
                                        <span className='font-bold mr-10'>
                                            Splash, Water, and Dust Resistant
                                        </span>
                                        <span>Ceramic Shield front, textured matte glass back and stainless steel design, water and dust resistant (rated IP68 - maximum depth of 6 meters up to 30 minutes)</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='border border-slate-700 p-3'>
                                        <span className='font-bold mr-10'>
                                            Camera and Video
                                        </span>
                                        <span>Pro camera system: 48MP Main, 12MP Ultrawide, and 12MP 2x Telephoto with Portrait mode, Depth Control, Portrait Lighting, Smart HDR 4, and 4K Dolby Vision HDR video up to 60 fps</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='border border-slate-700 p-3'>
                                        <span className='font-bold mr-10'>
                                            Front Camera
                                        </span>
                                        <span>12MP TrueDepth front camera with Portrait mode, Depth Control, Portrait Lighting, and Smart HDR 4</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='border border-slate-700 p-3'>
                                        <span className='font-bold mr-10'>
                                            Power and Battery
                                        </span>
                                        <span>Video playback: Up to 23 hours Video playback (streamed): Up to 20 hours Audio playback: Up to 75 hours 20W adapter or higher (sold separately) Fast-charge capable:Up to 50% charge in around 30 minutes with 20W adapter or higher (available separately)</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='border border-slate-700 p-3'>
                                        <span className='font-bold mr-10'>
                                            In the Box
                                        </span>
                                        <span>iPhone with iOS 16, USB-C to Lightning Cable, Documentation</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='border border-slate-700 p-3'>
                                        <span className='font-bold mr-10'>
                                            Warranty
                                        </span>
                                        <span>Apple-branded hardware product and accessories contained in the original packaging (“Apple Product”) come with a One-Year Limited Warranty. See apple.com/in/legal/warranty for more information.</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='border border-slate-700 p-3'>
                                        <span className='font-bold mr-10'>
                                            Height
                                        </span>
                                        <span>5.81 inches (147.5 mm)</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='border border-slate-700 p-3'>
                                        <span className='font-bold mr-10'>
                                            Width
                                        </span>
                                        <span>2.81 inches (71.5 mm)</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='border border-slate-700 p-3'>
                                        <span className='font-bold mr-10'>
                                            Depth
                                        </span>
                                        <span>0.31 inch (7.85 mm)</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='border border-slate-700 p-3'>
                                        <span className='font-bold mr-10'>
                                            Weight
                                        </span>
                                        <span>7.27 ounces (206 grams)</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='mt-5'>
                    <span className='text-3xl font-semibold mb-3 block'>Iphone 14 Pro Review</span>
                    <Card className='p-4 w-full sm:w-4/5'>
                        <p className='text-slate-600 font-medium '>
                            <span className='text-black'>iPhone 14 Pro Review:</span>
                            The iPhone 14 Pro delivers a smooth and stable software experience, making it a pleasure to use. While the battery life is good, it falls slightly short of the exceptional battery life found in the iPhone 13 Pro Max. With the 3200mAh battery, I&apos;ve been able to get a full day of usage, which is an improvement compared to my previous Android phone with an 18-hour battery life. In fact, the iPhone 14 Pro&apos;s battery performance can be compared to a 5500mAh Android battery.<br /><br />
                            The 48MP camera on the iPhone 14 Pro captures sharp and fast photos. The dynamic island feature proves to be extremely helpful for multitasking, especially during calls. Even under direct sunlight, the screen remains bright and clear, ensuring excellent visibility. The haptics on this device are unique and delightful, adding to the overall user experience. Face ID provides convenient and secure authentication, eliminating the need for fingerprint scanning.<br /><br />
                            One-handed use is comfortable with the 6.1-inch screen size, avoiding the need to shuffle the phone around as you would with larger 6.7-inch phones. Apple&apos;s ecosystem is a standout feature, seamlessly integrating the iPhone 14 Pro with other Apple devices like the Series 8 watch and AirPods 3. This level of integration is hard to find in other ecosystems, providing a seamless user experience. The device&apos;s security measures are top-notch, offering data isolation and protection that is unmatched by Android. Additionally, personalized ads are less prevalent, preserving privacy better than on Android.<br /><br />
                            On the downside, the iPhone 14 Pro is heavier than expected for its size, especially when using a case and protector, making it weigh around a quarter kilo. The continued use of the lightning port may require purchasing new accessories. The camera performance outside can cause faster battery drain, so it&apos;s advisable to either carry a power bank or consider the iPhone 14 Pro Max for vacations. While the always-on display (AOD) is visually appealing, it can be distracting, and opting for tap-to-wake can save more battery life.<br /><br />
                            Overall, the iPhone 14 Pro offers a smooth software experience, impressive camera capabilities, and seamless integration within Apple&apos;s ecosystem. It may have some drawbacks such as its weight and the continued use of the lightning port, but it remains a highly secure and privacy-focused device. If you can overlook these minor inconveniences, the iPhone 14 Pro is a solid choice for those seeking a powerful and feature-rich smartphone.
                        </p>
                    </Card>
                </div>
                <div className='mt-5'>
                    <span className='text-3xl font-semibold mb-3 block'>Iphone 14 Pro FAQs</span>
                    <div className='w-full sm:w-4/5'>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className='font-semibold'>What are the benefits of an iPhone 14 Pro?What are the benefits of an iPhone 14 Pro?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The iPhone 14 Pro features a 6.1-inch Super Retina XDR Display, Dynamic Island, a Pro camera system with a 48MP main camera, a 12MP ultra-wide camera, a 12MP telephoto camera, a 6x optical zoom range, and a battery life of up to 23 hours. Its Pro camera system makes the iPhone 14 Pro a great option for photographers.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className='font-semibold'>What is the difference between the iPhone 14 Pro and the iPhone 14?What is the difference between the iPhone 14 Pro and the iPhone 14?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The iPhone 14 features an advanced dual-camera system with a 12MP main camera and a 12MP ultra-wide camera, 2x optical zoom range, and a battery life of up to 20 hours. On the other hand, the iPhone 14 Pro features a Pro camera system with a 48MP main camera, a 12MP ultra-wide camera, a 12MP telephoto camera, a 6x optical zoom range, and a battery life of up to 23 hours, making it a great option for photographers.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className='font-semibold'>Is the iPhone 14 Pro water-resistant?Is the iPhone 14 Pro water-resistant?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The iPhone 14 Pro has an Ingress Protection (IP) rating of IP68 making it water resistant for up to 6 metres in depth for up to 30 minutes, making it safe to take to the beach or to a pool party.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className='font-semibold'>What is the typical battery life of an iPhone 14 Pro?What is the typical battery life of an iPhone 14 Pro?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The typical battery life of an iPhone 14 Pro is up to 23 hours of video playback. Its all-day battery life makes it ideal for daily tasks, capturing photos, and streaming.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className='font-semibold'>What type of camera does the iPhone 14 Pro have?What type of camera does the iPhone 14 Pro have?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The iPhone 14 Pro features a Pro camera system with a 48MP main camera, a 12MP ultra-wide camera, a 12MP telephoto camera, and a 6x optical zoom range, making it a great option for photographers.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>

    );
}