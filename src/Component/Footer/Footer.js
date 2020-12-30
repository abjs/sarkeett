import React from 'react'
import './Footer.css'
import MessageIcon from '@material-ui/icons/Message';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import SettingsIcon from '@material-ui/icons/Settings';
export default function Footer() {
    return (
        <div  className="Footer">
            <div   className="icon">
                <MessageIcon fontSize="large" style={{ color: "#39FF14" }} />
            </div>
            <div  className="icon">
                < SearchIcon  fontSize="large" style={{ color: "#39FF14" }} />
            </div>
            <div  className="icon">
                <AddCircleOutlineIcon  fontSize="large" style={{ color: "#39FF14" }}/>
            </div>
            <div  className="icon">
                <AssignmentIndIcon  fontSize="large" style={{ color: "#39FF14" }}/>
            </div>
            <div  className="icon">
                <SettingsIcon  fontSize="large" style={{ color: "#39FF14" }}/>
            </div>
        </div>
    )
}
