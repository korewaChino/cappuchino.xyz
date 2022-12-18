import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import {
  Avatar,
  Badge,
  Card,
  Grid,
  Link,
  Spacer,
  Text,
} from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pornpipat Popum</title>
        <meta name="description" content="Personal website and portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        {/* move card to vertical center, slightly to the left */}

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
            </Card.Header>
            <Card.Body>
              <Text className="txtbody">
                Pronouns: <Badge color="warning">any</Badge>
              </Text>
              <Text className="txtbody">Location: Thailand</Text>
              <Spacer y={0.5} />
              <Text className="text-4xl dark:text-white">Skills</Text>

              <Text className="txtbody">
                Programming Languages: Rust, Python, TypeScript (JavaScript), Go
                <br />
                Frameworks: Next.js, React, Nuxt.js, Vue.js, Flask, Rocket,
                Tokio
              </Text>
              <Text className="txtbody">
                Technologies: Docker, Kubernetes, Ansible, Git, Linux
                (Fedora/RHEL)
              </Text>
            </Card.Body>
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
            </Link>
            @ Project Lead
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
