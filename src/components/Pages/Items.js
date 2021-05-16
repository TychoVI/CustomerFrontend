import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: '25px;',
    marginBottom: '20px;',
    textAlign: 'center;',
    justifyContent: 'space-between;',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    marginTop: '15px;',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}))

export default function RecipeReviewCard(props) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className={classes.root} key={props.data.id}>
      <CardHeader title={props.data.name} />
      <hr />
      <CardMedia className={classes.media} image={props.data.image} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.data.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="h5" component="h5" color="textSecondary">
          <span>{props.data.price}€</span>
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <Fab size="small" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          <Typography paragraph>{props.data.ingredients.length}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
