import React from 'react'
import CategoriesSide from './CategoresSide'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mlb from './pictures/mlb.jfif';
import mlp from './pictures/mlp.jfif';
import mlds from './pictures/mlds.jfif';
import mlai from './pictures/mlai.jpg';
import mlth from './pictures/mlth.jpg';
import mlr from './pictures/mlr.jfif';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

function Machine() {
    const classes = useStyles();
    return (
        <>
        <div className="Machinecont"> 
        <Card className={classes.root} style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia style={{height:"180px"}}
          className={classes.media}
         image={mlb}
          title="Contemplative Reptile"
        />
      
        <CardContent>
          <Typography gutterBottom variant="h6" component="p" style={{fontWeight:"Bold"}}>
            Machine Learning Beginner's Guide
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"small"}}>
          Machine Learning Beginner's Guide full course for Beginners
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>

    <Card className={classes.root} style={{width:"350px" ,boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia style={{height:"180px"}}
          className={classes.media}
          image={mlai}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="p" style={{fontWeight:"Bold"}}>
           Machine Learning for Artificial Intelligence
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"small"}}>
          Machine Learning for Artificial Intelligence full Course
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>

    <Card className={classes.root}  style={{width:"350px", boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia style={{height:"180px"}}
          className={classes.media}
          image={mlds}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="p" style={{fontWeight:"Bold"}}>
          Machine Learning for Data Science
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"small"}}>
          Machine Learning for Data Science full Course
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>

    <Card className={classes.root}  style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia  style={{height:"180px"}}
          className={classes.media}
          image={mlp}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="p" style={{fontWeight:"Bold"}}>
            Python Regression Analysis
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"small"}}>
          Python Regression Analysis full Coarse
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>

    <Card className={classes.root}  style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia  style={{height:"180px"}}
          className={classes.media}
          image={mlr}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="p" style={{fontWeight:"Bold"}}>
            Clusturing and Classifications in Machine Learning With R
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"small"}}>
          Clusturing and Classifications in Machine Learning With R full Corse
          </Typography>
        </CardContent>
      </CardActionArea>
  
    </Card>
    <Card className={classes.root}  style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia  style={{height:"180px"}}
          className={classes.media}
          image={mlth}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="p" style={{fontWeight:"Bold"}}>
          Clusturing and Classifications in Machine Learning With Python
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"small"}}>
          Clusturing and Classifications in Machine Learning With Python full Course
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
            </div>
        <CategoriesSide />
           
        </>
    )
}

export default Machine
