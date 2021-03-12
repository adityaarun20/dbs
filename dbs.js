import React from 'react'
import {Grid} from '@material-ui/core'
import GetEstimate from './GetEstimate.svg'
import CreateNewJob from './CreateNewJob.svg'
import SignOut from './SignOut.svg'
import ViewJobs from './ViewJobs.svg'

export default function Dbs() {
   
    
    const style1={
        width:"100%",
        boxShadow:"5px 5px 20px grey",
        borderRadius:"4%"
      

    }
    const styleGridCont={
        background:"turquoise",
        width:"70%",
        boxShadow:"5px 5px 20px grey",
        marginLeft:"15%",
        marginBottom:"10%",
        marginTop:"10%",
        padding:"4%",
        borderRadius:"3%"
    }
  

    return (
        <div >
            
            
            <Grid item xs={12} sm={12} lg={12} md={12} container spacing={4} style={styleGridCont}>
                <Grid item xs={12} lg={6} sm={6} md={6} > <img style = {style1} src={GetEstimate}/></Grid>
                <Grid item xs={12} lg={6} sm={6} md={6} > <img style = {style1} src={CreateNewJob}/></Grid>
                
            
                <Grid item xs={12} lg={6} sm={6} md={6} > <img style = {style1} src={ViewJobs}/></Grid>
                <Grid item xs={12} lg={6} sm={6} md={6} > <img style = {style1} src={SignOut}/></Grid>

                
            </Grid>
            
        </div>
    )
}
