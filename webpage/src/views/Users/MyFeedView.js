import { Container, Typography, FormGroup, FormControlLabel, Checkbox, Grid } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import MyFeedController from '../../controllers/Users/MyFeedController';
import NewsFeedView from './NewsFeedView';

const MyFeedView = () => {
  const categories = ['Health', 'Business', 'Entertainment', 'General', 'Science', 'Sports', 'Technology'];
  const { userData, generateNewsLinks, toggleCategory } = MyFeedController();
  const newsLinks = generateNewsLinks();


  return (
    <Container>
      <Typography sx={{ marginTop: '40px', fontWeight: 'bold', fontSize: '40px', variant: 'h1', fontFamily: 'Segoe UI' }}>
        {userData && userData.email} Feed
      </Typography>
      <Typography sx={{ fontWeight: 'bold', textAlign: 'left', fontSize: '25px', fontFamily: 'Segoe UI' }}>
        Categories:
        <FormGroup>
          <Grid container spacing={1}>
            {categories.map((category) => (
              <Grid item key={category} xs={12} sm={6} md={3} lg={1.7}>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      checked={userData?.prefs?.[category] || false}
                      onChange={() => toggleCategory(category)}
                    />
                  }
                  label={category}
                />
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </Typography>
      {newsLinks.map((Link) => (
        <NewsFeedView url={Link.link} category={Link.category} />
      ))}
    </Container>
  );
};

export default MyFeedView;
