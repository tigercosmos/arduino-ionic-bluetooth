#!/usr/bin/env sh

export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_162.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH
export ANDROID_SDK_ROOT="/usr/local/share/android-sdk"
export PATH=${PATH}:/usr/local/share/android-sdk/tools
export PATH=${PATH}:/usr/local/share/android-sdk/platform-tools
ionic cordova build android --prod --debug --livereload --buildConfig