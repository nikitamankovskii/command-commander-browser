import { Command } from './commander.interface';

export class commands {
    private _commands: {}

    constructor (command: Command)  {
        this._commands[command.id] = command;
    }

    set command (command: Command){
        this._commands[command.id] = command;
    }

    @this.validateId // check
    getCommand (id: string) {
        return this._commands[id]
    }

    executeCommand(id: string) {
        console.log(`Executed: ${this._commands[id].title}\n`);
        //not ready yet
    }

    loadCommands(){
        console.log('loading'); 
        //not ready yet
    }
    // check this code
    private validateId (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const oldSet = descriptor.set;
        descriptor.set = function(value: string) {
            if (Object.keys(this._commands).includes(value)) {
                oldSet.call(this, value);
            }
            console.log('cheater!');   
            throw new Error("Invalid value");
        }
    }
}
