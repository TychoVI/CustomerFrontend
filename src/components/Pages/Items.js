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
import { ItemContext } from '../../App'
import { useContext } from 'react'

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

export default function Products(props) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  // eslint-disable-next-line
  const [items, setItems] = useContext(ItemContext)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleAddClick = () => {
    setItems((prevItem) => [...prevItem, props])
  }

  return (
    <Card className={classes.root}>
      <CardHeader title={props.data.name} />

      <CardMedia className={classes.media} image={props.data.image} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.data.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="h5" component="h5" color="secondary">
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
        <Fab
          size="small"
          color="primary"
          aria-label="add"
          onClick={handleAddClick}
        >
          <AddIcon />
        </Fab>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          <ul>
            {React.Children.toArray(
              props.data.ingredients.map((ingredient) => (
                <li>{ingredient.name}</li>
              )),
            )}
          </ul>
        </CardContent>
      </Collapse>
    </Card>
  )
}
