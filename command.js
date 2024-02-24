const { REST, Routes }= require('discord.js');

const commands = [
    {
      name: 'create',
      description: 'create a short url',
    },
];

const rest = new REST({ version: '10' }).setToken("my token id");
(async()=>{
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands("my client id"), { 
            body: commands 
        });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
})();
