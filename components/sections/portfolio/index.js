import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./portfolio.scss";

const useStyles = makeStyles({
  card: {
    maxWidth: "50%"
  },
  media: {
    height: 140
  }
});

export default () => {
  const classes = useStyles();
  return (
    <div className="slide" id="portfolio">
      <div className="slide-header">
        <h1>My Work</h1>
        <div className="underline" />
      </div>
      <h3>Projects that I'm currently working on/have worked on in the past</h3>
      <div className="slide-content">
        <div id="card-grid">
          <div className="card-group">
            <Card className="card">
              <div className="card-content" id="project1">
                <img
                  className="card-image"
                  src="/screenshots/cmbaconsulting.png"
                />
                <CardContent>
                  <div className="card-description">
                    <h2 className="card-title">
                      Chika Mba Consulting Inc (Freelance)
                    </h2>
                    {/* <p>Consulting website built with</p> */}
                    <Typography variant="body2" component="p">
                      React + Gatsby + Node
                    </Typography>
                    <div className="inside-buttons">
                      <IconButton
                        color="inherit"
                        onClick={() =>
                          window.open("https://cmbaconsulting.ca/", "_blank")
                        }
                      >
                        <FaExternalLinkAlt />
                      </IconButton>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
            <div className="outside-buttons">
              <IconButton
                color="inherit"
                onClick={() =>
                  window.open("https://cmbaconsulting.ca/", "_blank")
                }
              >
                <FaExternalLinkAlt />
              </IconButton>
            </div>
          </div>
          <div className="card-group">
            <Card className="card">
              <div className="card-content" id="atmdb">
                <img className="card-image" src="/screenshots/atmdb.png" />
                <CardContent>
                  <div className="card-description">
                    <h2 className="card-title">ATMDb - Popular Movies</h2>
                    {/* <p>Consulting website built with</p> */}
                    <Typography variant="body2" component="p">
                      React + Redux + Semantic UI
                    </Typography>
                    <div className="inside-buttons">
                      <IconButton
                        color="inherit"
                        onClick={() =>
                          window.open(
                            "https://alexteshome.github.io/ATMDb/",
                            "_blank"
                          )
                        }
                      >
                        <FaExternalLinkAlt />
                      </IconButton>
                      <IconButton
                        color="inherit"
                        onClick={() =>
                          window.open(
                            "https://github.com/alexteshome/ATMDb",
                            "_blank"
                          )
                        }
                      >
                        <FaGithub />
                      </IconButton>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
            <div className="outside-buttons">
              <IconButton
                color="inherit"
                onClick={() =>
                  window.open("https://alexteshome.github.io/ATMDb/", "_blank")
                }
              >
                <FaExternalLinkAlt />
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() =>
                  window.open("https://github.com/alexteshome/ATMDb", "_blank")
                }
              >
                <FaGithub />
              </IconButton>
            </div>{" "}
          </div>
          <div className="card-group">
            <Card className="card">
              <div className="card-content" id="atmdb">
                <img className="card-image" src="/screenshots/fantasyat.png" />
                <CardContent>
                  <div className="card-description">
                    <h2 className="card-title">
                      FantasyAT - Fantasy Basketball Team Storage
                    </h2>
                    {/* <p>Consulting website built with</p> */}
                    <Typography variant="body2" component="p">
                      React + Redux + Node + MongoDB
                    </Typography>
                    <div className="inside-buttons">
                      <IconButton
                        color="inherit"
                        onClick={() =>
                          window.open(
                            "https://fantasyat.herokuapp.com/",
                            "_blank"
                          )
                        }
                      >
                        <FaExternalLinkAlt />
                      </IconButton>
                      <IconButton
                        color="inherit"
                        onClick={() =>
                          window.open(
                            "https://github.com/alexteshome/FantasyBB",
                            "_blank"
                          )
                        }
                      >
                        <FaGithub />
                      </IconButton>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
            <div className="outside-buttons">
              <IconButton
                color="inherit"
                onClick={() =>
                  window.open("https://fantasyat.herokuapp.com/", "_blank")
                }
              >
                <FaExternalLinkAlt />
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() =>
                  window.open(
                    "https://github.com/alexteshome/FantasyBB",
                    "_blank"
                  )
                }
              >
                <FaGithub />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};