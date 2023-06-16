import { Box, Typography } from '@mui/material'
import React from 'react'

function AimsAndObjectives() {
    return (
        <>
            <Typography
                variant="h2"
                color={"whitesmoke"}
                fontWeight="700"
                bgcolor='#001f5f'
                fontFamily="system-ui"
                textAlign={'center'}
                sx={{ m: "0 0 5px 0" }}
            >
                Welcome to Swarajya Paramedical Institute.
            </Typography>
            <Box padding={'1rem'}>
                <Typography
                    variant="h3"
                    color={"#001f5f"}
                    textAlign={"center"}
                    fontWeight="700"
                    sx={{ m: "0 0 5px 0" }}
                >
                    Aims and Objectives
                </Typography>

                <ul className='list-group'>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>To provide accessible and affordable education to students from all over the world, regardless of their location, background or circumstances.</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>To offer a wide range of courses and programs that are designed to meet the diverse needs and interests of our students, and to ensure that they have the knowledge and skills necessary for personal and professional growth.</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>To use the latest technologies and teaching methods to provide a flexible and engaging learning experience that is tailored to the needs of each individual student.</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>To provide students with access to experienced and qualified educators who are passionate about their subjects and who are dedicated to helping them achieve their academic and career goals.</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>To create a supportive and inclusive learning community where students can connect with one another, share ideas and experiences, and collaborate on projects.</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>To promote lifelong learning and to provide students with the tools and resources necessary to continue learning and growing throughout their lives.</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>To foster a culture of innovation and research, and to contribute to the advancement of knowledge in our respective fields.</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>Overall, our aims and objectives are centered around providing an exceptional learning experience to our students, empowering them with the knowledge and skills necessary to succeed in their chosen fields, and fostering a culture of excellence and innovation.

.</Typography></li>



                </ul>
                {/* <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>
    <ol>
        <li>To provide accessible and affordable education to students from all over the world, regardless of their location, background or circumstances.</li>
    </ol>
</Typography>
<Typography variant="h5" color={"ffff"}style={{ marginTop: '20px' }}>
    <ol>
        <li>To offer a wide range of courses and programs that are designed to meet the diverse needs and interests of our students, and to ensure that they have the knowledge and skills necessary for personal and professional growth.</li>
    </ol>
</Typography> */}


            </Box>

        </>
    )
}

export default AimsAndObjectives