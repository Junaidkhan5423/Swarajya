import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
// import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
// import { Navigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


//2,5,6,9,10,
export default function MenuListComposition() {
    // const navigate = useNavigate
    const SyllabusItem = ["DMLT (DIPLOMA IN MEDICAL LABORATORY TECHNICIAN)",
        "DIPLOMA IN X-RAY TECHNICIAN", "DIPLOMA IN RADIOLOGY TECHNICIAN", "IN ECG TECHNICIAN",
        "DIPLOMA IN HEALTH AND SANITARY INSPECTOR", "DIPLOMA IN SANITARY INSPECTOR", "DIPLOMA IN MRI TECHNICIAN", "DIPLOMA IN CT SCAN TECHNICIAN", "DIPLOMA IN ICU ASSISTANT", "DIPLOMA IN OPERATION THEATRE ASSISTANT", "DIPLOMA IN DIETITICIAN", "DIPLOMA IN PHYSIOTHERAPY", "DIPLOMA IN COMMUNITY HEALTH WORKER", "DIPLOMA IN AROGYA SEWAK"]
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }
    // const navigateTosyllybus =(index)=>{
    // navigate(`../../../paramedicalSyllabus/${index}.pdf`)
    // }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Stack direction="row" spacing={2}>
            {/* <Paper>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Paper> */}
            <div>
                <Button
                    style={{
                        color: 'white', display: "inline-block",
                        textAlign: "center",
                        padding: "17px 27px", fontWeight: '900', fontSize: "16.5px", textTransform: "capitalize", fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
                        
                    }}
                    ref={anchorRef}
                    onClick={handleToggle}
                >
                    Courses
                </Button>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList style={{ color: 'white', display: 'flex', flexDirection: 'column', overflow: 'auto', height: "350px",width:"350px",zIndex:"10"}}
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        <div style={{height: "100%",overflow: "overlay",backgroundColor:"black"}}>
                                        {SyllabusItem.map((item,index) => {
                                            return (
                                              <a className='hovercolor' style={{ position: "relative", overflow: "visible" }} href={require(`../../../paramedicalSyllabus/${index}.pdf`)}>{item}</a>

                                            )

                                        })}
                                        </div>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </Stack>
    );
}