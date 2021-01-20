import React ,{useState , useEffect} from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import {apiCall} from '../services/apiCall';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from '@material-ui/core';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

export default function UserTable(){
    const [loading ,setLoading] = useState(true);
    const [data , setDtata]= useState(null);
    const classes = useStyles();
    let sno=0;


    function removeUser(id){
      apiCall('delete',`https://ylrwt.sse.codesandbox.io/room/${id}`)
    }
    
    useEffect(()=>{
      apiCall('get','https://ylrwt.sse.codesandbox.io/room/all')
      .then(res=>{
        setDtata(res);
        setLoading(false);
      })
      .catch(err =>{
        console.log(err);
      })
    },[]);


  return(
    <div className="box-table">
    <TableContainer component={Paper}>
      {loading ? <div>Loading.....</div>:
    <Table className={classes.table} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>S.No</TableCell>
          <TableCell>Created At</TableCell>
          <TableCell>Room Id</TableCell>
          <TableCell>Bet Amount</TableCell>
          <TableCell>Rake Percent</TableCell>
          <TableCell>Rake Cap Amount</TableCell>
          <TableCell>Total Prize Pool</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
                {++sno}
            </TableCell>
            <TableCell >
              <Moment format="Do MM YYYY">
                  {row.created_At}
              </Moment>
            </TableCell>
            <TableCell >{row._id}</TableCell>
            <TableCell >{row.bet}</TableCell>
            <TableCell >{row.rakePercent}</TableCell>
            <TableCell >{row.rakeCap}</TableCell>
            <TableCell >{row.totalPrize}</TableCell>
            <TableCell >
            <Link to={`/api/edit/${row._id}`}>
                <Button variant="contained" color="primary">
                      Edit
                </Button>
            </Link>
            </TableCell>
            <TableCell ><Button variant="contained" onClick={removeUser.bind(this , row._id)} color="secondary">Delete</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
   }
  </TableContainer>
  </div>
  )
}


