import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Nama', 'Abi Daffa Arila'),
  createData('Tempat Tanggal Lahit', 'Solok, 16 Juni 199'),
  createData('Pendidikan 2017 - 2020', 'Universitas Gadjah Mada'),
  createData('Pendidikan 2014 - 2017', 'SMA N 1 Lahat'),
  createData('Pendidikan 2011 - 2014', 'SMP N 5 Lahat'),
  createData('Pendidikan 2005 - 2011', 'SD N 32 Lahat'),
];

function Profil(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell><h1>Profile </h1></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

Profil.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profil);