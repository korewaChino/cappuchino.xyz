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

export default function Skills() {
  return (
    <>
      <Text className="text-2xl dark:text-white">Programming Languages</Text>
      <Text className="txtbody">
        Rust, Python, TypeScript (JavaScript), Go Frameworks: Next.js, React,
        Nuxt.js, Vue.js, Flask, Rocket, Tokio
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
    </>
  );
}
