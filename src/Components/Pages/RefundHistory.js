import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { apiCall } from '../services/apiCall';
import moment from 'moment';
import Loader from '../Loader';
import lodash from 'lodash';


export default function RefundHistory(props) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [column, setColumn] = useState([]);

    useEffect(() => {
        refundHistory();
    }, [])
    function timeFormat(timestamp) {
        return moment(timestamp).format("DD-MM-YYYY h:mm:ss");
    }

    function makeCol(keys) {
        let dataa = keys.filter(data => data !== "Id" && data !== "V" && data !== "Room Id");
        let bigContainer = [];
        let dataw;
        for (var i = 0; i < dataa.length; i++) {
            if (dataa[i] === 'Time') {
                console.log(data[i]);
                dataw = {
                    title: dataa[i],
                    field: dataa[i],
                    render: rowData => <span>{timeFormat(rowData.time)}</span>
                }
            } else {
                dataw = {
                    title: dataa[i],
                    field: lodash.camelCase(dataa[i])
                }
            }

            bigContainer.push(dataw);
        }
        return bigContainer;
    }

    const addCount = (result) => {
        let count = 1;
        for (let i = 0; i < result.length; i++) {
            result[i].sno = count++;
        }
    }

    const swapPositions = (theArray, indexA, indexB) => {
        var temp = theArray[indexA];
        theArray[indexA] = theArray[indexB];
        theArray[indexB] = temp;
    }




    async function refundHistory() {
        const result = await apiCall('get', 'https://ylrwt.sse.codesandbox.io/transaction/refundHistory');
        addCount(result);
        setData(result);
        const keys = Object.keys(result[0]);
        const key = keys.map(e => {
            return lodash.startCase(e);
        })
        const column1 = await makeCol(key);
        swapPositions(column1, 0, 5);
        swapPositions(column1, 1, 4);
        swapPositions(column1, 2, 4);
        swapPositions(column1, 4, 5);

        setColumn(column1);
        setLoading(false);
    }


    const { title } = props;
    return (
        <div>
            {loading ? <div style={{ width: '1200px' }}><Loader /></div> :
                <MaterialTable
                    title={title}
                    data={data}
                    columns={column}
                    options={{
                        headerStyle: {
                            backgroundColor: "#57606f",
                            color: "white",
                            fontWeight: 600,
                            fontSize: "1rem",
                            textAlign: "center",
                            lineHeight: "1rem"
                        },
                        filtering: true,
                        exportButton: true,
                        rowStyle: {
                            backgroundColor: "#eee"
                        }
                    }}
                />
            }
        </div>
    )
}



