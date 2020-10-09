import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinearProgress from '@material-ui/core/LinearProgress';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  
const useStyles = makeStyles({
    table: {
      minWidth: 550,
    },
    category: {
        width: '20%',
      },
    ranking: {
        width: '80%',
    }
  });

export default function SkillDialog(props) {

  const classes = useStyles(); 

  const { onClose, selectedValue, open, skill } = props;
  const { skillName, categories } = skill;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle className="skillDialog" id="simple-dialog-title">{skillName}</DialogTitle>
      <Table className={classes.table} aria-label="simple table">
          <TableHead>
              <StyledTableRow>
                  <StyledTableCell  className={classes.category}>Category</StyledTableCell>
                  <StyledTableCell className={classes.ranking}>Skill Percentile</StyledTableCell>
              </StyledTableRow>
          </TableHead>
          <TableBody>
              {categories.map((category,i)=> {return <StyledTableRow key={i}>
                  <StyledTableCell className={classes.category}>{category.name}</StyledTableCell>
                  <StyledTableCell className={classes.ranking}><LinearProgress variant="determinate" value={category.skillRanking * 10} /></StyledTableCell>
              </StyledTableRow>
              })}
          </TableBody>
      </Table>
    </Dialog>
  );
}
