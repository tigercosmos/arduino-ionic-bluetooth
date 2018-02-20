# Ionic Arduino Bluetooth: bluetooth controller

Ionic app for arduino bluetooth communication.

## Environmnet Setting

MacOS

```sh
sudo npm install -g cordova ionic
brew cask install java8
cd ~
mkdir .android
touch ~/.android/repositories.cfg
brew cask install android-sdk
brew install gradle
sdkmanager tools
sdkmanager "build-tools;26.0.2" "platforms;android-25"
```

## start

```sh
git clone https://github.com/tigercosmos/ionic-arduino-bluetooth.git
cd ionic-arduino-bluetooth
npm install
ionic serve

# build app
chmod ./tool +x
./tool # you may need to modify this file for yours environment
```

## Inspect

Use Chrome with:

```url
Chrome://inspect
```

## Licence

MIT
