import { Box, Typography } from '@mui/material'
import React from 'react'

function OurScope() {
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
                   Our Scope
                </Typography>

                <ul className='list-group'>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>1 : Self-Learning Education Has A Vast Scope In India, Given The Country's Huge Population, Diverse Cultures, And Varied Economic Conditions. Here Are Some Points To Consider.</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>2 : Accessibility: Self-Learning Education Can Reach Millions Of People Who Might Not Have Access To Traditional Education Due To Factors Like Distance, Time, Or Financial Constraints. With The Increasing Penetration Of The Internet And Mobile Devices, Online Education Platforms Have Become Accessible To People In Even Remote Areas Of The Country.</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>3 : Customization: Self-Learning Education Allows Learners To Customize Their Learning Experience According To Their Needs And Interests. Learners Can Choose From A Variety Of Courses And Programs That Cater To Different Learning Styles And Preferences.</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>4 : Cost-Effective: Self-Learning Education Can Be Cost-Effective As It Eliminates The Need For Physical Infrastructure And Reduces The Cost Of Teaching. Learners Can Access High-Quality Content At A Fraction Of The Cost Of Traditional Education..</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>5 : Lifelong Learning: Self-Learning Education Promotes The Concept Of Lifelong Learning, Where Individuals Can Acquire New Skills And Knowledge At Any Stage Of Their Lives. This Is Especially Relevant In India, Where Rapid Technological Advancements And Changing Job Markets Require Individuals To Constantly Upgrade Their Skills..</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>6 : Employment Opportunities: Self-Learning Education Can Provide Learners With The Skills And Knowledge Required To Access Better Employment Opportunities. This Is Particularly Relevant In A Country Like India, Where There Is A Significant Skills Gap In Certain Sectors Of The Economy.</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>7 : Overall, Self-Learning Education Has Immense Potential In India To Provide Accessible, Cost-Effective, And Personalized Learning Opportunities To Individuals, And To Bridge The Skills Gap In The Economy.</Typography></li>



                </ul>
    


            </Box>

        </>
    )
}

export default OurScope