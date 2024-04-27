import React from 'react';
import { StyleSheet, View } from 'react-native';
import UserProfile from './components/UserProfile';


const App: React.FC = () => {
  const userProfileData = {
    name: 'Jessica Randall',
    location: 'London, United Kingdom',
    description: '"Front-end developer and avid reader".',
    imageUrl: 'https://i.pinimg.com/736x/06/5f/06/065f06bab28c6e1bd6e4ee4d0250c88c.jpg',
    links: [
      { url: 'https://github.com/JohanaBaez', text: 'GitHub' },
      { url: 'https://www.frontendmentor.io/', text: 'Frontend Mentor' },
      { url: 'https://www.linkedin.com/feed/', text: 'LinkedIn' },
      { url: 'https://twitter.com/?lang=es', text: 'Twitter' },
    ],
  };

  return (
    <View style={styles.container}>
      <UserProfile {...userProfileData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;