## Mobile and API Test Automation Framework For Capitec

A TypeScript-based test automation framework combining WebdriverIO, Appium, and Playwright API testing. It supports Android APK automation, REST API validation, reusable page objects, and automated test execution.

## Tech Stack

1. TypeScript — programming language
2. WebdriverIO — mobile UI automation framework
3. Appium 2+ — mobile automation server
4. UiAutomator2 — Android automation driver
5. Playwright Test — REST API testing
6. Mocha — WebdriverIO test runner
7. Node.js / npm — runtime and package management

## Project Structure

data
app
test - pageObject - api  - apiBookingObjects.ts
                  - mobile - common.page.ts
				           - form.page.ts
						   - landing.page.ts
						   - login.page.ts
						   - signup.page.ts
						   - swipe.page.ts
     - specs - api    - api_test.spec.ts
             - mobile -	mobile_form.spec.ts
			          - mobile_login_invalid.spec.ts
					  - mobile_login_successful.spec.ts
					  - mobile_signup.spec.ts
					  - mobile_swipe.spec.ts
.env
package-lock.json
packege.json
Playwright.config.ts
tsconfig.json
wdio.conf.ts

## Prerequisites

## Install the following tools:
1. Node.js (LTS)
2. Java JDK
3. Android Studio and Android SDK
4. Android emulator or physical Android device
5. Appium
6. Android UiAutomator2 driver

## Verify your environment:

1. node --version
2. npm --version
3. java -version
4. adb devices

## Installation

## Clone the project and install dependencies:
## Setup:

1. Clone Project
>    _**Choose TypeScript**_
2. Install Playwright - `npm init playwright@latest`
3. Install WebdriverIO -`npm init wdio@latest`


## Android APK Testing with WebdriverIO and Appium

1. Download APK from https://github.com/webdriverio/native-demo-app/releases
2. Place your APK in the app/ directory.
3. update capabilities with device info and apk path in the wdio.conf.ts 

## Running Tests
Tags are used to filter and group tests accordingly.

- Execute mobile tests - `npx wdio run wdio.conf.ts`
- Execute api tests - `npm run api-test`

## Reporting 
View API tests Results on _**index.html**_ file inside folder _**playwright-report**_ folder
View Mobile tests Results on _**undefined-master-report.html**_ file inside folder _**reports/html-reports/**_ folder