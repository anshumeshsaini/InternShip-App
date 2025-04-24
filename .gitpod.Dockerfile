FROM gitpod/workspace-full

# Install Android SDK
ENV ANDROID_HOME=/home/gitpod/android-sdk
ENV PATH="${ANDROID_HOME}/cmdline-tools/latest/bin:${ANDROID_HOME}/platform-tools:${PATH}"

RUN mkdir -p ${ANDROID_HOME} \
    && curl -s https://dl.google.com/android/repository/commandlinetools-linux-8512546_latest.zip -o /tmp/android-tools.zip \
    && unzip -q /tmp/android-tools.zip -d /tmp/android-tools \
    && mkdir -p ${ANDROID_HOME}/cmdline-tools/latest \
    && mv /tmp/android-tools/cmdline-tools/* ${ANDROID_HOME}/cmdline-tools/latest \
    && rm -rf /tmp/android-tools /tmp/android-tools.zip \
    && yes | sdkmanager --licenses \
    && sdkmanager platform-tools \
    && sdkmanager "platforms;android-33" \
    && sdkmanager "build-tools;33.0.0" \
    && sdkmanager "ndk;25.1.8937393"

# Install Node.js and Yarn
USER gitpod
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash \
    && export NVM_DIR="$HOME/.nvm" \
    && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" \
    && nvm install 18 \
    && nvm use 18 \
    && npm install -g yarn eas-cli
