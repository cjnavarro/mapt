import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './LogoCard.css';

const LogoCard = ({title, description, image, link}) => (
  <Card className="logo-card ">
    <CardActionArea>
        <CardMedia className="logo-card-image"
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
    </CardActionArea>
    <CardActions>
      <Button
        size="small"
        color="primary"
        target="_blank" href={link}>
        Learn More
      </Button>
    </CardActions>
  </Card>
);

export default LogoCard;
