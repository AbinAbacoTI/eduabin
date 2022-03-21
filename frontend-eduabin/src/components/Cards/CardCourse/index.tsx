import { CardProps } from 'interfaces/components.interface'
import { FC } from 'react'
import { Box, Card, CardContent, CardMedia, Divider, Grid, Rating, Typography } from '@mui/material'
import { ChatOutlined, PersonOutline } from '@mui/icons-material'
import Link from 'components/ui/Link'

const CardCourse: FC<CardProps> = () => {
  const stylesCard = {
    card: {
      marginTop: '14px',
      marginBottom: '14px',
      width: 295,
      border: '2px',
      '&:hover': {
        boxShadow: '0px 0px 30px 0px rgb(32 32 32 / 15%)'
      }
    }
  }
  return (
    <Card sx={stylesCard.card}>
      <CardMedia
        component="img"
        height="192"
        image="/images/bg202201.jpg"
        alt="green iguana"
      />
      <CardContent sx={{ '&:last-child': { paddingBottom: '9px' } }}>
        <Typography
          textTransform='uppercase'
          fontSize={15}
          color='#7e7e7e'>JON DOE</Typography>
        <Typography
          fontSize='18px'
          fontWeight={400}
          lineHeight='26px'
        >
          Sales Training Practical Sales Techniques
        </Typography>
        <Box sx={{ display: 'flex' }} mb={2}>
          <Rating
            name="simple-controlled"
            value={3}
          />
          <Typography>
            (3)
          </Typography>
        </Box>
        <Divider />
        <Grid container mt={1}>
          <Grid item container xs={6} columnSpacing={1}>
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
              <PersonOutline fontSize='small' />
              <Typography ml={0.5}>
                21
              </Typography>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
              <ChatOutlined fontSize='small' />
              <Typography ml={0.5}>
                21
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Typography
              fontSize='18px'
              fontWeight={700}
              color='#c75533'
              align='right'
            >
              Free
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardCourse
