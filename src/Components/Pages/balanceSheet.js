import React,{useState ,useEffect} from 'react';
import Deposits from '../Cards/Deposits';
import Cashout from '../Cards/Cashout';
import Netbalance from '../Cards/Netbalance';
import Rake from '../Cards/Rake';
import Refund from '../Cards/Refund';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import {apiCall} from '../services/apiCall';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(1),
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
export default function BalanceSheet(props) {
  const [totalDeposit,setTotalDeposit ] = useState(0);
  const [totalRake ,setTotalRake] = useState(0);
  const [totalWithDrawl ,setTotalWithDrawl] = useState(0);
  const [totalRefund ,setTotalRefund] = useState(0);

  useEffect(()=>{
    async function getBalancesheet(){
     const result = await apiCall('get','https://ylrwt.sse.codesandbox.io/transaction/balanceSheet');
     setTotalDeposit(result[0].totalDepositChips);
     setTotalRake(result[0].totalRakeDeducted);
     setTotalWithDrawl(result[0].totalWithdrawlChips);
     setTotalRefund(result[0].totalRefundChips);
    }
    getBalancesheet();
});

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div>
       <Typography component="h6" variant="h5"  className={classes.typography} gutterBottom>
          BalanceSheet
    </Typography>
      <Container maxWidth="lg" className={classes.container}>
       
        <Grid container spacing={3}>

          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Deposits totalDeposit={totalDeposit} />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Rake totalRake={totalRake} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Cashout totalWithDrawl={totalWithDrawl} />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Refund totalRefund={totalRefund} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Netbalance />
            </Paper>
          </Grid>


        </Grid>

      </Container>
    </div>
  )
}