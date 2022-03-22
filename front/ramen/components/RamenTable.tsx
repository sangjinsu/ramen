import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BarCustom from './BarCustom';
import { DataProps } from './Types';

function createData(
  name: string,
  ingredient: number,
  ingredient_recommend: number,
  ingredient_average: number,
) {
  return {
    name,
    ingredient,
    ingredient_recommend,
    ingredient_average,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const [testData, setData] = React.useState<DataProps>({testData:[0, 0, 0]});
  React.useEffect( ()=> {
    setData({testData:[row.ingredient, row.ingredient_recommend, row.ingredient_average]})
  },[])

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.ingredient}</TableCell>
        <TableCell align="right">{row.ingredient_recommend}</TableCell>
        <TableCell align="right">{row.ingredient_average}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                막대 Chart로 비교
              </Typography>
              {row.ingredient && <BarCustom testData={{testData:[row.ingredient, row.ingredient_recommend, row.ingredient_average]}} />}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export default function RamenTable({testData}: {testData:DataProps}) {
  const rows = [
    createData('에너지 (Kcal)', testData.testData[0], 330, 443.26),
    createData('탄수화물(g)', testData.testData[1], 330, 68.05),
    createData('단백질(g)', testData.testData[2], 50, 8.32),
    createData('지방(g)', testData.testData[3], 0, 13.56),
    createData('당류(g)', testData.testData[4], 25, 4.72),
    createData('나트륨(mg)', testData.testData[5], 1500, 1467.95),
  ];
  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>성분</TableCell>
            <TableCell align="right">One</TableCell>
            <TableCell align="right">Recommend</TableCell>
            <TableCell align="right">Average</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
