import { getResumeStatesTemplate } from "../stateTemplates/ResumeStates"

export const ResumeUpdater = (() => {
    const updater = getResumeStatesTemplate();
    return updater;
})();

export const DefaultResume = (() => {
    const values = {
        fullName: 'Peter Parker',
        email: 'notSpiderMan982@gmail.com',
        phoneNumber: '(407) 224-1783',
        address: '20 Ingram Street in Forest Hills, Queens'
    };
    return values;
})();