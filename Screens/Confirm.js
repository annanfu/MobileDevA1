import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'
import Colors from '../helper';
import GradientBackground from '../Components/GradientBackground';
import Card from '../Components/Card';
import ButtonArea from '../Components/ButtonArea';
import PrimaryText from '../Components/PrimaryText';

export default function Confirm({confirmVisibility, userInfo, gobackHandler, continueHandler}) {
    function handleGoback() {
       gobackHandler();
    }
    function handleContinue() {
       continueHandler();
    }
    
  return (
    <Modal visible={confirmVisibility} animationType="slide" transparent={true}>
      <GradientBackground>
        <Card>
          <PrimaryText>Hello {userInfo[0]}</PrimaryText>
          <PrimaryText>Here is the information you entered:</PrimaryText>
          <PrimaryText>{userInfo[1]}</PrimaryText>
          <PrimaryText>{userInfo[2]}</PrimaryText>
          <PrimaryText>
            If it is not correct, please go back and edit them.
          </PrimaryText>

          <ButtonArea>
            <Button
              title="Go back"
              color={Colors.cancel}
              onPress={handleGoback}
            />
            <Button
              title="Continue"
              color={Colors.ok}
              onPress={handleContinue}
            />
          </ButtonArea>
        </Card>
      </GradientBackground>
    </Modal>
  );
}

const styles = StyleSheet.create({
    text: {
        color: Colors.primary,
        fontSize: 18,
    },
})