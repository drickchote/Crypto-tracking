import React from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';

interface PolymorphicKeyboardAvoidingViewProps {
  children: React.ReactElement;
}

export default function PolymorphicKeyboardAvoidingView({
  children,
}: PolymorphicKeyboardAvoidingViewProps) {
  return Platform.OS === 'ios' ? (
    <KeyboardAvoidingView behavior="padding">{children}</KeyboardAvoidingView>
  ) : (
    <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={30}>
      {children}
    </KeyboardAvoidingView>
  );
}
