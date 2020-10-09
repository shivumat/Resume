import React from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import './Skill.css'
import SkillDialog from './skillDialog/SkillDialog';

export default function Skill(props) {
    const [open, setOpen] = React.useState(false);
    const { skill } = props;
    const { skillName, categories } = skill;

    function openDialog() {
        setOpen(true);
    }

    function closeDialog() {
        setOpen(false);
    }

    function getOverallRanking() {
        var totalScore = 0
        categories.map((category) => totalScore += category.skillRanking);
        return totalScore/(categories.length*2);
    }

  return (
      <React.Fragment>
        <Grid item sm={6} md={4} lg={4} xl={4}>
            <Card className="skillCard">
                <CardActionArea className="skillCard" onClick={openDialog}>
                    <CardContent className="skillCard">
                        <Typography component="legend">{skillName}</Typography>
                        <Rating
                        name="customized-10"
                        defaultValue={getOverallRanking()}
                        precision={0.1}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                        disabled={true}
                        />
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        <SkillDialog open={open} onClose={closeDialog} skill={skill}/>
    </React.Fragment>
  );
}