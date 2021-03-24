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
import html from './pictures/html.png';
import css from './pictures/css.png';
import js from'./pictures/js.png';
import react from'./pictures/react.webp';
import mongodb from'./pictures/mongodb.png';
import php from'./pictures/php.png';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  function Web() {
  const classes = useStyles();

    return (
        <>
         <div className="Webcont"> 
         <Card className={classes.root} style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia style={{height:"220px"}}
          className={classes.media}
         image={html}
          title="Contemplative Reptile"
        />
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
            HTML
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
            HTML full course for Beginners
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
          image={css}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
           CSS
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
           CSS full Course
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>

    <Card className={classes.root}  style={{width:"350px", boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia style={{height:"220px"}}
          className={classes.media}
          image={js}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
            Javascript
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
           Javascript full Course
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>

    <Card className={classes.root}  style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia  style={{height:"220px"}}
          className={classes.media}
          image={react}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
            React
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
            React full Coarse
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>

    <Card className={classes.root}  style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia  style={{height:"220px"}}
          className={classes.media}
          image={mongodb}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
            MongoDb
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
            MongoDb full Corse
          </Typography>
        </CardContent>
      </CardActionArea>
  
    </Card>
    <Card className={classes.root}  style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia  style={{height:"220px"}}
          className={classes.media}
          image={php}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
           PHP
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
            PHP full Course
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
            </div>
        <CategoriesSide />

        </>
    )
    }

export default Web
