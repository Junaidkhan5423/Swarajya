import React from 'react'
import './ContactUs.css'

function ContactUs() {
    return (
        <>
            <h4 className='mainhading'>We Welcome Your Questions, Comments, And Feedback! Here Are The Ways You Can Get In Touch With Us:</h4>
            <table className='table-name'>
                <tr>
                    <th>Director Name</th>
                    <th>Email Addres</th>
                    <th>Slected City</th>
                    {/* <th>Column 4</th> */}
                </tr>
                <tr>
                    <td>Sejal</td>
                    <td>sejal@swrajyaparamedix.in </td>
                    <td>Pune, Nashik, Nanded, Nagpur Region.</td>
                    {/* <td>Row 1, Column 4</td> */}
                </tr>
                <tr>
                    <td>MISS DIWYANGI</td>
                    <td>diwya@swarajyaparamedix.in </td>
                    <td>Ahmednager,
                        Bhandara,
                        Chandrapur,
                        Dhule,
                        Gadchiroli,
                        Gondia,
                        Jalgao,
                        Kolhapur,
                        Latur,
                        Nandurbar.
                    </td>
                    {/* <td>Row 2, Column 4</td> */}
                </tr>
                <tr>
                    <td>MISS SHATAKSHI K. DADKE</td>
                    <td>shatakshi@swarajyaparamedix.in</td>
                    <td>Parbhani,
                        Raigad,
                        Ratnagiri,
                        Sangli,
                        Satara,
                        Sidhudurg,
                        Solapur,
                        Palghar,
                        Wardha,
                        Washim,
                        Yavatmal.
                    </td>
                    {/* <td>Row 3, Column 4</td> */}
                </tr>
                <tr>
                    <td>MISS. SAMREEN A. SHAIKH</td>
                    <td>sam@swarajyaparamedix.in </td>
                    <td>Aurangabad,
                        Osmanabad,
                        Beed,
                        Parbhani,
                        Hingoli,
                        Mumbai City,
                        Mumbai Suburban,
                        Akola,
                        Thane,
                        Jalna,
                        Amravati.
                    </td>
                    {/* <td>Row 4, Column 4</td> */}
                </tr>
                <tr>
                    <td>MISS. NEHA GIRISH MATRA</td>
                    <td>neha@swarajyaparamedix.in</td>
                    <td>All City's Of Utter Pradesh</td>
                    {/* <td>Row 5, Column 4</td> */}
                </tr>
            </table>
            <div className='condition-text'>
                <p>
                    WHATSAPP CHAT SUPPORT  AVAILABLE ON : 8 WORKING HRS DAILY.
                    CALL SUPPORT ON SAME NUMBER WILL BE AVAILABLE ON SATURDAY EVENING 4:30 PM TO 5:30 PM ONLY
                    ALL RED HOLIDAYS IN CALANDER INCLUDING SUNDAYS WILL BE NOT AVAILABLE FOR INQUIREY
                </p>
                <h6>And We Will Get Back To You As Soon As Possible.</h6>
            </div>
            <div className='text-area'>
                <p>1. Phone: If You Prefer To Speak With Us Over The Phone, Please Call Us At Given Contacts of Our Coordinators in Office Hours</p>
                <p>2. Contact Form: You Can Also Fill Out Our Contact Form Our Website With Your Name, Email Address, And Message. We Will Respond To Your Message Via Email.</p>
                <p>3. Social Media: Follow Us On Social Media For The Latest News And Updates About Our Institute. You Can Also Send Us A Message On Social Media.</p>
            </div>
        </>
    )
}

export default ContactUs
