/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ColorPicker} from 'react-native-color-picker';
import DatePicker from 'react-native-datepicker';
import {Picker} from '@react-native-community/picker';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
  ScrollView,
  Slider,
  CheckBox,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const radio_props = [
  {label: 'male', value: 0},
  {label: 'female', value: 1},
  {label: 'other', value: 2},
];

const App: () => React$Node = () => {
  const [firstColor, setfirstColor] = React.useState('#3399ff');
  const [secondColor, setsecondColor] = React.useState('#cc66ff');
  const [showPicker, setVisbility] = React.useState(false);
  const [showPicker2, setVisbility2] = React.useState(false);
  const [firstName, onChangeText] = React.useState('');
  const [lastName, onChangeLastName] = React.useState('');
  const [value, setState] = React.useState(-1);
  const [branch, setBranch] = React.useState('EEE');
  const [date, setDate] = React.useState('2016-05-15');
  const [speed, setChange] = React.useState(50);
  const [checkBox, setCheckBox] = React.useState(false);
  return (
    <ScrollView>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0.7, y: 0}}
        colors={[firstColor, secondColor]}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>Select your favourite colors</Text>
        <Button
          onPress={() => {
            setVisbility(!showPicker);
            setVisbility2(false);
          }}
          title="choose"
          color={firstColor}
        />
        <Button
          onPress={() => {
            setVisbility2(!showPicker2);
            setVisbility(false);
          }}
          title="choose"
          color={secondColor}
        />
        <View style={{}}>
          {showPicker && (
            <ColorPicker
              onColorSelected={(color) => {
                setfirstColor(color);
                setVisbility2(false);
                setVisbility(false);
              }}
              style={{flex: 1, height: 100}}
            />
          )}

          {showPicker2 && (
            <ColorPicker
              onColorSelected={(color) => {
                setsecondColor(color);
                setVisbility(false);
                setVisbility2(false);
              }}
              style={{flex: 1, height: 100}}
            />
          )}
        </View>
        <View style={{backgroundColor: 'white', padding: 10}}>
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: 'whitesmoke',
            }}
            onChangeText={(text) => onChangeText(text)}
            value={firstName}
            placeholder="First Name"
          />
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: 'whitesmoke',
              marginTop: 12,
            }}
            onChangeText={(text) => onChangeLastName(text)}
            value={lastName}
            placeholder="Last Name"
          />
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: 'whitesmoke',
              marginTop: 12,
            }}
            onChangeText={(text) => onChangeLastName(text)}
            value={lastName}
            placeholder="Mobile Number"
            keyboardType="numeric"
          />
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: 'whitesmoke',
              marginTop: 12,
            }}
            onChangeText={(text) => onChangeLastName(text)}
            value={lastName}
            placeholder="Email"
          />
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: 'whitesmoke',
              marginTop: 12,
            }}
            onChangeText={(text) => onChangeLastName(text)}
            value={lastName}
            secureTextEntry={true}
            placeholder="Password"
          />
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              backgroundColor: 'whitesmoke',
              marginTop: 12,
            }}
            onChangeText={(text) => onChangeLastName(text)}
            value={lastName}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
          <View style={{marginTop: 12}}>
            <Text>Select your Gender :</Text>
            <RadioForm
              radio_props={radio_props}
              initial={-1}
              onPress={(value) => {
                setState(value);
              }}
              formHorizontal={true}
              buttonColor={'gray'}
              buttonSize={10}
              borderWidth={15}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 12,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 12}}>Select branch :</Text>
              <Picker
                selectedValue={branch}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) => setBranch(itemValue)}>
                <Picker.Item label="EEE" value="EEE" />
                <Picker.Item label="CSE" value="CSE" />
                <Picker.Item label="ECE" value="ECE" />
                <Picker.Item label="MEC" value="MEC" />
                <Picker.Item label="IT" value="IT" />
                <Picker.Item label="CIVIL" value="CIVIL" />
              </Picker>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 12}}>DOB:</Text>
              <DatePicker
                style={{width: 200}}
                date={date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="1998-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {
                  setDate(date);
                }}
              />
            </View>
          </View>
          <View>
            <TextInput
              style={{
                height: 80,
                borderColor: 'gray',
                borderWidth: 1,
                backgroundColor: 'whitesmoke',
                marginTop: 12,
                textAlignVertical: 'top',
              }}
              onChangeText={(text) => onChangeLastName(text)}
              value={lastName}
              placeholder="Type your address here"
              multiline
              numberOfLines={4}
            />
          </View>
          <View style={{marginTop: 12}}>
            <Text>Select your Typing Speed :</Text>
            <Slider
              step={1}
              maximumValue={100}
              onValueChange={(speed) => setChange(speed)}
              value={speed}
            />
            <Text>{speed}</Text>
          </View>
          <View>
            <CheckBox
              value={checkBox}
              onValueChange={(value) => setCheckBox(!checkBox)}></CheckBox>
            <Text>I accept the Terms of Use & Privacy Policy</Text>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default App;
