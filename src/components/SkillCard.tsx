import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 7,
    marginBottom: 10,
  },
  buttonSkill: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 7,
  },
  skills: {
    color: '#999',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

type SkillProps = {
  skill: string;
  handleDeleteSkill: () => void;
};

export function SkillCard({ skill, handleDeleteSkill }: SkillProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.skills}>{skill}</Text>
      <TouchableOpacity
        testID={`${skill}-handleDeleteSkillButton`}
        onPress={handleDeleteSkill}
        activeOpacity={0.7}
        style={styles.buttonSkill}
      >
        <Feather name="trash" size={20} color="#E53E3E" />
      </TouchableOpacity>
    </View>
  );
}
