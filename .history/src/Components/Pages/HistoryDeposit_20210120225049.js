import React,{useState ,useEffect} from 'react';
import MaterialTable from 'material-table';
import {apiCall} from '../services/apiCall';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    fixedHeight: {
      height: 200,
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    typography:{
      marginLeft:'30px',
      fontWeight:'600'
      
    }
  }));
export default function HistoryDeposit(props){
    const [loading , setLoading] = useState(true);
    const [data , setData] = useState([]);
    const [column , setColumn] = useState([]);

    useEffect(()=>{
      depositHistory();
    },[])

    function makeCol(keys){
        let dataa =keys.filter(data => data != "_id" && data != "__v");
        let bigContainer =[];
        let dataw;
        for(var i=0;i<dataa.length;i++){
            if(dataa[i] == 'time'){
              dataw = {
                title:dataa[i],
                field:dataa[i],
                render:rowData =><span>{timeFormat(rowData.time)}</span>
             }
            }else{
                 dataw = {
                    title:dataa[i],
                    field:dataa[i]
                }
            }
            
          bigContainer.push(dataw);
        }
        return bigContainer;
    }
     
    function timeFormat(timestamp){
        return moment(timestamp).format("DD-MM-YYYY h:mm:ss");
    }


    async function depositHistory(){
        const result = await apiCall('get','https://ylrwt.sse.codesandbox.io/transaction/depositHistory'); 
        setData(result);
        const keys = Object.keys(result[0]);
        const column1 =await makeCol(keys);
        setColumn(column1);
        setLoading(false);
    }

    const classes = useStyles();

    const {title} = props;
    return(
        <div>
            <Typography component="h6" variant="h5"  className={classes.typography} gutterBottom>
          BalanceSheet
    </Typography>
            {loading?<div>Loding...</div>:
            <MaterialTable
             title={title}
             data={data}
             columns={column}
             options={{
                 filtering:true,
                 exportButton:true
             }}
          />
            }
        </div>
    )
}


