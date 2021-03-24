import React from 'react'
import CategoriesSide from './CategoresSide';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import dsb from './pictures/dsb.jpg';
import dsp from './pictures/dsp.jfif';
import dsa from './pictures/dsa.jfif';
import dss from './pictures/dss.jpg';
import dsm from './pictures/dsm.webp';
import dsr from './pictures/dsr.png';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

function Data() {
    const classes = useStyles();
    return (
        <>
         <div className="Datacont">
         <Card className={classes.root} style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia style={{height:"180px"}}
          className={classes.media}
         image={dsb}
          title="Contemplative Reptile"
        />
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
            Data Science Beginner's guide
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
           Data Science full course for Beginners
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
          image={dsp}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
           Data Science in python
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
           Data Science in Python full Course
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>

    <Card className={classes.root}  style={{width:"350px", boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia style={{height:"180px"}}
          className={classes.media}
          image={dsr}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
            Data Science in R
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
          Data Science in R full Course
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>

    <Card className={classes.root}  style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia  style={{height:"180px"}}
          className={classes.media}
          image={dss}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
            Statistics for Data Science
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
          Statistics for Data Science full Coarse
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>

    <Card className={classes.root}  style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia  style={{height:"180px"}}
          className={classes.media}
          image={dsm}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
            Data Science with Machine Learning
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
          Data Science with Machine Learning full Corse
          </Typography>
        </CardContent>
      </CardActionArea>
  
    </Card>
    <Card className={classes.root}  style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia  style={{height:"180px"}}
          className={classes.media}
          image={dsa}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
           Data Science Advance
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
          Data Science Advance full Course
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
           </div>
        <CategoriesSide />
          
        </>
    )
}

export default Data
