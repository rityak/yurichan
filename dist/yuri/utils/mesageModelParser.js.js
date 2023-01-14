import contain from './contain.js';
export default function messageModelParser(messageModel) {
    const handlerSeries = [];
    messageModel.forEach(model => {
        const handler = message => {
            const result = { status: false };
            result.status = contain(message, model.triggers);
            if (result.status)
                result.value = model;
            return result;
        };
        handlerSeries.push(handler);
    });
    return handlerSeries;
}
//# sourceMappingURL=mesageModelParser.js.js.map