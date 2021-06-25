import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { services } from '../services';
import LivenessIcon from './livenessIcon';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

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
              <TableCell align="center">
                <LivenessIcon livenessURL={service.sandboxLivenessURL}/>
              </TableCell>
              <TableCell align="center">
                {
                  service.owningTeam ?
                    <a href={service.slackChannel}>{service.owningTeam}</a> :
                    '?'
                }
              </TableCell>
              <TableCell align="center">
                <a href={service.githubURL}>{service.githubURL}</a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
