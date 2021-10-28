import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styles from "./portfolio.module.scss";
import { Fade } from "react-awesome-reveal";
import { FC } from "react";

export const Portfolio: FC = () => {
  return (
    <div className={`slide ${styles.slide}`} id="portfolio">
      <div className="slide-header">
        <Fade triggerOnce>
          <h2>My Work</h2>
        </Fade>
        <div className="underline" />
      </div>
      <Fade triggerOnce>
        <p>Projects that I'm currently working on/have worked on in the past</p>
      </Fade>
      <div className="slide-content">
        <div className={styles.cardGrid}>
          <Fade triggerOnce>
            <div className={styles.cardGroup}>
              <Card className={styles.card}>
                <div className={styles.cardContent} id="project1">
                  <img
                    className={styles.cardImage}
                    src="/screenshots/cmbaconsulting.png"
                  />
                  <CardContent>
                    <div className={styles.cardDescription}>
                      <h2 className={styles.cardTitle}>
                        Chika Mba Consulting Inc (Freelance)
                      </h2>
                      {/* <p>Consulting website built with</p> */}
                      <Typography variant="body2" component="p">
                        React + Gatsby + Node
                      </Typography>
                      <div className="insideButtons">
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
              <div className={styles.outsideButtons}>
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
            <div className={styles.cardGroup}>
              <Card className={styles.card}>
                <div className={styles.cardContent} id="atmdb">
                  <img className={styles.cardImage} src="/screenshots/atmdb.png" />
                  <CardContent>
                    <div className={styles.cardDescription}>
                      <h2 className={styles.cardTitle}>ATMDb - Popular Movies</h2>
                      {/* <p>Consulting website built with</p> */}
                      <Typography variant="body2" component="p">
                        React + Redux + Semantic UI
                      </Typography>
                      <div className={styles.insideButtons}>
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
              <div className={styles.outsideButtons}>
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
              </div>{" "}
            </div>
            <div className={styles.cardGroup}>
              <Card className={styles.card}>
                <div className={styles.cardContent} id="atmdb">
                  <img
                    className={styles.cardImage}
                    src="/screenshots/fantasyat.png"
                  />
                  <CardContent>
                    <div className={styles.cardDescription}>
                      <h2 className={styles.cardTitle}>
                        FantasyAT - Fantasy Basketball Team Storage
                      </h2>
                      {/* <p>Consulting website built with</p> */}
                      <Typography variant="body2" component="p">
                        React + Redux + Node + MongoDB
                      </Typography>
                      <div className={styles.insideButtons}>
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
              <div className={styles.outsideButtons}>
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
          </Fade>
        </div>
      </div>
    </div>
  );
};
