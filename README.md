# Grupo Radar Radio - Mobile Application

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Currently Necessary Setup Steps

### Disable New Architecture

This application currently uses react-native modules that do not support React Native - New Architecture. As such this needs to be disabled for Android and iOS.

**Android**

- Set `NewArchitecture:false` in android/build.gradle

**iOS**

- `RCT_NEW_ARCH_ENABLED=0 pod install` from ./ios/ directory.

### Disable User Script Sandboxing (iOS)

This step is partly related to a new feature enabled in XCode that creates a sandbox while building the IOS application. This will break if the sandbox cannot access the files needed while building the application in XCode. If issue presents, disable User Script Sandboxing in XCode on this project.

### React Native Track Player Version 4.1

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

```sh
cd ios

pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.
