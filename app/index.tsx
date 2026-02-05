import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (

    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>

        <Link href="/page2" style={styles.link}>
          <Text style={styles.linkText}>ไปหน้าที่ 2</Text>
        </Link>
        <Link href="/flexbox/ex01" style={styles.link}>
          <Text style={styles.linkText}>Ex01</Text>
        </Link>
        <Link href="/flexbox/ex02" style={styles.link}>
          <Text style={styles.linkText}>Ex02</Text>
        </Link>
        <Link href="/flexbox/ex03" style={styles.link}>
          <Text style={styles.linkText}>Ex03</Text>
        </Link>
        <Link href="/flexbox/ex04" style={styles.link}>
          <Text style={styles.linkText}>Ex04</Text>
        </Link>
        <Link href="/flexbox/ex05" style={styles.link}>
          <Text style={styles.linkText}>Ex05</Text>
        </Link>
        <Link href="/flexbox/ex06" style={styles.link}>
          <Text style={styles.linkText}>Ex06</Text>
        </Link>
        <Link href="/flexbox/ex07" style={styles.link}>
          <Text style={styles.linkText}>Ex07</Text>
        </Link>
        <Link href="/flexbox/ex07" style={styles.link}>
          <Text style={styles.linkText}>Ex07</Text>
        </Link>
        <Link href="/flexbox/ex08" style={styles.link}>
          <Text style={styles.linkText}>Ex08</Text>
        </Link>
        <Link href="/flexbox/ex09" style={styles.link}>
          <Text style={styles.linkText}>Ex09</Text>
        </Link>
        <Link href="/flexbox/ex010" style={styles.link}>
          <Text style={styles.linkText}>Ex10</Text>
        </Link>
        <Link href="/flexbox/ex11" style={styles.link}>
          <Text style={styles.linkText}>Ex11</Text>
        </Link>
        <Link href="/flexbox/ex12" style={styles.link}>
          <Text style={styles.linkText}>Ex12</Text>
        </Link>
        <Link href="/test-components" style={styles.link}>
          <Text style={styles.linkText}>Test Components</Text>
        </Link>
        <Link href="/test-Greeting" style={styles.link}>
          <Text style={styles.linkText}>Test Greeting</Text>
        </Link>
        <Link href="/travel" style={styles.link}>
          <Text style={styles.linkText}>Travel</Text>
        </Link>
        <Link href="/resort" style={styles.link}>
          <Text style={styles.linkText}>resort</Text>
        </Link>
        <Link href="/health" style={styles.link}>
          <Text style={styles.linkText}>Health</Text>
        </Link>
        <Link href="/home" style={styles.link}>
          <Text style={styles.linkText}>Home</Text>
        </Link>
        <Link href="/flatlistexample" style={styles.link}>
          <Text style={styles.linkText}>FlatList Example</Text>
        </Link>

        <Link href="/location" style={styles.link}>
          <Text style={styles.linkText}>Location</Text>
        </Link>

        <Link href="/ant" style={styles.link}>
          <Text style={styles.linkText}>heros</Text>
        </Link>

        <Link href="/pikachu" style={styles.link}>
          <Text style={styles.linkText}>Pokemon</Text>
        </Link>


      </View>
    </ScrollView>

  );

}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", },
  link: { margin: 10, padding: 10, backgroundColor: "#2196F3", borderRadius: 5, },
  linkText: { color: "#fff", fontSize: 16, textAlign: "center", },
});
