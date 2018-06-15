import {appDispatcher} from './appDispatcher.js';
import {ActionType} from './action.js';

export const nameStore = {name: '', onChange: null};
export const messageStore = {message: '', onChagne: null};

appDispatcher.register(payload => {
    if (payload.actionType === ActionType.CHANGE_NAME) {
        nameStore.name = payload.value;
        nameStore.onChange();
    }
});

appDispatcher.register(payload => {
    if (payload.actionType === ActionType.SUBMIT_NAME) {
        messageStore.message = nameStore.name + 'さん、こんにちは';
        messageStore.onChange();
    }
});