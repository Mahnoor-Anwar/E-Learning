import React from 'react'
import CategoriesSide from './CategoresSide'
import './Categories.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import aib from './pictures/Aib.jpg';
import aip from './pictures/aip.jpg';
import tf from './pictures/tf.png';
import aifour from './pictures/aifour.png';
import aifive from './pictures/aifive.jpg';
import aisix from './pictures/aisix.jfif';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

function Artificial() {
    const classes = useStyles();
    return (
       <>
       <div className="Artificialcont">
       <Card className={classes.root} style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia style={{height:"180px"}}
          className={classes.media}
         image={aib}
          title="Contemplative Reptile"
        />
      
        <CardContent>
          <Typography gutterBottom variant="h6" component="p" style={{fontWeight:"bold"}}>
            Artificial nteligence Beginner's guide
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
            AI full Beginner's guide
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
        <CardMedia style={{height:"200px"}}
          className={classes.media}
          image={aip}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="p" style={{fontWeight:"Bold"}}>
           Artficial Intelligence in Python
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
           AI python full Course
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>

    <Card className={classes.root}  style={{width:"350px", boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia style={{height:"180px"}}
          className={classes.media}
          image={tf}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="p" style={{fontWeight:"Bold"}}>
            Artificial Intelligence with Tensor Flow
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
           AI tensor Flow full Course
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>

    <Card className={classes.root}  style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia  style={{height:"180px"}}
          className={classes.media}
          image={aifour}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="p" style={{fontWeight:"Bold"}}>
            PyTorch Deep learning and Artificial Intelligence
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
            PyTorch DL and AI full Course
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>

    <Card className={classes.root}  style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia  style={{height:"180"}}
          className={classes.media}
          image={aifive}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="p" style={{fontWeight:"Bold"}}>
            Machine Learning
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
           ML beginners to advance full Course
          </Typography>
        </CardContent>
      </CardActionArea>
  
    </Card>
    <Card className={classes.root}  style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia  style={{height:"180"}}
          className={classes.media}
          image={aisix}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="p" style={{fontWeight:"Bold"}}>
           Artificial Intelligence in Health Care
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
           AI in Health Care full Course
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
       </div>
       <CategoriesSide />
       
       </>
    )
}

export default Artificial
