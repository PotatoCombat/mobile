#Mobile
___

A simple project to explore cross-platform mobile + web development.

Created with:
- Expo (SDK 45)
- React-Native 0.68.2

##Setup

---

Start Metro:
```
yarn start
```

Next, select a platform:
```
› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu

› Press ? │ show all commands
```

##FAQ

---

**How to open the Android/iOS simulators?**
   
To run android and iOS simulators, please follow the [React Native Environment Setup](https://reactnative.dev/docs/0.68/environment-setup).

---

**How to open in the browser?**

Open `http://localhost:<PORT_NUMBER>`.
   
For example, after selecting the web platform, you should see this message:
```
Starting Webpack on port 19006 in development mode.
```

This means your website is hosted on http://localhost:19006.

---

**How to change the default browser?**

Edit the `BROWSER` variable in package.json.

For Firefox, change the following two lines:
```
"start": "env BROWSER=firefox expo start",
"web": "env BROWSER=firefox expo start --web",
```

For other browsers, use the following values:
- `chrome`
- `edge`
