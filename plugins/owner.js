const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😎MickeyMwol😎═════╗*\n           \n*⚜═MickeyMwol═⚜*\n\n*owner Akash - http://Wa.me/+919526045276*\n* *\n🔰instagram:- https://youtube.com/c/ICHUTECH*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Akash*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═MickeyMwol Owner Akash═💥*\n\n*💘https://github.com/Akashakash3/MickeyMwol*\n*     *\n💓MickeyMw═Owner Akash═*\n\n*⚜https://github.com/Akashakash3/MickeyMwol*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😎MickeyMwol😎═════╗*\n           \n*⚜═MickeyMwol═⚜*\n\n*owner Akash - http://Wa.me/+919526045276*\n* *\n🔰Youtube: https://youtube.com/c/ICHUTECH*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Akash*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═MickeyMwol Owner Akash═💥*\n\n*💘https://github.com/Akashakash3/MickeyMwol*\n*     *\n💓MickeyMwol═Owner Akash═*\n\n*⚜https://github.com/Akashakash3/MickeyMwol*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

