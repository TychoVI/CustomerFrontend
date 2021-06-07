import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
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
import Icon from '@material-ui/core/Icon'

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

function CartItem(props) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  return (
    <Card className={classes.root} key={props.data.data.id}>
      <CardHeader title={props.data.data.name} />
      <CardMedia className={classes.media} image={props.data.data.image} />
      <CardActions disableSpacing>
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
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Modify your item</Typography>
          <div>
            {props.data.data.ingredients.map((ingredient, index) =>
              index === 0 ? (
                <FormControlLabel
                  disabled
                  control={<Checkbox checked name="checked" />}
                  label={ingredient.name}
                />
              ) : (
                <FormControlLabel
                  control={<Checkbox name="checked" />}
                  label={ingredient.name}
                />
              ),
            )}
          </div>
        </CardContent>
      </Collapse>
      <p>1</p>
      <Icon fontSize="large" color="primary">
        add_circle
      </Icon>
      <Icon fontSize="large" color="primary">
        remove_circle
      </Icon>
    </Card>
  )
}

export default CartItem
