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

export default function Works() {
  return (
    <>
      <ul className="list-disc list-item list-outside">
        <li>
          <Text className="dark:text-white">
            Andaman - An advanced meta build system in Rust, including a CI/CD
            script runner and scripting in Rhai. Used in packaging and CI/CD
            workflows for tauOS and Ultramarine Linux.
          </Text>
        </li>
        <li>
          <Text className="dark:text-white">
            Datchani (ดัชนี) - A filesystem indexer and search engine in Rust,
            powered by SurrealDB. Created as a replacement for GNOME&aposs Tracker
            for tauOS.
          </Text>
        </li>
      </ul>
    </>
  );
}
