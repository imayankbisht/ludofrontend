import React ,{useState , useEffect} from 'react';
import Moment from 'react-moment';
import Notification from './Notification';
import {Link} from 'react-router-dom';
import {apiCall} from './services/apiCall';
import { makeStyles } from '@material-ui/core/styles';
import {Grid ,InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from '@material-ui/core';
import ConfirmDialog from './ConfirmDialog';
import Loader from './Loader';

const useStyles = makeStyles({
    loader:{
      width:'100%'
    },
    table: {
      minWidth: 650,
      margin:'20px'
    },
    borderSerach:{
      margin:'10px',
      border:'2px solid #232323',
      borderRadius:'20px',
      width:'80%'
  },
  boxtable:{
    width:'100%'
  }
  
   
  });

export default function UserTable(){
    const [loading ,setLoading] = useState(true);
    const [data , setDtata]= useState(null);
    const [notify , setNotify] = useState({isOpen:false , message:"" , type:""});
    const [confirmDialog , setConfirmDialog]=useState({isOpen:false , title:'',subTitle:''});
    const [searchTerm , setSerachTerm]=useState('');
    const classes = useStyles();
    let sno=0;

   function deleteUser(id){
    setConfirmDialog({
      isOpen:true , 
      title:"Are You want to delete it?",
     subTitle:"you can't be able to Undo it!",
     onConfirm:()=>{removeUser(id)}
     });
   }

    function removeUser(id){
        setConfirmDialog({
          ...confirmDialog,
          isOpen:false
        });
        apiCall('delete',`https://ylrwt.sse.codesandbox.io/room/${id}`)
        setNotify({
          isOpen:true,
          message:'Deleted Successfully!',
          type:'error'
        })
    }

    useEffect(()=>{
      apiCall('get','https://ylrwt.sse.codesandbox.io/room/all')
      .then(res=>{
        setDtata(res);
        setLoading(false);
      });
    },[data]);


   /*setConfirmDialog({
                                                       isOpen:true , 
                                                       title:"Are You want to delete it?",
                                                      subTitle:"you can't be able to Undo it!",
                                                      onConfirm:()=>{removeUser.bind(this , row._id)}
                                                    }) */


  return(
    <div style={{ background: '#FFFFFF' , width:'1200px'}} className={classes.boxtable}>
      <Grid container>
           <Grid item sm={4}>
           <InputBase
            className={classes.borderSerach}
            placeholder="Enter Bet Amount"
            startAdornment={<SearchIcon fontSize="small"/>}
            onChange={event =>{setSerachTerm(event.target.value)}}
            />
           </Grid>
      </Grid>
    <TableContainer component={Paper}>
      {loading ? <div className={{margin:'50px'}}><Loader/></div>:
    <Table  className={classes.table} size="small" aria-label="a dense table">
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
      {data.filter(data =>{
          return data.bet.toString().indexOf(searchTerm.toString()) !== -1;
      }).map((row) => (
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
            <Link style={{ textDecoration:'none'}} to={`/admin/edit/${row._id}`}>
                <Button variant="contained" color="primary">
                      Edit
                </Button> 
            </Link>
            </TableCell>
            <TableCell ><Button variant="contained" onClick = {deleteUser.bind(this , row._id)} 
                                color="secondary">Delete</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
   }
  </TableContainer>
  <Notification
      notify={notify}
      setNotify={setNotify}
    />
    <ConfirmDialog
      confirmDialog={confirmDialog}
      setConfirmDialog={setConfirmDialog}
    />
  </div>
  )
}


