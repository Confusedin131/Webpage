import React from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LocalNewsController from '../controllers/LocalNewsController';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const images = [

    {
        label: 'Williamston City Hall - (new.williamston-mi.us, Williamston Official Website) ',
        imgPath:
            'http://new.williamston-mi.us/Portals/47/pics/City%20Hall%20Sign.JPG'
    },
    {
        label: 'Downtown Williamston - (www.williamstontheatre.org, Williamston Theatre Website)',
        imgPath: 'https://www.williamstontheatre.org/sites/default/files/2021-10/williamstondowntown.jpg',
    },
    {
        label: 'Historic District - (wikimedia, kennethaw88)',
        imgPath:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Downtown_Williamston.jpg/1600px-Downtown_Williamston.jpg'
    },
    {
        label: 'Memorial Parade - (www.gowcs.net, Williamston Community Schools Website)',
        imgPath:
            'https://www.gowcs.net/cms/lib/MI02209034/Centricity/ModuleInstance/4890/large/IMG_4327.JPG?rnd=0.999423523433238'
    },
];

const LocalNews = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
    };

    return (
        <LocalNewsController>
            {(posts, archposts, announcement) => (
                <div sx={{ fontFamily: 'Segoe UI' }}>

                    <div >
                        <Paper
                            elevation={3}
                            sx={{
                                fontSize: '20px',
                                position: 'relative',
                                backgroundColor: 'grey.800',
                                color: '#fff',
                                mb: 3,
                                height: '500px',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundImage: `url(${images[activeStep].imgPath})`,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                            }}
                        >
                        </Paper>
                        <Typography sx={{ fontFamily: 'inherit', fontSize: '20px' }}>
                            {images[activeStep].label}
                        </Typography>
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            nextButton={
                                <Button sx={{ fontSize: '18px', fontFamily: 'inherit' }} size="medium" onClick={handleNext}>
                                    Next
                                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                </Button>
                            }
                            backButton={
                                <Button sx={{ fontSize: '18px', fontFamily: 'inherit' }} size="medium" onClick={handleBack}>
                                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                    Back
                                </Button>
                            }
                        >
                        </MobileStepper>

                        <div>
                            <Grid container spacing={2} sx={{ textAlign: 'left', padding: '40px' }}>
                                <Grid item xs={12} md={8}>

                                    <Typography sx={{ fontFamily: 'Segoe UI' }} variant="h4" gutterBottom>
                                        Williamston, Michigan
                                        <br />
                                        <Divider sx={{ marginTop: '16px', bgcolor: 'black', borderBottomWidth: 1 }}>
                                        </Divider>
                                    </Typography>
                                    <br />
                                    <Grid >
                                        {posts.map((post, index) => (
                                            <div key={post.id}>
                                                <Typography variant='h4' sx={{ marginTop: index === 0 ? '0px' : '25px', fontFamily: 'Segoe UI', fontWeight: 'bold' }}>

                                                    {post.title}
                                                </Typography>
                                                <Typography variant='subtitle1' sx={{ fontWeight: 'medium', marginTop: '10px', fontFamily: 'Segoe UI' }}>
                                                    {post.date} by {post.author}
                                                </Typography>
                                                <Typography variant='body1' sx={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word', marginTop: '10px', textIndent: '45px', fontFamily: 'Segoe UI' }}>
                                                    {post.bodyText.replace(/__NEWLINE__/g, '\n\n         ').replace(/__NEWLINE__\s*$/, '')}
                                                </Typography>
                                            </div>

                                        ))}
                                    </Grid>
                                    <Grid>
                                        <Typography variant='h4' sx={{ marginTop: '30px', fontFamily: 'Segoe UI', fontWeight: 'bold' }}
                                        >
                                            Article Title 1
                                            <Typography variant='subtitle1' sx={{ fontFamily: 'Segoe UI' }}>
                                                10/7/23 by John Doe

                                                <Typography variant='body1' sx={{ marginTop: '10px', textIndent: '20px', fontFamily: 'Segoe UI' }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </Typography>
                                                <Typography variant='body1' sx={{ marginTop: '10px', textIndent: '20px', fontFamily: 'Segoe UI' }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </Typography>
                                                <Typography variant='body1' sx={{ marginTop: '10px', textIndent: '20px', fontFamily: 'Segoe UI' }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </Typography>
                                            </Typography>
                                        </Typography>

                                        <br />
                                        <Typography variant='h4' sx={{ marginTop: '20px', fontFamily: 'Segoe UI', fontWeight: 'bold' }}
                                        >
                                            Article Title 2
                                            <Typography variant='subtitle1' sx={{ fontFamily: 'Segoe UI' }}>
                                                10/7/23 by John Doe

                                                <Typography variant='body1' sx={{ marginTop: '10px', textIndent: '20px', fontFamily: 'Segoe UI' }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </Typography>
                                                <Typography variant='body1' sx={{ marginTop: '10px', textIndent: '20px', fontFamily: 'Segoe UI' }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </Typography>
                                                <Typography variant='body1' sx={{ marginTop: '10px', textIndent: '20px', fontFamily: 'Segoe UI' }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                </Typography>
                                            </Typography>
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} md={4} sx={{ textAlign: 'left' }}>
                                    <Paper elevation={2} sx={{ p: 2, bgcolor: 'grey.200' }}>
                                        <Typography sx={{ fontFamily: 'inherit' }} variant="h6" gutterBottom >
                                            Public Announcements
                                        </Typography>
                                        <Typography sx={{ fontFamily: 'inherit' }} variant="subtitle1">{announcement.date}</Typography>
                                        <Typography sx={{ marginTop: '15px', fontFamily: 'inherit' }} variant="body1">
                                            {announcement.announceText && announcement.announceText.split('__NEWLINE__').map((paragraph, index) => (
                                                <React.Fragment key={index}>
                                                    {index > 0 && <br />} {/* Add <br> except for the first paragraph */}
                                                    {paragraph}
                                                </React.Fragment>
                                            ))}
                                        </Typography>
                                    </Paper>
                                    <Typography variant='h5' sx={{ fontWeight: 'bold', fontFamily: 'inherit', marginTop: '30px' }}>
                                        Extra Information
                                        <Typography variant='body1' sx={{ fontFamily: 'inherit', marginTop: '10px' }}>
                                            You can put Links, etc.
                                            <List>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <RadioButtonCheckedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Item 1" />
                                                </ListItem><ListItem>
                                                    <ListItemIcon>
                                                        <RadioButtonCheckedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Item 2" />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <RadioButtonCheckedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Item 3" />
                                                </ListItem>
                                            </List>
                                        </Typography>
                                    </Typography>
                                </Grid>
                            </Grid>

                        </div>
                    </div>
                </div>
            )}
        </LocalNewsController>

    );
};

export default LocalNews;
