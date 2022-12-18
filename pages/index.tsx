import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import {
  Avatar,
  Badge,
  Card,
  Collapse,
  Grid,
  Link,
  Spacer,
  Text,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faGithub,
  faGithubAlt,
  faGitlab,
  faMastodon,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pornpipat Popum</title>
        <meta name="description" content="Personal website and portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter" content="https://twitter.com/CappyIshihara" />
        <meta name="author" content="Pornpipat Popum" />
        <meta
          name="keywords"
          content="pornpipat, popum, cappy, cappyishihara, korewachino, React, nextjs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid.Container className="flex justify-center items-center h-screen absolute right-1/4">
          <Card css={{ mw: "500px" }} variant="bordered" className="card">
            <Card.Header>
              <Grid.Container gap={2} className="flex p-5">
                {/* avatar */}
                <Avatar
                  squared
                  src="https://avatars.githubusercontent.com/u/38139192?v=4"
                />
                <Text className="h2 p-1 ml-2 text-2xl dark:text-white">
                  Pornpipat Popum
                </Text>
              </Grid.Container>
              <Link href="https://en.pronouns.page/@korewachino">
                <Badge color="warning" className="text-yellow-900">
                  <Text className="text-black text-xs">Any pronouns</Text>
                </Badge>
              </Link>
            </Card.Header>
            <Card.Body>
              <Collapse.Group className="" bordered>
                <Collapse title="General">
                  <Text className="txtbody">Location: Thailand</Text>
                  <Spacer />
                  <Text className="txtbody">Gender: Genderfluid</Text>
                </Collapse>

                <Collapse title="Skills">
                  <Text className="text-2xl dark:text-white">
                    Programming Languages
                  </Text>
                  <Text className="txtbody">
                    Rust, Python, TypeScript (JavaScript), Go Frameworks:
                    Next.js, React, Nuxt.js, Vue.js, Flask, Rocket, Tokio
                  </Text>
                  <Spacer />
                  <Text className="text-2xl dark:text-white">Frameworks</Text>
                  <Text className="txtbody">
                    Next.js, React, Nuxt.js, Vue.js, Flask, Rocket, Tokio
                  </Text>
                  <Spacer />

                  <Text className="text-2xl dark:text-white">Technologies</Text>
                  <Text className="txtbody">
                    Docker, Kubernetes, Ansible, Git, Linux (Fedora/RHEL)
                  </Text>
                </Collapse>
              </Collapse.Group>
            </Card.Body>
            <Card.Footer>
              {/* socials */}
              <Grid.Container
                className="flex p-5 justify-center text-4xl space-x-2"
                xl={true}
              >
                <Link block href="https://twitter.com">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
                <Link block href="https://github.com/korewaChino">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link block href="https://gitlab.com/korewaChino">
                  <FontAwesomeIcon icon={faGitlab} />
                </Link>
                <Link block href="mailto:cappy@cappuchino.xyz">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Link>
                <Link block rel="me" href="https://mstdn.social/@korewaChino">
                  <FontAwesomeIcon icon={faMastodon} />
                </Link>
              </Grid.Container>
            </Card.Footer>
          </Card>
        </Grid.Container>

        <div className="flex justify-center items-center h-screen absolute left-2/4">
          <Text className="h2 p-1.5 ml-2 text-3xl dark:text-white font-bold">
            <Text className="h1 text-5xl text-blue-400 font-black pb-3">
              Pornpipat Popum
            </Text>
            DevOps & Systems Engineer @{" "}
            <Link
              href="https://fyralabs.com/"
              color="error"
              className="inline-block"
            >
              Fyra Labs
            </Link>
            ,
            <br />
            <Link
              href="https://ultramarine-linux.org/"
              color="primary"
              className="inline-block"
            >
              Ultramarine Linux
            </Link>{" "}
            Project Lead
            <br />
            <Text className="text-xl pt-4 dark:text-white">
              AKA Cappy Ishihara. Software and Systems Engineer from Bangkok,
              Thailand. Linux enthusiast.
              <br />
              I specialize in engineering and building systems that are light,
              secure, and reliable.
              <br />I also enjoy writing software and building tools that
              empower people to do more with less.
            </Text>
          </Text>
        </div>
      </main>
    </>
  );
}
