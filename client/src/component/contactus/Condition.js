import { Box, Typography } from '@mui/material'
import React from 'react'

function Condition() {
    
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
           Terms & Conditions
          </Typography>
          <Typography variant="h5"  color={"ffff"}>
          Welcome to our educational website! By accessing and using our site, you agree to the following terms and conditions:
          </Typography> 

        </Box>
        <Box  padding={'1rem'}>
    
    
        <ul className='list-group'>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>1 : Content: All Content On Our Website, Including But Not Limited To Text, Images, Graphics, And Videos, Is The Property Of Our Website And Is Protected By Copyright Laws. You May Only Use Our Content For Personal And Non-Commercial Purposes. You May Not Modify, Reproduce, Distribute, Or Publish Our Content Without Our Prior Written Permission.</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>2 : User-Generated Content: We May Allow Users To Submit Content, Such As Comments Or Reviews, On Our Website. By Submitting Content, You Grant Us A Non-Exclusive, Royalty-Free, Perpetual, And Irrevocable License To Use, Modify, Reproduce, And Distribute Your Content In Any Form And For Any Purpose. You Represent And Warrant That You Own Or Have The Necessary Rights To Grant Us This License.</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>3 : User Conduct: You Agree To Use Our Website Only For Lawful Purposes And In A Manner That Does Not Infringe On The Rights Of Others. You May Not Use Our Website To Transmit, Distribute, Or Store Any Material That Is Illegal, Defamatory, Or Infringing.</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>4 : Privacy: We Collect And Use Personal Information In Accordance With Our Privacy Policy, Which Is Available On Our Website..</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>5 : Limitation Of Liability: We Make No Warranties Or Representations About The Accuracy, Reliability, Or Completeness Of The Content On Our Website. We Will Not Be Liable For Any Damages, Including But Not Limited To Direct, Indirect, Incidental, Consequential, Or Punitive Damages, Arising From Your Use Of Our Website.</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>6 : Indemnification: You Agree To Indemnify And Hold Us Harmless From Any Claims, Losses, Damages, Liabilities, And Expenses, Including Reasonable Attorneys’ Fees, Arising From Your Use Of Our Website Or Your Violation Of These Terms And Conditions.</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>7 : Modifications: We Reserve The Right To Modify These Terms And Conditions At Any Time Without Notice. Your Continued Use Of Our Website After Any Such Modifications Will Constitute Your Acceptance Of The New Terms And Conditions.</Typography></li>
                <li className='list-group-item'> <Typography variant="h5" color={"ffff"} style={{ marginTop: '20px' }}>7 : Governing Law: These Terms And Conditions Will Be Governed By And Construed In Accordance With The Laws Of The Agreement shall be subject to jurisdiction of the courts at New Delhi .</Typography></li>
                


                </ul>
    
    
        </Box>
        </>
  )
}

export default Condition  


