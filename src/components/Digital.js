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
import dmb from './pictures/dmb.jfif';
import mdm from './pictures/mdm.jfif';
import ga from './pictures/ga.png';
import dma from './pictures/dma.jpg';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

function Digital() {
    const classes = useStyles();
    return (
        <>
         <div className="Digitalcont">
         <Card className={classes.root} style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia style={{height:"220px"}}
          className={classes.media}
         image={dmb}
          title="Contemplative Reptile"
        />
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
            Digtal Marketing For Beginners
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
          Digtal Marketing For Beginners full course for Beginners
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
          image={dma}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
           Social Media Marketing Agency
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
          Social Media Marketing Agency full Course
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>

    <Card className={classes.root}  style={{width:"350px", boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia style={{height:"220px"}}
          className={classes.media}
          image={ga}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
            Ultimate Google Analytics
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
          Ultimate Google Analytics full Course
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>

    <Card className={classes.root}  style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
      <CardActionArea>
        <CardMedia  style={{height:"220px"}}
          className={classes.media}
          image={mdm}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:"Bold"}}>
            Mega Digital Marketing
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"Black" ,fontSize:"large"}}>
          Mega Digital Marketing full Coarse
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>

    {/* <Card className={classes.root}  style={{width:"350px",boxShadow:"4px 4px 4px rgb(110, 107, 107)"}}>
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
     
    </Card> */}
            </div>
        <CategoriesSide />
           
        </>
    )
}

export default Digital
