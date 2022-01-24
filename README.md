hello! This is a **plugin** for tgsnake

## manuals :

- install :

```bash
 npm install @tgsnake/antispam
```

- Config :

```javascript
const { Snake } = require("tgsnake");
const bot = new Snake({
  // tgSnake config
});
const AntiSpam = require("@tgsnake/antispam");
const spam = new AntiSpam({
  // anti spam config
});
bot.run();
bot.on("message", (ctx) => {
  spam.start(ctx);
  if (spam.run()) {
    // Start coding from here on out
  }
});
```

- antiSpam Config:

```javascript
const AntiSpam = require("@tgsnake/antispam");
const spam = new AntiSpam({
  showText: true,
  text1: "warn text",
  text2: "This text is limitations",
  text3: "This text is a permanent limitation",
  len1: 5,
  len2: 10,
  len3: 15,
  timer: 3000,
});
```

##### What is showText?

If the value is false, the warning messages will not be displayed to the user, but only operations will be performed, but if the value is true, the warning messages will be displayed to the user.

##### What are lens for?

They specify a number of messages that need to be identified in their own operations.

##### What is a timer?

Specifies the time limits when non-permanent restrictions are resolved, returning everything to the first state under permanent restrictions at that time.

##### What is the first operation?

This operation is performed when the amount of messages sent by the user at the specified timer is greater than len1, the first operation is merely a warning

##### What is the second operation?

This operation is performed when the amount of messages sent by the user is greater than len2 at the specified timer, here the user is limited until the timer is finished.

##### What is operation 3?

This operation is performed when the amount of messages sent by the user at the specified timer is greater than len3, here the user is permanently restricted

- example project :

```javascript
const { Snake } = require("tgsnake");
const bot = new Snake({
  apiId,
  apiHash,
  botToken,
});
const AntiSpam = require("@tgsnake/antispam");
const spam = new AntiSpam({
  showText: true,
  text1: "Please use the robot a little more calmly",
  text2: "You're restricted for 10 seconds.",
  text3: "You are for Always severely restricted",
  len1: 3,
  len2: 5,
  len3: 10,
  timer: 10000,
});
bot.run();
bot.on("message", (ctx) => {
  spam.start(ctx);
  if (spam.run()) {
    ctx.reply("welcome to bot");
  }
});
```

## Community :

[tgsnake chat](https://t.me/tgsnakechat)
