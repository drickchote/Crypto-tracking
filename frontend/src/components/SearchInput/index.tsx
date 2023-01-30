import {createRef} from 'react';
import {KeyboardAvoidingView, Pressable, TextInput, View} from 'react-native';
import PolymorphicKeyboardAvoidingView from '../PolymorphicKeyboardAvoidingView';
import {
  Container,
  Input,
  SearchIcon,
  ClearIcon,
  InputContainer,
  ClearIconContainer,
} from './styles';

interface SearchInputProps {
  inputValue: string;
  onChange(text: string): void;
}

export default function SearchInput({inputValue, onChange}: SearchInputProps) {
  const inputRef = createRef<TextInput>();

  const focus = () => {
    inputRef.current?.focus();
  };

  return (
    <PolymorphicKeyboardAvoidingView>
      <Pressable
        onPress={() => {
          console.log('pressable 1');
          focus();
        }}>
        <Container>
          <InputContainer>
            <SearchIcon source={require('../../assets/images/search.png')} />
            <Input
              ref={inputRef}
              value={inputValue}
              onChangeText={text => onChange(text)}
              autoCorrect={false}
              autoCapitalize="none"
            />
          </InputContainer>
          <Pressable
            onPress={() => {
              onChange('');
            }}>
            <ClearIconContainer>
              <ClearIcon source={require('../../assets/images/clear.png')} />
            </ClearIconContainer>
          </Pressable>
        </Container>
      </Pressable>
    </PolymorphicKeyboardAvoidingView>
  );
}
