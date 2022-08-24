export type messageDTOType = 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFORMATIONAL';

export enum msgType  { SUCCESS = 'SUCCESS', ERROR = 'ERROR', WARNING =  'WARNING', INFORMATIONAL = 'INFORMATIONAL'}

export class MessageDTO {
    public msgType: messageDTOType;
    public msgText: string;

    constructor(msg: string, type?: messageDTOType) {
        this.msgText = msg;
        if (type) {
            this.msgType = type;
        } else {
            this.msgType = 'SUCCESS';
        }
    }

}
