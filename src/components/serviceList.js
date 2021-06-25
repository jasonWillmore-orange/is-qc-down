import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { services } from '../services';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const aliveCircleIcon = <CheckCircleIcon style={{ fill: '#00FF00' }}/>;
const deadCircleIcon = <CheckCircleIcon style={{ fill: '#55555' }}/>;

// TODO: do this in a useEffect
// we'll want this data to cause lazy loading of rows rather than waiting
const isServiceAlive = async (serviceURL)  => {
  fetch(serviceURL)
    .then((result) => {
      console.log(result)
      if (result.ok) {
        console.log('succeeded')
        return true;
      }
      else {
        console.log('failed')
        console.log(result.status);
        return false;
      }
    })
    .catch((error) => {
      console.log('errored')
      console.log({error})
      return false;
    })
};

export default function ServiceList() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Service Name</TableCell>
            <TableCell align="center">Environment</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Owning Team</TableCell>
            <TableCell align="center">Github repo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.name}>
              {/* <TableCell component="th" scope="row">{service.name}</TableCell> */}
              <TableCell align="center">{service.name}</TableCell>
              <TableCell align="center">Sandbox</TableCell>
              <TableCell align="center">{isServiceAlive(service.sandboxLivenessURL) ? aliveCircleIcon : deadCircleIcon }</TableCell>
              <TableCell align="center">
                {<a href={service.slackChannel}>{service.owningTeam}</a>}
              </TableCell>
              <TableCell align="center">
                {<a href={service.githubURL}>{service.githubURL}</a>}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
