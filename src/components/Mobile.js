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
import jsr from './pictures/jsr.jpg';
import rn from './pictures/rn.jpg';
import flutter from './pictures/flutter.png';
import dart from './pictures/dart.png';
import android from './pictures/and.png';
import ios from './pictures/ios.png';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

function Mobile() {
    const classes = useStyles();
    return (
        <>
        <div className="Mobcont">  <Card className={classes.root} style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia style={{height:"220px"}}
          className={classes.media}
         image={jsr}
          title="Contemplative Reptile"
        />
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
            Javascript and React js
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
          Javascript and React js full course for Beginners
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
          image={rn}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
           React Native 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
          React Native  full Course
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>

    <Card className={classes.root}  style={{width:"350px", boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia style={{height:"220px"}}
          className={classes.media}
          image={flutter}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
            Flutter
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
          Flutter full Course
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>

    <Card className={classes.root}  style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia  style={{height:"220px"}}
          className={classes.media}
          image={dart}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
            Dart
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
            Dart full Coarse
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>

    <Card className={classes.root}  style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia  style={{height:"220px"}}
          className={classes.media}
          image={android}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
            Andriod Development
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
          Andriod Development full Corse
          </Typography>
        </CardContent>
      </CardActionArea>
  
    </Card>
    <Card className={classes.root}  style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia  style={{height:"220px"}}
          className={classes.media}
          image={ios}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
           IOS Development
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
          IOS Development full Course
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
   
            </div>
        <CategoriesSide />
          
        </>
    )
}

export default Mobile
