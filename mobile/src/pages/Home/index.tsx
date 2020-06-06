import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const Home = () => {
  const navigation = useNavigation();
  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");

  function handleNavigateToPoints() {
    if (!city || !uf) {
      Alert.alert(
        "Permissão negada",
        "preencha a cidade e a uf para prosseguir"
      );
    } else {
      navigation.navigate("Points", { uf, city });
    }
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ImageBackground
        imageStyle={{ width: 274, height: 368 }}
        source={require("../../assets/home-background.png")}
        style={styles.container}
      >
        <View style={styles.main}>
          <Image source={require("../../assets/logo.png")} />
          <View>
            <Text style={styles.title}>
              Seu marketplace de coleta de resíduos
            </Text>
            <Text style={styles.description}>
              Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <TextInput
            value={uf}
            onChangeText={setUf}
            placeholder="Digite a UF"
            style={styles.input}
            autoCapitalize="characters"
            autoCorrect={false}
            maxLength={2}
          />
          <TextInput
            value={city}
            onChangeText={setCity}
            placeholder="Digite a Cidade"
            style={styles.input}
            autoCorrect={false}
          />

          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color="#FFF" size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Home;
