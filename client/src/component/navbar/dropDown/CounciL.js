import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
// import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';




export default function CounciL() {
    // const navigate = useNavigate
    const certificates = ["ASIAN INTERNATIONAL UNIVERSITY AUTHORITY","AICVPS  AUTHORITY","UGC  With  AIU"]
    
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
                   Institute Affiliations 	
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
                                    <MenuList style={{ color: 'white', display: 'flex', flexDirection: 'column', overflow: 'auto', height: "246px", width: "263px" ,zIndex:"1000" }}
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        <div style={{ height: "100%", overflow: "overlay", backgroundColor: 'black' }}>
                                            {certificates.map((item, index) => {
                                                return (
                                                    // <a style={{ position: "relative", overflow: "visible" }} href={require(`../../../paramedicalSyllabus/${index}.pdf`)}>{item}</a>
                                                    // <a className='hovercolor' style={{ position: "relative", overflow: "visible" }}>{item}</a>
                                                    <a className='hovercolor' rel="noreferrer" style={{ position: "relative", overflow: "visible" }} href={require(`../../../paramedicalSyllabus/${index}.pdf`)} target='_blank'>{item}</a>
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