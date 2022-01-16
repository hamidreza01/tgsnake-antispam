hello! This is a **plugin** for tgsnake

## manuals :

- install :

```bash
 npm install @tgsnake/step
```

- Config :

```javascript
const { Snake } = require("tgsnake");
const { robot } = require("@tgsnake/step");
const bot = new Snake({ apiId, apiHash, botToken });
bot.on("message", (ctx) => {
  robot.run(ctx);
  // Start coding from here on out
});
```

- /start command:

```javascript
robot.start("main", () => {
  ctx.telegram.sendMessage(ctx.from.id, "hello welcome", {
    replyMarkup: {
      keyboard: [["hello", "bye"]],
    },
  });
});
```

- example project :

```javascript
const {Snake } = require('tgsnake')
const {robot} = require('@tgsnake/step')
const bot = new Snake({
    apiId : 00,
    apiHash : ``,
    botToken : ``
})
bot.run()
bot.on('message',(ctx)=>{
    robot
    .run(ctx)
    .start('main',()=>{
        ctx.telegram.sendMessage(ctx.from.id,'hello welcome',{
            replyMarkup : {
                keyboard : [
                    ['hi','bye']
                ]
            }
        })
    })
    robot.step('main',()=>{
        switch(ctx.text){
            case 'hi':
                ctx.reply('how are you');
                break;
            case 'bye':
                ctx.telegram.sendMessage(ctx.from.id,'Are you sure?',{
                    replyMarkup : {
                        keyboard : [
                            ['yes','no']
                        ]
                    }
                })
                robot.setStep('exit')
                break;
            default : 
                ctx.reply('i dont understand')
        }
    })
    robot.step('exit',()=>{
        switch(ctx.text){
            case 'yes':
                ctx.reply('ok bye')
                robot.setStep('noting')
                break;
            case 'no':
                ctx.telegram.sendMessage(ctx.from.id,'hello welcome',{
                    replyMarkup : {
                        keyboard : [
                            ['hi','bye']
                        ]
                    }
                })
                robot.setStep('main')
                break;
        }
    })
})
```

## Community :

[tgsnake chat](https://t.me/tgsnakechat)
