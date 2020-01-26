module.exports = {

    //---------------------------------------------------------------------
    // Editor Extension Name
    //
    // This is the name of the editor extension displayed in the editor.
    //---------------------------------------------------------------------

    name: "lavalink",

    //---------------------------------------------------------------------
    // Is Command Extension
    //
    // Must be true to appear in "command" context menu.
    // This means each "command" will hold its own copy of this data.
    //---------------------------------------------------------------------

    isCommandExtension: true,

    //---------------------------------------------------------------------
    // Is Event Extension
    //
    // Must be true to appear in "event" context menu.
    // This means each "event" will hold its own copy of this data.
    //---------------------------------------------------------------------

    isEventExtension: true,

    //---------------------------------------------------------------------
    // Is Editor Extension
    //
    // Must be true to appear in the main editor context menu.
    // This means there will only be one copy of this data per project.
    //---------------------------------------------------------------------

    isEditorExtension: true,

    //---------------------------------------------------------------------
    // Extension Fields
    //
    // These are the fields for the extension. These fields are customized
    // by creating elements with corresponding IDs in the HTML. These
    // are also the names of the fields stored in the command's/event's JSON data.
    //---------------------------------------------------------------------

    fields: [],

    //---------------------------------------------------------------------
    // Default Fields
    //
    // The default values of the fields.
    //---------------------------------------------------------------------

    defaultFields: {},

    //---------------------------------------------------------------------
    // Extension Dialog Size
    //
    // Returns the size of the extension dialog.
    //---------------------------------------------------------------------

    size: function () {
        return {
            width: 500,
            height: 340
        };
    },

    //---------------------------------------------------------------------
    // Extension HTML
    //
    // This function returns a string containing the HTML used for
    // the context menu dialog.
    //---------------------------------------------------------------------

    html: function () {
        return ``
    },

    //---------------------------------------------------------------------
    // Extension Dialog Init Code
    //
    // When the HTML is first applied to the extension dialog, this code
    // is also run. This helps add modifications or setup reactionary
    // functions for the DOM elements.
    //---------------------------------------------------------------------

    init: function () {},

    //---------------------------------------------------------------------
    // Extension Dialog Close Code
    //
    // When the dialog is closed, this is called. Use it to save the data.
    //---------------------------------------------------------------------

    close: function (document, data) {},

    //---------------------------------------------------------------------
    // Editor Extension Bot Mod
    //
    // Upon initialization of the bot, this code is run. Using the bot's
    // DBM namespace, one can add/modify existing functions if necessary.
    // In order to reduce conflictions between mods, be sure to alias
    // functions you wish to overwrite.
    //
    // This is absolutely necessary for editor extensions since it
    // allows us to setup modifications for the necessary functions
    // we want to change.
    //
    // The client object can be retrieved from: `const bot = DBM.Bot.bot;`
    // Classes can be retrieved also using it: `const { Actions, Event } = DBM;`
    //---------------------------------------------------------------------

    mod: function (DBM) {
        const wm = DBM.Actions.getWrexMods();
        const {
            PlayerManager
        } = wm.require('discord.js-lavalink');

        const nodes = [{
            host: 'localhost',
            port: 3000,
            password: 'TheMonDonGay'
        }]

        DBM.Bot.bot.on('ready', () => {
            DBM.Bot.bot.lavalink = new PlayerManager(DBM.Bot.bot, nodes, {
                user: DBM.Bot.bot.user.id,
                shards: 0
            })
        })
    }
}; // u stupid :reverse: :AngryBoi: