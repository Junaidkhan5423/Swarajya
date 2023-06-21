import { Box, Typography } from '@mui/material'
import React from 'react'

function MissionAndVision() {

  return (
<>
<Typography
        variant="h2"
        color={"whitesmoke"}
        fontWeight="700"
        bgcolor='#001f5f'
        fontFamily="system-ui"
        textAlign={'center'} 
        sx={{ m: "0 0 5px 0"}}
      >
       Welcome to Swarajya Institute of Distance Learning
      </Typography>
<Box  padding={'1rem'}>
      <Typography
        variant="h3"
        color={"#001f5f"}
        fontWeight="700"
        sx={{ m: "0 0 5px 0" }}
      >
       Mission
      </Typography>
      <Typography variant="h5"  color={"ffff"}>
      Our mission at the Swarajya Institute of Distance Learning is to provide accessible and high-quality education to students from all over the world. We aim to provide a flexible learning environment that caters to the diverse needs and interests of our students, and to equip them with the skills and knowledge necessary for personal and professional growth.
      </Typography>

    </Box>
    <Box  padding={'1rem'}>
      <Typography
        variant="h3"
        color={"#001f5f"}
        fontWeight="bold"
        sx={{ m: "6px 0 5px 0" }}
      >
       Vision
      </Typography>
      <Typography variant="h5"  color={"ffff"}>
      Our vision is to become a global leader in distance education, recognized for our commitment to excellence in teaching, research, and innovation. We strive to create a community of lifelong learners who are empowered to reach their full potential, and who contribute to the betterment of society. We believe that education is a fundamental human right, and that everyone should have access to quality education, regardless of their background or circumstances.
      </Typography>

    </Box>
    </>
  )
}

export default MissionAndVision